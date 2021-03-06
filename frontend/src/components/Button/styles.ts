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
  font-size: 2rem;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  :hover {
    ${props =>
      props.primary
        ? css`
            filter: saturate(2);
          `
        : css`
            background-color: #e2e6e9;
          `}
          
    transition: ${props => props.theme.transition};
  }
`;
