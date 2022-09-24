import PropTypes from 'prop-types';
import { InputContainer, AddButton, Input } from './InputTodoStyled';

export default function InputTodo({ handleChange, handleClick, value }) {
  const isDisabled = value.length < 3;

  return (
    <InputContainer>
      <form>
        <AddButton type="submit" onClick={handleClick} disabled={isDisabled}>
          Add
        </AddButton>

        <Input
          id="new-todo-input"
          placeholder="Type your next Task!"
          type="text"
          autoComplete="off"
          maxLength={40}
          onChange={handleChange}
          value={value}
        />
      </form>
    </InputContainer>
  );
}

InputTodo.PropType = {
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  value: PropTypes.string,
};
