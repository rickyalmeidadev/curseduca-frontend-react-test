import React from 'react';
import { useTheme } from 'styled-components';
import { BounceLoader } from 'react-spinners';

import { Container } from './styles';

const Loading: React.FC = () => {
  const {
    colors: { primary },
  } = useTheme();

  return (
    <Container>
      <BounceLoader color={primary} size="40px" />
    </Container>
  );
};

export default Loading;
