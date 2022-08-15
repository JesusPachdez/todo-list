import React from "react";
import PropTypes from "prop-types";

export default function FilterTodos({
  setStatus,
  filteredTodos,
  handleClearCompleted,
}) {
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  const activeCount = filteredTodos.filter(
    (todo) => todo.completed === false
  ).length;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 15,
      }}
    >
      <p style={{ paddingRight: 60 }}>{activeCount} items left</p>
      <div onClick={statusHandler}>
        <button value="all" type="button">
          All
        </button>
        <button value="completed" type="button">
          Completed
        </button>
        <button value="active" type="button">
          Active
        </button>
      </div>
      <p
        style={{ paddingLeft: 60, cursor: "pointer" }}
        onClick={handleClearCompleted}
      >
        Clear completed
      </p>
    </div>
  );
}

FilterTodos.PropType = {
  setStatus: PropTypes.string,
};
