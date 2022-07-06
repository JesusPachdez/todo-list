const InputTodo = ({ handleChange, handleClick, value }) => {
  return (
    <div
      style={{
        display: "flex",
        marginTop: 10,
      }}
    >
      <button onClick={handleClick}>Submit</button>

      <input
        id="new-todo-input"
        placeholder="write a task"
        type="text"
        autoComplete="off"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default InputTodo;
