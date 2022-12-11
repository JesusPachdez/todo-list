import PropTypes from 'prop-types';
import {
  InputContainer,
  AddButton,
  Input,
  Form,
  CharCounter,
} from './InputTodoStyled';

export default function InputTodo({ handleChange, handleClick, value, count }) {
  const isDisabled = value.length < 3;

  return (
    <InputContainer>
      <Form>
        <AddButton type="submit" onClick={handleClick} disabled={isDisabled}>
          Add
        </AddButton>

        <Input
          id="new-todo-input"
          placeholder="Type your next Task!"
          type="text"
          autoComplete="off"
          maxLength={30}
          onChange={handleChange}
          value={value}
        />
      </Form>
      <CharCounter count={count}>{count} /30</CharCounter>
    </InputContainer>
  );
}

InputTodo.PropType = {
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  value: PropTypes.string,
  count: PropTypes.number,
};
