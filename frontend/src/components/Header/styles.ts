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
    font-size: 2rem;
  }

  p {
    display: none;
  }

  @media (min-width: 768px) {
    > p {
      cursor: pointer;

      display: block;

      font-family: Work Sans;
      font-weight: normal;
      font-size: 2rem;
      letter-spacing: 0.02em;
      text-transform: uppercase;

      color: ${props => props.theme.colors.dark};
    }
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
