import React from 'react';
import PropTypes from 'prop-types';

import {
  FilterTodosContainer,
  ItemCounter,
  FilterButton,
  ClearButton,
  ButtonsContainer,
} from './FilterTodosStyled';

const FILTER_STATUS = {
  ACTIVE: 'active',
  ALL: 'all',
  COMPLETED: 'completed',
};

export default function FilterTodos({
  filterStatus,
  setFilterStatus,
  filteredTodos,
  handleClearCompleted,
}) {
  const filterStatusHandler = (e) => {
    const filterValue = e.target.value;

    setFilterStatus(filterValue);
  };

  const activeCount = filteredTodos.filter((todo) => !todo.completed)?.length;

  return (
    <FilterTodosContainer>
      <ItemCounter>{activeCount} items left</ItemCounter>

      <ButtonsContainer>
        <FilterButton
          onClick={filterStatusHandler}
          isActive={filterStatus === FILTER_STATUS.ALL ? true : false}
          value='all'
          type='button'
        >
          All
        </FilterButton>

        <FilterButton
          onClick={filterStatusHandler}
          isActive={filterStatus === FILTER_STATUS.COMPLETED ? true : false}
          value='completed'
          type='button'
        >
          Completed
        </FilterButton>

        <FilterButton
          onClick={filterStatusHandler}
          isActive={filterStatus === FILTER_STATUS.ACTIVE ? true : false}
          value='active'
          type='button'
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
