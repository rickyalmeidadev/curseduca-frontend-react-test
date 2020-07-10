import styled from 'styled-components';

export const Label = styled.label`
  margin-bottom: ${props => props.theme.margins.normal};

  font-weight: bold;
  font-size: 2rem;
  font-variant: small-caps;

  letter-spacing: 0.02em;

  color: ${props => props.theme.colors.dark};
`;

export const StyledInput = styled.input`
  width: 100%;

  margin-top: ${props => props.theme.margins.normal};
  padding: ${props => props.theme.paddings.normal};

  box-shadow: 18px 18px 30px #d1d9e6, inset 10px 10px 30px rgba(255, 255, 255, 0.4);
  background-color: ${props => props.theme.colors.light};

  border: none;
  border-radius: ${props => props.theme.borderRadius};

  font-weight: normal;
  font-size: 1.8rem;
  letter-spacing: 0.02em;

  color: ${props => props.theme.colors.dark};

  ::placeholder {
    color: ${props => props.theme.colors.grey};
  }
`;
