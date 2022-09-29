import styled from 'styled-components';

export const AppContainer = styled.div`
  text-align: center;
  position: relative;
  height: 630px;
`;

export const Hero = styled.img`
  position: relative;
  z-index: 10;
  width: 100%;
`;

export const Logo = styled.span`
  color: white;
  position: relative;
  z-index: 20;
  bottom: 200px;
  right: 200px;
  font-size: 40px;
  font-family: 'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS',
    sans-serif;
  font-weight: 600;
  letter-spacing: 10px;
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
  margin: auto;
  margin-top: 20px;
  box-shadow: 0 0 5px #bbbbbb;

  ::-webkit-scrollbar {
    display: none;
  }
`;
