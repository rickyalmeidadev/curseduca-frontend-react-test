import styled from 'styled-components';

export const Label = styled.label`
  position: relative;
  z-index: 10;

  margin-bottom: ${props => props.theme.margins.normal};

  font-weight: bold;
  font-size: 2rem;
  font-variant: small-caps;

  letter-spacing: 0.02em;

  color: ${props => props.theme.colors.dark};

  > svg {
    position: absolute;
    bottom: 16px;
    right: 8px;
    pointer-events: none;
  }
`;

export const StyledSelect = styled.select`
  appearance: none;
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

  :focus {
    border: 2px solid #a6bba8;
  }

  @media (min-width: 768px) {
    border: 2px solid ${props => props.theme.colors.light};
  }

  > option {
    border: none;
    background-color: ${props => props.theme.colors.light};
  }
`;
