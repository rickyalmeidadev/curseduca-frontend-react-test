import styled from 'styled-components';

export const Container = styled.aside`
  width: 100%;

  > h2,
  > h3 {
    margin-bottom: ${props => props.theme.margins.normal};
  }

  > ul {
    margin-bottom: ${props => props.theme.margins.normal};

    > li {
      display: flex;
      align-items: center;
      margin-bottom: ${props => props.theme.margins.small};
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
