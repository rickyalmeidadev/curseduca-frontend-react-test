import styled, { css } from 'styled-components';

interface ButtonProps {
  primary: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  ${props =>
    props.primary
      ? css`
          background-color: ${props => props.theme.colors.primary};
          color: ${props => props.theme.colors.light};
        `
      : css`
          background-color: ${props => props.theme.colors.light};
          color: ${props => props.theme.colors.dark};
        `}

  box-shadow: 18px 18px 30px #d1d9e6, -18px -18px 30px #ffffff;

  border: none;
  border-radius: ${props => props.theme.borderRadius};

  padding: ${props => props.theme.paddings.small} ${props => props.theme.paddings.large};

  font-weight: normal;
  font-size: 2.6rem;
  text-align: center;
  letter-spacing: 0.02em;
  font-variant: small-caps;

  :hover {
    ${props =>
      props.primary
        ? css`
            background-color: #3372a7;
          `
        : css`
            background-color: #e2e6e9;
          `}
          
    transition: ${props => props.theme.transition};
  }
`;
