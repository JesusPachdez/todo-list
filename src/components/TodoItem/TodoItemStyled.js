import styled from '@emotion/styled';

export const TodoItemContainer = styled.div`
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px #bbbbbb;
  width: 500px;
  height: 11px;
  margin: 0 auto;
  padding: 20px 30px;

  @media (max-width: 768px) {
    width: 300px;
    height: 8px;
  }

  @media (max-width: 411px) {
    width: 200px;
  }
`;

export const TodoCheker = styled.div`
  ${({ completed }) => ({
    justifyContent: 'center',
    width: 20,
    height: 20,
    border: completed ? 'solid 2px #454444' : 'solid 1px #454444',
    borderRadius: '50%',
    cursor: 'pointer',
    backgroundColor: completed ? '#c610d5' : 'white',
  })}

  &:hover {
    border: solid 2px #c610d5;
  }

  @media (max-width: 768px) {
    width: 14px;
    height: 14px;
  }

  @media (max-width: 411px) {
    width: 12px;
    height: 12px;
  }
`;

export const TodoTitle = styled.p`
  ${({ completed }) => ({
    color: '#454444',
    fontSize: 16,
    margin: 'auto',
    cursor: 'pointer',
    textDecoration: completed ? 'line-through' : ' ',
    opacity: completed ? 0.5 : 1,
    textTransform: 'capitalize',
  })}

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const CrossImg = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;

  &:hover {
    width: 17px;
    height: 17px;
  }

  @media (max-width: 768px) {
    width: 12px;
    height: 12px;
  }

  &:hover {
    width: 13px;
    height: 13px;
  }

  @media (max-width: 768px) {
    width: 11px;
    height: 11px;
  }

  &:hover {
    width: 12px;
    height: 12px;
  }
`;
