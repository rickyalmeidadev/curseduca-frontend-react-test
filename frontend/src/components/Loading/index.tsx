import React from 'react';

import { BounceLoader } from 'react-spinners';
import { useTheme } from 'styled-components';
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
