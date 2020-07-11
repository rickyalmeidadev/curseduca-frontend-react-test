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

interface ErrorMessageProps {
  visible: boolean;
}

export const ErrorMessage = styled.span<ErrorMessageProps>`
  display: block;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};

  min-height: 2rem;

  color: ${props => props.theme.colors.danger};
`;
