import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 80px;
  max-width: ${props => props.theme.maxWidth};

  margin: 0 auto;
  padding: ${props => props.theme.paddings.normal};

  > button {
    display: none;
  }

  @media (min-width: 768px) {
    > svg {
      display: none;
    }
    > button {
      display: block;
    }
  }
`;

export const Logo = styled.figure`
  width: 160px;

  > img {
    width: 100%;
  }
`;
