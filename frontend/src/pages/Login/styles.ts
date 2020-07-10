import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    min-height: 100vh;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: ${props => props.theme.maxWidth};

  margin: 0 auto;
  padding: ${props => props.theme.paddings.normal};

  > h1 {
    color: ${props => props.theme.colors.primary};
  }

  @media (min-width: 768px) {
    min-height: 100vh;
  }
`;

export const Logo = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 100%;
  max-width: 320px;

  margin: 0 auto ${props => props.theme.margins.larger};
  padding: ${props => props.theme.paddings.normal} ${props => props.theme.paddings.large};

  background: #fefefe;
  box-shadow: 13.2886px 13.2886px 22.1477px #d1d9e6, -13.2886px -13.2886px 22.1477px #ffffff;
  border-radius: ${props => props.theme.borderRadius};

  > img {
    width: 100%;
  }

  > span {
    font-size: 2.8rem;
    font-weight: 600;

    color: ${props => props.theme.colors.secondary};
  }

  @media (min-width: 768px) {
    margin: ${props => props.theme.margins.large} auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 320px;

  margin: 0 auto;

  > button {
    margin-top: ${props => props.theme.margins.normal};
  }
`;
