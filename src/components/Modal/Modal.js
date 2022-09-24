import React from 'react';
import PropTypes from 'prop-types';
import {
  ModalBackground,
  ModalContainer,
  ModalMessage,
  ModalFooter,
  CancelButton,
  ContinueButton,
} from './ModalStyled';

export default function Modal({ message, handleConfirmDelete }) {
  return (
    <ModalBackground
      onClick={() => {
        handleConfirmDelete(false);
      }}
    >
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalMessage>{message}</ModalMessage>

        <ModalFooter>
          <CancelButton
            onClick={() => {
              handleConfirmDelete(false);
            }}
          >
            Cancel
          </CancelButton>

          <ContinueButton
            onClick={() => {
              handleConfirmDelete(true);
            }}
          >
            Continue
          </ContinueButton>
        </ModalFooter>
      </ModalContainer>
    </ModalBackground>
  );
}

Modal.PropType = {
  message: PropTypes.string,
  handleConfirmDelete: PropTypes.func,
};
