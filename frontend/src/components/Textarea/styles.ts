import styled from 'styled-components';

export const Label = styled.label`
  margin-bottom: ${props => props.theme.margins.normal};

  font-weight: bold;
  font-size: 2rem;
  font-variant: small-caps;

  letter-spacing: 0.02em;

  color: ${props => props.theme.colors.dark};
`;

export const StyledTextarea = styled.textarea`
  ::-webkit-scrollbar {
    display: none;
  }

  width: 100%;
  height: 53px;

  margin-top: ${props => props.theme.margins.normal};
  padding: ${props => props.theme.paddings.normal};

  box-shadow: 18px 18px 30px #d1d9e6, inset 10px 10px 30px rgba(255, 255, 255, 0.4);
  background-color: ${props => props.theme.colors.light};

  border: none;
  border-radius: ${props => props.theme.borderRadius};

  font-family: 'Work Sans', sans-serif;
  font-weight: normal;
  font-size: 1.8rem;
  letter-spacing: 0.02em;

  color: ${props => props.theme.colors.dark};

  resize: none;

  transition: height 200ms ease-in-out;

  ::placeholder {
    color: ${props => props.theme.colors.grey};
  }

  :focus {
    border: 2px solid #a6bba8;
    height: 150px;

    transition: height 200ms ease-in-out;
  }

  @media (min-width: 768px) {
    border: 2px solid ${props => props.theme.colors.light};
  }
`;
