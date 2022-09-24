import styled from 'styled-components';

export const FilterTodosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #bbbbbb;
  border-radius: 0 0 10px 10px;
  width: 500px;
  height: 10px;
  margin: auto;
  padding: 20px 30px;
  box-shadow: 0 0 5px #bbbbbb;
`;

export const ItemCounter = styled.p`
  padding: 0 60px 0 0;
  font-size: 14px;
  margin: 0 auto 0 0;
`;

export const Button = styled.button`
  border: none;
  margin: 0 5px;
  background-color: white;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: #950ba1;
  }

  &:active {
    border: solid 1px #950ba1;
  }

  &:focus {
    color: #950ba1;
  }
`;

export const ClearButton = styled.span`
  padding: 0 0 0 65px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: #950ba1;
  }

  &:active {
    font-size: 16px;
    color: black;
  }
`;
