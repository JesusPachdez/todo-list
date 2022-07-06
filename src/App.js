import TodoItem from "./components/TodoItem/TodoItem";
import InputTodo from "./components/InputTodo";
import { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    getData();
  }, []);

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

  return (
    <>
      <InputTodo
        value={value}
        handleChange={handleChange}
        handleClick={handleClick}
      />

      {todos.length === 0 && <p>Loading your data...</p>}

      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            handleCompleteTask={handleCompleteTask}
          />
        );
      })}
    </>
  );
}

export default App;
