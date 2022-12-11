import styled from '@emotion/styled';

export const FilterTodosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #bbbbbb;
  border-radius: 0 0 10px 10px;
  font-family: 'Gemunu Libre', sans-serif;
  width: 500px;
  height: 10px;
  margin: auto;
  padding: 20px 30px;
  box-shadow: 0 0 5px #bbbbbb;

  @media (max-width: 768px) {
    width: 300px;
    height: 100px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 411px) {
    width: 200px;
    height: 100px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ItemCounter = styled.p`
  font-size: 13px;
  display: flex;
  justify-content: start;
  width: 70px;
  color: #454444;

  @media (max-width: 768px) {
    font-size: 13px;
    justify-content: center;
  }
`;

export const FilterButton = styled.button`
  border: none;
  margin: 0 5px;
  background-color: white;
  font-size: 16px;
  font-family: 'Gemunu Libre', sans-serif;
  color: ${(props) => (props.isActive ? '#950ba1' : '#b0a9a9')};
  cursor: pointer;

  &:hover {
    color: #950ba1;
  }

  &:active {
    color: #950ba1;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    margin: 5px;
  }
`;

export const ClearButton = styled.span`
  font-size: 13px;

  color: #454444;
  cursor: pointer;

  &:hover {
    color: #950ba1;
  }

  &:active {
    color: #950ba1;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    margin: 8px;
  }
`;
