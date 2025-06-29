import { useState, useRef, useMemo } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

import TodoItem from '../TodoItem/TodoItem';
import InputTodo from '../InputTodo';
import FilterTodos from '../FilterTodos';
import Modal from '../Modal';

import { useTodos } from '../../hooks/useTodos';
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
  const [filterStatus, setFilterStatus] = useState('all');
  const [modalStatus, setModalStatus] = useState({
    isModalShown: false,
    modalType: '',
  });

  // Use custom hook for todo management
  const {
    todos,
    loading,
    addTodo,
    updateTodo,
    deleteTodo,
    clearCompletedTodos,
  } = useTodos();

  // Derive count from value
  const count = value.length;

  // Memoize filtered todos for performance
  const filteredTodos = useMemo(() => {
    switch (filterStatus) {
      case 'completed':
        return todos.filter((todo) => todo.completed === true);
      case 'active':
        return todos.filter((todo) => todo.completed === false);
      default:
        return todos;
    }
  }, [todos, filterStatus]);

  const idProductRef = useRef();

  const handleChangeText = (e) => {
    setValue(e.target.value);
  };

  const scrollToRef = useRef();

  const handleAddTask = async () => {
    if (!value.trim()) return;

    scrollToRef.current.scrollIntoView();

    const newTodo = {
      title: value,
      completed: false,
      creationDate: Date.now(),
    };

    const result = await addTodo(newTodo);
    if (result.success) {
      setValue('');
    }
  };

  const handleCompleteTask = async (id) => {
    await updateTodo(id);
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

  const handleConfirmClearCompleted = async (isConfirmed) => {
    if (!isConfirmed)
      return setModalStatus({
        isModalShown: false,
        modalType: '',
      });

    await clearCompletedTodos();

    setModalStatus({
      isModalShown: false,
      modalType: '',
    });
  };

  const handleConfirmDeleteItem = async (isConfirmed) => {
    if (!isConfirmed)
      return setModalStatus({
        isModalShown: false,
        modalType: '',
      });

    const todoId = idProductRef.current;
    await deleteTodo(todoId);

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

      {loading && <PulseLoader color="#c610d5" size={25} />}

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
