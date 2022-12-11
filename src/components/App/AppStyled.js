import styled from '@emotion/styled';

export const AppContainer = styled.div`
  text-align: center;
  position: relative;
  height: 630px;
  font-family: 'Gemunu Libre', sans-serif;

  @media (max-width: 768px) {
    height: 190px;
  }
`;

export const Hero = styled.img`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 260px;

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 411px) {
    height: 270px;
  }
`;

export const Logo = styled.span`
  color: white;
  position: relative;
  z-index: 20;
  bottom: 200px;
  right: 200px;
  font-size: 45px;
  font-family: 'Rampart One', cursive;
  font-weight: 600;
  letter-spacing: 10px;

  @media (max-width: 768px) {
    font-size: 30px;
    bottom: 150px;
    right: 120px;
  }

  @media (max-width: 411px) {
    font-size: 50px;
    bottom: 200px;
    right: 0;
  }
`;
export const InputAndTodoListContainer = styled.div`
  position: relative;
  z-index: 20;
  bottom: 200px;
`;
export const TodoListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 560px;
  height: 311px;
  border-bottom: none;
  border-radius: 10px 10px 0 0;
  overflow: scroll;
  background-color: white;
  margin: auto;
  margin-top: 20px;
  box-shadow: 0 0 5px #bbbbbb;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    width: 360px;
    height: 195px;
  }

  @media (max-width: 411px) {
    width: 260px;
  }
`;
