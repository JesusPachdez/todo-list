import PropTypes from 'prop-types';
import Image from '../../assets/icon-cross.svg';
import {
  TodoItemContainer,
  TodoCheker,
  TodoTitle,
  CrossImg,
} from './TodoItemStyled';

export default function TodoItem({
  completed,
  title,
  handleCompleteTask,
  id,
  handleDeleteTask,
}) {
  return (
    <TodoItemContainer>
      <TodoCheker
        onClick={() => handleCompleteTask(id)}
        completed={completed}
      />

      <TodoTitle onClick={() => handleCompleteTask(id)} completed={completed}>
        {title}
      </TodoTitle>

      <CrossImg onClick={() => handleDeleteTask(id)} src={Image} alt="cross" />
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
