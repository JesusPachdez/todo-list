import React from 'react';
import PropTypes from 'prop-types';
import {
  FilterTodosContainer,
  ItemCounter,
  FilterButton,
  ClearButton,
  ButtonsContainer,
} from './FilterTodosStyled';

export default function FilterTodos({
  filterStatus,
  setFilterStatus,
  filteredTodos,
  handleClearCompleted,
}) {
  const filterStatusHandler = (e) => {
    setFilterStatus(e.target.value);
  };

  const activeCount = filteredTodos.filter(
    (todo) => todo.completed === false
  ).length;

  return (
    <FilterTodosContainer>
      <ItemCounter>{activeCount} items left</ItemCounter>

      <ButtonsContainer>
        <FilterButton
          onClick={filterStatusHandler}
          isActive={filterStatus === 'all' ? true : false}
          value="all"
          type="button"
        >
          All
        </FilterButton>

        <FilterButton
          onClick={filterStatusHandler}
          isActive={filterStatus === 'completed' ? true : false}
          value="completed"
          type="button"
        >
          Completed
        </FilterButton>

        <FilterButton
          onClick={filterStatusHandler}
          isActive={filterStatus === 'active' ? true : false}
          value="active"
          type="button"
        >
          Active
        </FilterButton>
      </ButtonsContainer>

      <ClearButton onClick={handleClearCompleted}>Clear completed</ClearButton>
    </FilterTodosContainer>
  );
}

FilterTodos.PropType = {
  setFilterStatus: PropTypes.string,
  filteredTodos: PropTypes.array,
  handleClearCompleted: PropTypes.func,
};
