import PropTypes from "prop-types";

export default function InputTodo({ handleChange, handleClick, value }) {
  const isDisabled = value.length < 3;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <form>
        <button type="submit" onClick={handleClick} disabled={isDisabled}>
          Submit
        </button>

        <input
          id="new-todo-input"
          placeholder="write a task"
          type="text"
          autoComplete="off"
          maxLength={30}
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
