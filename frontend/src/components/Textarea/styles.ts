import styled from 'styled-components';

export const Label = styled.label`
  margin-bottom: ${props => props.theme.margins.normal};

  font-weight: bold;
  font-size: 1.6rem;
  text-transform: uppercase;

  letter-spacing: 0.02em;

  color: ${props => props.theme.colors.dark};

  .ck {
    ::-webkit-scrollbar {
      display: none;
    }

    cursor: text;
    outline: none !important;

    width: 100%;
    height: 160px;

    margin-top: ${props => props.theme.margins.normal} !important;
    padding: ${props => props.theme.paddings.normal} !important;

    box-shadow: 18px 18px 30px #d1d9e6, inset 10px 10px 30px rgba(255, 255, 255, 0.4);
    background-color: ${props => props.theme.colors.light};

    border: none !important;
    border-radius: ${props => props.theme.borderRadius} !important;

    font-family: 'Work Sans', sans-serif !important;
    font-weight: normal !important;
    font-size: 1.8rem !important;
    letter-spacing: 0.02em !important;
    font-variant: normal !important;

    color: ${props => props.theme.colors.dark} !important;

    resize: none;

    transition: height 200ms ease-in-out;

    ::placeholder {
      color: ${props => props.theme.colors.grey};
    }

    :focus {
      border: 2px solid #a6bba8 !important;
      box-shadow: inherit !important;
      transition: height 200ms ease-in-out;
    }

    > * {
      margin: 0 !important;
    }

    @media (min-width: 768px) {
      border: 2px solid ${props => props.theme.colors.light};
    }
  }
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
