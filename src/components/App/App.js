import { useState, useEffect, useRef } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

import TodoItem from '../TodoItem/TodoItem';
import InputTodo from '../InputTodo';
import FilterTodos from '../FilterTodos';
import Modal from '../Modal';

import apiHandler from '../../api';
import { handleMessageTodoListEmpty, handleModalDialog } from './helpers';

import Image from '../../assets/bg-desktop-light.jpg';

import {
  AppContainer,
  TodoListContainer,
  Hero,
  InputAndTodoListContainer,
  Logo,
} from './AppStyled';

export default function App() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [modalStatus, setModalStatus] = useState({
    isModalShown: false,
    modalType: '',
  });
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);

    const response = await apiHandler({
      endpoint: 'todos',
      method: 'GET',
    });

    if (response.isError) return setTodos([]);

    setTimeout(() => {
      setTodos([]);
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const filterHandler = () => {
      switch (filterStatus) {
        case 'completed':
          const completedTodos = todos.filter(
            (todo) => todo.completed === true
          );

          setFilteredTodos(completedTodos);

          break;
        case 'active':
          const activeTodos = todos.filter((todo) => todo.completed === false);

          setFilteredTodos(activeTodos);

          break;
        default:
          const allTodos = todos;

          setFilteredTodos(allTodos);

          break;
      }
    };

    filterHandler();
  }, [filterStatus, todos]);

  const idProductRef = useRef();

  const handleChangeText = (e) => {
    setValue(e.target.value);
    setCount(e.target.value.length);
  };

  const scrollToRef = useRef();

  const handleAddTask = () => {
    scrollToRef.current.scrollIntoView();

    const newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
      creationDate: Date.now(),
    };

    const newTodoList = [newTodo, ...todos];

    setTodos(newTodoList);
    setValue('');
  };

  const handleCompleteTask = (id) => {
    const filteredTodos = todos.map((todo) => {
      return {
        ...todo,
        completed: todo.id === id ? !todo.completed : todo.completed,
      };
    });

    setTodos(filteredTodos);
  };

  const handleDeleteTask = (id) => {
    setModalStatus({
      isModalShown: true,
      modalType: 'deleteTask',
    });

    idProductRef.current = id;
  };

  const handleClearCompleted = () => {
    setModalStatus({
      isModalShown: true,
      modalType: 'clearCompleted',
    });
  };

  const handleConfirmClearCompleted = (isConfirmed) => {
    if (!isConfirmed)
      return setModalStatus({
        isModalShown: false,
        modalType: '',
      });

    ////**BOOMER
    // const updatedTodos = todos.filter((todo) => todo.completed === false);

    ////**NICE :D
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);

    setModalStatus({
      isModalShown: false,
      modalType: '',
    });
  };

  const handleConfirmDeleteItem = (isConfirmed) => {
    if (!isConfirmed)
      return setModalStatus({
        isModalShown: false,
        modalType: '',
      });

    const updatedArray = todos.filter(
      (todo) => todo.id !== idProductRef.current
    );

    setTodos(updatedArray);

    setModalStatus({
      isModalShown: false,
      modalType: '',
    });
  };

  const getModalHandler = (isConfirmed) => {
    const { modalType } = modalStatus;

    if (modalType === 'deleteTask') return handleConfirmDeleteItem(isConfirmed);

    if (modalType === 'clearCompleted')
      return handleConfirmClearCompleted(isConfirmed);

    alert('There was an error on modal');
  };

  const { isModalShown } = modalStatus;
  const message = handleModalDialog(modalStatus);

  const _renderTodoItems = () => {
    const todosLength = todos.length;
    const filteredTodosLength = filteredTodos.length;

    const emptyTodoListMsg = handleMessageTodoListEmpty(
      todosLength,
      filteredTodosLength,
      filterStatus
    );

    return (
      <div ref={scrollToRef}>
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              handleCompleteTask={handleCompleteTask}
              handleDeleteTask={handleDeleteTask}
            />
          );
        })}

        {emptyTodoListMsg && <p>{emptyTodoListMsg}</p>}
      </div>
    );
  };

  return (
    <AppContainer>
      <Hero src={Image} />
      <Logo>TODO</Logo>

      {loading && <PulseLoader color='#c610d5' size={25} />}

      {!loading && (
        <InputAndTodoListContainer>
          <InputTodo
            textValue={value}
            count={count}
            handleChangeText={handleChangeText}
            handleAddTask={handleAddTask}
          />

          <TodoListContainer>{_renderTodoItems()}</TodoListContainer>

          <FilterTodos
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
            filteredTodos={filteredTodos}
            handleClearCompleted={handleClearCompleted}
          />
        </InputAndTodoListContainer>
      )}

      {isModalShown && (
        <Modal handleConfirmDelete={getModalHandler} message={message} />
      )}
    </AppContainer>
  );
}
