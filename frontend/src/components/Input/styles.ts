import styled, { css } from 'styled-components';

export const Label = styled.label`
  margin-bottom: ${props => props.theme.margins.normal};

  font-weight: bold;
  font-size: 1.6rem;
  text-transform: uppercase;

  letter-spacing: 0.02em;

  color: ${props => props.theme.colors.dark};
`;

interface InputProps {
  invalid: boolean;
}

export const StyledInput = styled.input<InputProps>`
  width: 100%;

  margin-top: ${props => props.theme.margins.normal};
  padding: ${props => props.theme.paddings.normal};

  box-shadow: 18px 18px 30px #d1d9e6, inset 10px 10px 30px rgba(255, 255, 255, 0.4);
  background-color: ${props => props.theme.colors.light};

  border: none;
  border-radius: ${props => props.theme.borderRadius};

  ${props =>
    props.invalid &&
    css`
      border: 2px solid ${props => props.theme.colors.danger};
    `}

  font-weight: normal;
  font-size: 1.8rem;
  letter-spacing: 0.02em;

  color: ${props => props.theme.colors.dark};

  ::placeholder {
    color: ${props => props.theme.colors.grey};
  }

  :focus {
    border: 2px solid #a6bba8;
  }

  @media (min-width: 768px) {
    border: 2px solid ${props => props.theme.colors.light};

    ${props =>
      props.invalid &&
      css`
        border: 2px solid ${props => props.theme.colors.danger};
      `}
  }
`;
