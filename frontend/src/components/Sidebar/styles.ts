import styled, { css } from 'styled-components';

interface SidebarProps {
  toggle: boolean;
}

export const Container = styled.aside<SidebarProps>`
  position: fixed;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100%;

  padding: ${props => props.theme.paddings.normal};

  background-color: ${props => props.theme.colors.light};

  ${props =>
    props.toggle
      ? css`
          transform: translateX(0);
        `
      : css`
          transform: translateX(-100vw);
        `}

  transition: ${props => props.theme.transition};

  > svg {
    position: absolute;
    top: 26px;
    right: 16px;
  }

  > h2,
  > h3 {
    margin: ${props => props.theme.margins.small} auto;
  }

  > ul {
    margin-bottom: ${props => props.theme.margins.normal};

    > li {
      display: flex;
      align-items: center;
      margin-bottom: ${props => props.theme.margins.small};
    }
  }

  > button {
    display: block;
    width: 100%;
    margin: ${props => props.theme.margins.large} auto;
  }

  > p {
    cursor: pointer;

    font-family: Work Sans;
    font-weight: normal;
    font-size: 2rem;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    text-align: center;

    color: ${props => props.theme.colors.dark};
  }

  @media (min-width: 768px) {
    position: relative;
    height: auto;
    background-color: transparent;
    transform: translateX(0);
    padding: ${props => props.theme.paddings.normal} 0;

    > button, > svg, > p {
      display: none;
    }
  }
`;

export const Checkbox = styled.input`
  cursor: pointer;
  appearance: none;
  position: relative;

  margin-right: ${props => props.theme.margins.small};

  :before {
    content: '';
    display: block;

    width: 16px;
    height: 16px;

    margin: 1px;

    background-color: ${props => props.theme.colors.background};
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: 3px;
  }

  :hover:before {
    border-width: 2px;
    margin: 0;
  }

  :checked:before {
    background-color: ${props => props.theme.colors.primary};
    border-width: 2px;
    margin: 0;
  }

  :checked:after {
    content: '';
    display: block;

    width: 5px;
    height: 10px;

    border: solid ${props => props.theme.colors.background};
    border-width: 0 2px 2px 0;

    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);

    position: absolute;
    top: 2px;
    left: 7px;
  }
`;
