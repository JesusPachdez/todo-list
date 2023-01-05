import PropTypes from 'prop-types';

import {
  InputContainer,
  AddButton,
  Input,
  Form,
  CharCounter,
} from './InputTodoStyled';

export default function InputTodo({
  handleChangeText,
  handleAddTask,
  textValue,
  count,
}) {
  const isDisabled = textValue.length < 3;

  return (
    <InputContainer>
      <Form>
        <AddButton type='submit' onClick={handleAddTask} disabled={isDisabled}>
          Add
        </AddButton>

        <Input
          id='new-todo-input'
          placeholder='Type your next Task!'
          type='text'
          autoComplete='off'
          maxLength={30}
          onChange={handleChangeText}
          value={textValue}
        />
      </Form>

      <CharCounter count={count}>{count} /30</CharCounter>
    </InputContainer>
  );
}

InputTodo.PropType = {
  handleChangeText: PropTypes.func,
  handleAddTask: PropTypes.func,
  textValue: PropTypes.string,
  count: PropTypes.number,
};
