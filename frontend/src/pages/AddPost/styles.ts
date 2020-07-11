import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: ${props => props.theme.paddings.normal};
`;
