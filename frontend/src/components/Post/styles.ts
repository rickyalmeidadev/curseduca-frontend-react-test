import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;

  > img {
    cursor: pointer;
    margin: 0 ${props => props.theme.margins.small};
    transition: ${props => props.theme.transition};

    :hover {
      filter: saturate(2);
      transition: ${props => props.theme.transition};
    }
  }
`;

export const Card = styled.li`
  background: ${props => props.theme.colors.light};
  box-shadow: 18px 18px 30px #d1d9e6, -18px -18px 30px #ffffff;
  border-radius: ${props => props.theme.borderRadius};

  margin: ${props => props.theme.margins.larger} auto;
  padding: ${props => props.theme.paddings.large};

  > hr {
    height: 0.1px;
    margin: ${props => props.theme.margins.large} 0;
    background-color: ${props => props.theme.colors.grey};
    border: none;
  }
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;

  letter-spacing: 0.04em;
  text-transform: uppercase;

  margin-bottom: ${props => props.theme.margins.small};
`;

export const Info = styled.small`
  display: block;

  font-weight: normal;
  font-size: 1.4rem;
  letter-spacing: 0.06em;

  margin-bottom: ${props => props.theme.margins.small};
`;

export const Author = styled.p`
  margin-top: ${props => props.theme.margins.normal};
  color: ${props => props.theme.colors.grey};
  text-align: right;
`;
