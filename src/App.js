import TodoItem from "./components/TodoItem/TodoItem";
import InputTodo from "./components/InputTodo";
import FilterTodos from "./components/FilterTodos";

import { useState, useEffect } from "react";

function App() {
  // useState:
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Fetch-Function:
  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setTodos(data);
  };

  // UseEffect:
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "active":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };

    //Functions:
    filterHandler();
  }, [status, todos]);

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
    const updatedArray = todos.filter((todo) => todo.id !== id);
    setTodos(updatedArray);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <InputTodo
        value={value}
        handleChange={handleChange}
        handleClick={handleClick}
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
      </div>

      <FilterTodos setStatus={setStatus} />
    </div>
  );
}

export default App;
