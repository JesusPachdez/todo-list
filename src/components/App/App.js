import { useState, useEffect, useRef } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import InputTodo from '../InputTodo';
import FilterTodos from '../FilterTodos';
import Modal from '../Modal';
import Image from '../../assets/bg-desktop-light.jpg';
import PulseLoader from 'react-spinners/PulseLoader';
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
    try {
      setLoading(true);
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
      );
      const data = await response.json();
      setTodos([]);
      setLoading(false);
    } catch (error) {
      alert('there was an erro fetching information.');
      console.log(error);
      // if (error instanceof TypeError) {
      //   console.log('Type error');
      // }

      // if (error instanceof SyntaxError) {
      //   console.log('Syntax error');
      // }

      // if (error instanceof ReferenceError) {
      //   console.log('Reference error');
      // }
    }
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

  const handleChange = (e) => {
    setValue(e.target.value);
    setCount(e.target.value.length);
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

  const handleMessageTodoListEmpty = () => {
    const allListEmpty = `your to-do list is empty! now you can add your next task!`;
    const completedListEmpty = `Congratulations! you don't have any pending tasks, you are up to date!`;
    const activeListEmpty = `At the moment you don't have active tasks!`;

    if (filterStatus === 'all' && todos.length === 0) return allListEmpty;
    if (filterStatus === 'completed' && filteredTodos.length === 0)
      return completedListEmpty;
    if (filterStatus === 'active' && filteredTodos.length === 0)
      return activeListEmpty;

    return null;
  };

  const mesageTodoListEmpty = handleMessageTodoListEmpty();
  return (
    <AppContainer>
      {loading ? (
        <PulseLoader color="#c610d5" size={25} />
      ) : (
        <>
          <Hero src={Image} />

          <Logo>TODO</Logo>

          <InputAndTodoListContainer>
            <InputTodo
              value={value}
              count={count}
              handleChange={handleChange}
              handleClick={handleClick}
            />
            <TodoListContainer>
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
              </div>
              {mesageTodoListEmpty && <p>{mesageTodoListEmpty}</p>}
            </TodoListContainer>

            <FilterTodos
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
              filteredTodos={filteredTodos}
              handleClearCompleted={handleClearCompleted}
            />
          </InputAndTodoListContainer>

          {isModalShown && (
            <Modal handleConfirmDelete={getModalHandler} message={message} />
          )}
        </>
      )}
    </AppContainer>
  );
}
