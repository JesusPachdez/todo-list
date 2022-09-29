import styled from 'styled-components';

export const TodoItemContainer = styled.div`
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px gray;
  width: 500px;
  height: 11px;
  margin: 0 auto;
  padding: 20px 30px;
`;

export const TodoCheker = styled.div`
  justify-content: center;
  width: 20px;
  height: 20px;
  border: solid 1px gray;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ $completed }) => ($completed ? '#c610d5' : 'white')};

  &:hover {
    border: solid #c610d5 2px;
  }
`;

export const TodoTitle = styled.p`
  color: black;
  font-family: '-moz-initial';
  font-size: 16px;
  margin: auto;
  cursor: pointer;
  text-decoration: ${({ $completed }) => ($completed ? 'line-through' : ' ')};
  opacity: ${({ $completed }) => ($completed ? '0.5' : '1')};
`;

export const CrossImg = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;
