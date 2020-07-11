import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  > button {
    display: block;
    width: 100%;
    margin: ${props => props.theme.margins.normal} auto;
  }
`;
