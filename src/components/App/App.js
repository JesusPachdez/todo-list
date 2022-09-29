import TodoItem from '../TodoItem/TodoItem';
import InputTodo from '../InputTodo';
import FilterTodos from '../FilterTodos';
import Modal from '../Modal';
import Image from '../../assets/bg-desktop-light.jpg';
import {
  AppContainer,
  TodoListContainer,
  Hero,
  InputAndTodoListContainer,
  Logo,
} from './AppStyled';

import { useState, useEffect, useRef } from 'react';

export default function App() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [modalStatus, setModalStatus] = useState({
    isModalShown: false,
    modalType: '',
  });

  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    setTodos(data);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
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
  }, [status, todos]);

  const idProductRef = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const scrollToRef = useRef();

  const handleClick = (e) => {
    e.preventDefault();

    scrollToRef.current.scrollIntoView();

    const newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
      creationDate: Date.now(),
    };

    const newArray = [newTodo, ...todos];

    setTodos(newArray);
    setValue('');
  };

  const handleCompleteTask = (id) => {
    const newArray = todos.map((todo) => {
      return {
        ...todo,
        completed: todo.id === id ? !todo.completed : todo.completed,
      };
    });

    setTodos(newArray);
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
    if (isConfirmed) {
      const updatedTodos = todos.filter((todo) => todo.completed === false);

      setTodos(updatedTodos);

      setModalStatus({
        isModalShown: false,
        modalType: '',
      });
    } else {
      setModalStatus({
        isModalShown: false,
        modalType: '',
      });
    }
  };

  const handleConfirmDeleteItem = (isConfirmed) => {
    if (isConfirmed) {
      const updatedArray = todos.filter(
        (todo) => todo.id !== idProductRef.current
      );

      setTodos(updatedArray);
      setModalStatus({
        isModalShown: false,
        modalType: '',
      });
    } else {
      setModalStatus({
        isModalShown: false,
        modalType: '',
      });
    }
  };

  const getModalHandler = (isConfirmed) => {
    const { modalType } = modalStatus;

    if (modalType === 'deleteTask') return handleConfirmDeleteItem(isConfirmed);
    if (modalType === 'clearCompleted')
      return handleConfirmClearCompleted(isConfirmed);

    alert('There was an error on modal');
  };

  const handleModalDialog = () => {
    const { modalType } = modalStatus;

    const deleteTodoMessage = 'Are you sure you want to delete this todo?';
    const clearTodosMessage =
      'Are you sure you want to delete all completed todos?';

    if (modalType === 'deleteTask') return deleteTodoMessage;
    if (modalType === 'clearCompleted') return clearTodosMessage;
  };

  const { isModalShown } = modalStatus;
  const message = handleModalDialog();

  return (
    <AppContainer>
      <Hero src={Image} />

      <Logo>TODO</Logo>

      <InputAndTodoListContainer>
        <InputTodo
          value={value}
          handleChange={handleChange}
          handleClick={handleClick}
        />

        <TodoListContainer>
          <div ref={scrollToRef}>
            {todos.length === 0 && <p>Loading your data...</p>}

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
          </div>
        </TodoListContainer>

        <FilterTodos
          setStatus={setStatus}
          filteredTodos={filteredTodos}
          handleClearCompleted={handleClearCompleted}
        />
      </InputAndTodoListContainer>

      {isModalShown && (
        <Modal handleConfirmDelete={getModalHandler} message={message} />
      )}
    </AppContainer>
  );
}
