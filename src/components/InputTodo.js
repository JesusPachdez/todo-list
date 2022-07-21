import PropTypes from "prop-types";

const InputTodo = ({ handleChange, handleClick, value }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
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

InputTodo.PropType = {
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  value: PropTypes.string,
};

export default InputTodo;
