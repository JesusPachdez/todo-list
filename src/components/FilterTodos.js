import React from "react";
import PropTypes from "prop-types";

function FilterTodos({ setStatus }) {
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
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
  );
}

FilterTodos.PropType = {
  setStatus: PropTypes.string,
};

export default FilterTodos;
