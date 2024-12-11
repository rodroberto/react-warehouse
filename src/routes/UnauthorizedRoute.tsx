import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../lib/contexts/AuthContext';
import { Container } from '@chakra-ui/react';

const UnauthorizedRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to='/' />;
  }

  return (
    <Container marginTop='80px'>
      <Outlet />
    </Container>
  );
};

export default UnauthorizedRoute;
