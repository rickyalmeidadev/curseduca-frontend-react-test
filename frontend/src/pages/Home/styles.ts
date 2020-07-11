import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: ${props => props.theme.paddings.normal};

  > main > h1 {
    font-size: 2.6rem;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: ${props => props.theme.margins.normal};
  }
`;

export const PostControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > button {
    display: none;
  }

  @media (min-width: 768px) {
    > button {
      display: block;
    }
  }
`;
