import TodoItem from "./components/TodoItem/TodoItem";
import InputTodo from "./components/InputTodo";
import FilterTodos from "./components/FilterTodos";
import Modal from "./components/Modal";
import ModalTwo from "./components/ModalTwo";

import { useState, useEffect, useRef } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [openModal, setOpenModal] = useState({
    message: "",
    isLoading: false,
  });
  const [openModalTwo, setOpenModalTwo] = useState({
    message: "",
    isLoading: false,
  });

  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          const completedTodos = todos.filter(
            (todo) => todo.completed === true
          );
          setFilteredTodos(completedTodos);
          break;
        case "active":
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
  const handleDialog = (message, isLoading) => {
    setOpenModal({
      message,
      isLoading,
    });
  };
  const handleDialogTwo = (message, isLoading) => {
    setOpenModalTwo({
      message,
      isLoading,
    });
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    const newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
      creationDate: Date.now(),
    };

    const newArray = [newTodo, ...todos];

    setTodos(newArray);
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
    const deletedMessage = {
      message: "Are you sure you want to delete this todo?",
      isLoading: true,
    };
    setOpenModal(deletedMessage);
    idProductRef.current = id;
  };

  const handleConfirmDelete = (choose) => {
    if (choose) {
      const updatedArray = todos.filter(
        (todo) => todo.id !== idProductRef.current
      );
      setTodos(updatedArray);
      handleDialog("", false);
    } else {
      handleDialog("", false);
    }
  };

  const handleClearCompleted = () => {
    const deletedMessage = {
      message: "Are you sure you want to delete all the completed todos?",
      isLoading: true,
    };
    setOpenModalTwo(deletedMessage);
  };

  const handleConfirmClearCompleted = (choose) => {
    if (choose) {
      const updatedTodos = todos.filter((todo) => todo.completed === false);
      setTodos(updatedTodos);
      handleDialogTwo("", false);
    } else {
      handleDialogTwo("", false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <InputTodo
        value={value}
        handleChange={handleChange}
        handleClick={handleClick}
        handleSubmit={handleSubmit}
      />
      <div
        style={{
          width: 500,
          height: 300,
          overflow: "scroll",
          margin: "auto",
          marginTop: 20,
        }}
      >
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
        {/* {filteredTodos.length === 0 && <p>OOPS your list is empty...</p>} */}
      </div>
      <FilterTodos
        setStatus={setStatus}
        filteredTodos={filteredTodos}
        handleClearCompleted={handleClearCompleted}
      />
      {openModal.isLoading && (
        <Modal
          handleConfirmDelete={handleConfirmDelete}
          message={openModal.message}
        />
      )}

      {openModalTwo.isLoading && (
        <ModalTwo
          handleConfirmClearCompleted={handleConfirmClearCompleted}
          message={openModalTwo.message}
        />
      )}
    </div>
  );
}
