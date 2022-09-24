import React from 'react';
import PropTypes from 'prop-types';
import {
  FilterTodosContainer,
  ItemCounter,
  Button,
  ClearButton,
} from './FilterTodosStyled';

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
    <FilterTodosContainer>
      <ItemCounter>{activeCount} items left</ItemCounter>

      <div onClick={statusHandler}>
        <Button value="all" type="button">
          All
        </Button>

        <Button value="completed" type="button">
          Completed
        </Button>

        <Button value="active" type="button">
          Active
        </Button>
      </div>

      <ClearButton onClick={handleClearCompleted}>Clear completed</ClearButton>
    </FilterTodosContainer>
  );
}

FilterTodos.PropType = {
  setStatus: PropTypes.string,
  filteredTodos: PropTypes.array,
  handleClearCompleted: PropTypes.func,
};
