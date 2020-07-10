import styled from 'styled-components';

export const Card = styled.li`
  background: ${props => props.theme.colors.light};
  box-shadow: 18px 18px 30px #d1d9e6, -18px -18px 30px #ffffff;
  border-radius: ${props => props.theme.borderRadius};

  margin: ${props => props.theme.margins.normal} auto;
  padding: ${props => props.theme.paddings.large};
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;

  letter-spacing: 0.04em;
  text-transform: uppercase;

  margin-bottom: ${props => props.theme.margins.small};
`;

export const Category = styled.small`
  display: block;

  font-weight: normal;
  font-size: 1.4rem;
  letter-spacing: 0.06em;

  margin-bottom: ${props => props.theme.margins.small};
`;

export const Text = styled.p`
  line-height: 150%;
  letter-spacing: 0.02em;
`;
