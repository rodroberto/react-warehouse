import { PropsWithChildren } from 'react';
import { Flex } from '@chakra-ui/react';
import Header from './Header';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <Flex height='100vh' flexDirection='column'>
      <Header />
      {children}
    </Flex>
  );
};

export default MainLayout;
