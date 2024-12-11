import { Box, Flex, SimpleGrid, Text, Button } from '@chakra-ui/react';
import MiniCard from '../components/MiniCard';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../lib/mock/productsMock';
import { useState } from 'react';
import { getDefaultImageUrl } from '../lib/utils/utils';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/contexts/AuthContext';

const ITEMS_PER_PAGE = 3;

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  const { logout } = useAuth();

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const paginatedProducts = PRODUCTS.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(PRODUCTS.length / ITEMS_PER_PAGE);

  return (
    <Flex direction='column' p={6} bg='gray.50' align='center'>
      <Box mb={8} textAlign='center'>
        <Text fontSize='3xl' fontWeight='bold' mb={2}>
          Welcome Back!
        </Text>
        <Text color='gray.600'>
          We're glad to have you back. Here are some actions and recommendations
          for you.
        </Text>
      </Box>
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
        spacing={6}
        width='full'
        maxWidth='1200px'
      >
        <MiniCard
          title='Profile'
          description='View and update your profile information'
          action='View Profile'
          onClick={() => navigate('/profile')}
        />
        <MiniCard
          title='Products'
          description='Browse and explore available products'
          action='Browse Products'
          onClick={() => navigate('/products')}
        />
        <MiniCard
          title='Logout'
          description='Log out from your account securely'
          action='Logout'
          onClick={logout}
        />
      </SimpleGrid>
      <Box marginY={8} textAlign='center'>
        <Text fontSize='xl' fontWeight='bold' mb={2}>
          Recommended Products
        </Text>
        <Text color='gray.600'>
          Here are some products you might be interested in
        </Text>
      </Box>
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
        spacing={6}
        width='full'
        maxWidth='1200px'
      >
        {paginatedProducts.map(
          ({ id, images, name, category, price }: Product) => (
            <ProductCard
              key={id}
              imageUrl={getDefaultImageUrl(images || [])}
              name={name}
              category={category}
              price={price}
            />
          )
        )}
      </SimpleGrid>
      <Flex justify='center' align='center' mt={8}>
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          isDisabled={currentPage === 1}
          colorScheme='blue'
          mx={2}
        >
          Previous
        </Button>
        <Text>{`${currentPage} / ${totalPages}`}</Text>
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          isDisabled={currentPage === totalPages}
          colorScheme='blue'
          mx={2}
        >
          Next
        </Button>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
