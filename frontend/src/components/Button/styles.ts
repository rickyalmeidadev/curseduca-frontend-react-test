import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${props => props.theme.colors.light};
  box-shadow: 18px 18px 30px #d1d9e6, -18px -18px 30px #ffffff;

  border: none;
  border-radius: ${props => props.theme.borderRadius};

  padding: ${props => props.theme.paddings.small} ${props => props.theme.paddings.large};

  font-weight: normal;
  font-size: 2.6rem;
  text-align: center;
  letter-spacing: 0.02em;
  font-variant: small-caps;

  color: ${props => props.theme.colors.dark};
`;
