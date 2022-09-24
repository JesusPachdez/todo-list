import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  background-color: white;
  justify-content: start;
  align-content: center;
  align-items: center;
  margin: 25px auto;
  border-radius: 8px;
  width: 500px;
  height: 10px;
  padding: 20px 30px;
`;

export const AddButton = styled.button`
  border-radius: 10px;
  width: 50px;
  height: 23px;
  margin-right: 15px;
  font-size: 15px;
  color: white;
  border: solid 1px #950ba1;
  background-color: #c610d5;
  cursor: pointer;
`;

export const Input = styled.input`
  border: none;
  width: 250px;
  height: 25px;
  margin-left: 30px;
  font-size: 15px;
  outline: none;
`;
