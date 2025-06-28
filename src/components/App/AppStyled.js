import styled from '@emotion/styled';

// Breakpoints for consistent responsive design
const BREAKPOINTS = {
  mobile: '411px',
  tablet: '768px',
};

// Common spacing values
const SPACING = {
  small: '20px',
  medium: '200px',
  large: '260px',
};

// Z-index scale for proper layering
const Z_INDEX = {
  background: 10,
  content: 20,
};

export const AppContainer = styled.div`
  text-align: center;
  position: relative;
  height: 630px;
  font-family: 'Gemunu Libre', sans-serif;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    height: 190px;
  }
`;

export const Hero = styled.img`
  position: relative;
  z-index: ${Z_INDEX.background};
  width: 100%;
  height: ${SPACING.large};

  @media (max-width: ${BREAKPOINTS.tablet}) {
    height: ${SPACING.medium};
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    height: 270px;
  }
`;

export const Logo = styled.span`
  color: white;
  font-size: 45px;
  font-family: 'Rampart One', cursive;
  font-weight: 600;
  letter-spacing: 10px;
  position: relative;
  z-index: ${Z_INDEX.content};
  bottom: ${SPACING.medium};
  right: ${SPACING.medium};

  @media (max-width: ${BREAKPOINTS.tablet}) {
    font-size: 30px;
    bottom: 150px;
    right: 120px;
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 50px;
    bottom: ${SPACING.medium};
    right: 0;
  }
`;

export const InputAndTodoListContainer = styled.div`
  position: relative;
  z-index: ${Z_INDEX.content};
  bottom: ${SPACING.medium};
`;

export const TodoListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: auto;
  margin-top: ${SPACING.small};
  width: 560px;
  height: 311px;
  background-color: white;
  border-bottom: none;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 0 5px #bbbbbb;
  overflow: scroll;

  /* Hide scrollbar */
  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${BREAKPOINTS.tablet}) {
    width: 360px;
    height: 195px;
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 260px;
  }
`;
