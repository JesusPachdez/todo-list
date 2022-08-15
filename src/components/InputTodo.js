import PropTypes from "prop-types";

export default function InputTodo({
  handleChange,
  handleClick,
  value,
  handleSubmit,
}) {
  const isDisabled = value.length < 3;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <form onSubmit={handleSubmit}>
        <button onClick={handleClick} disabled={isDisabled}>
          Submit
        </button>
        <input
          id="new-todo-input"
          placeholder="write a task"
          type="text"
          autoComplete="off"
          onChange={handleChange}
          value={value}
        />
      </form>
    </div>
  );
}

InputTodo.PropType = {
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  value: PropTypes.string,
};
