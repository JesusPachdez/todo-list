import styled from '@emotion/styled';

export const ModalBackground = styled.div`
  position: fixed;
  z-index: 50;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 10px;
  padding: 50px;
`;

export const ModalMessage = styled.h2`
  color: #c610d5;
`;

export const ModalFooter = styled.footer`
  display: flex;
  align-items: center;
`;

export const CancelButton = styled.button`
  background: #007bdd;
  color: white;
  letter-spacing: 1px;
  font-weight: bolder;
  border: none;
  padding: 8px;
  margin-right: 5px;
  border-radius: 8px;
  cursor: pointer;
`;

export const ContinueButton = styled.button`
  background: #950ba1;
  color: white;
  letter-spacing: 1px;
  font-weight: bolder;
  border: none;
  padding: 8px;
  margin-left: 5px;
  border-radius: 8px;
  cursor: pointer;
`;
