import PropTypes from 'prop-types';

import Image from '../../assets/icon-cross.svg';
import {
  TodoItemContainer,
  TodoChecker,
  TodoTitle,
  CrossImg,
} from './TodoItemStyled';

export default function TodoItem({
  id,
  title,
  completed,
  handleCompleteTask,
  handleDeleteTask,
}) {
  return (
    <TodoItemContainer>
      <TodoChecker
        onClick={() => handleCompleteTask(id)}
        completed={completed}
      />

      <TodoTitle onClick={() => handleCompleteTask(id)} completed={completed}>
        {title}
      </TodoTitle>

      <CrossImg onClick={() => handleDeleteTask(id)} src={Image} alt='cross' />
    </TodoItemContainer>
  );
}

TodoItem.proptype = {
  completed: PropTypes.bool,
  title: PropTypes.string,
  handleCompleteTask: PropTypes.func,
  id: PropTypes.number,
  handleDeleteTask: PropTypes.func,
};
