import styled from '@emotion/styled';

export const InputContainer = styled.div`
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  margin: 25px auto;
  border-radius: 8px;
  width: 500px;
  height: 20px;
  padding: 20px 30px;

  @media (max-width: 768px) {
    width: 300px;
    height: 8px;
    margin-top: 65px;
  }

  @media (max-width: 411px) {
    width: 200px;
    margin-top: 40px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-content: flex-start;
  justify-content: start;

  @media (max-width: 768px) {
    width: 300px;
  }

  @media (max-width: 411px) {
    width: 200px;
  }
`;

export const AddButton = styled.button`
  border-radius: 10px;
  text-align: center;
  width: 50px;
  height: 30px;
  line-height: normal;
  margin-right: 15px;
  font-size: 16px;
  font-family: 'Gemunu Libre', sans-serif;
  color: white;
  border: solid 1px #950ba1;
  background-color: #c610d5;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 50px;
    height: 25px;
    margin-right: 10px;
    font-size: 12px;
  }

  @media (max-width: 411px) {
    width: 45px;
    height: 25px;
    margin-right: 5px;
    font-size: 12px;
  }
`;

export const Input = styled.input`
  border: none;
  text-align: center;
  color: #454444;
  width: 250px;
  height: 30px;
  margin-left: 30px;
  font-size: 18px;
  font-family: 'Gemunu Libre', sans-serif;
  outline: none;

  ::placeholder {
    color: #bbbbbb;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 25px;
    margin-left: 20px;
    font-size: 13px;
  }

  @media (max-width: 411px) {
    width: 100px;
    height: 25px;
    margin-left: 5px;
    font-size: 12px;
  }
`;

export const CharCounter = styled.span`
  ${({ count }) => ({
    margin: '50px 0 0 110px',
    width: '60px',
    height: '30px',
    fontSize: '14px',
    color: count === 30 ? 'red' : '#454444',
    fontWeight: count === 30 ? 'bolder' : 'none',
  })}

  @media (max-width: 768px) {
    margin: 40px 0 0 30px;
    font-size: 12px;
  }

  @media (max-width: 411px) {
    margin: 45px 0 0 10px;
    font-size: 11px;
  }
`;
