import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Flex,
  Image,
  Input,
  SimpleGrid,
  Text,
  Box,
  Button,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

import { PRODUCTS } from '../lib/mock/productsMock';
import { getDefaultImageUrl } from '../lib/utils/utils';

const productsPerPage = 3;

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

  const filteredProducts = PRODUCTS.filter((product) => {
    const lowercasedQuery = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(lowercasedQuery) ||
      product.description?.toLowerCase().includes(lowercasedQuery) ||
      product.price.toString().includes(lowercasedQuery)
    );
  });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const createPaginationRange = () => {
    let range = [];
    if (totalPages <= 5) {
      range = [...Array(totalPages)].map((_, i) => i + 1);
    } else {
      const middleRange = 2;

      if (currentPage <= middleRange) {
        range = [1, 2, 3, '...', totalPages];
      } else if (currentPage >= totalPages - middleRange) {
        range = [1, '...', totalPages - 2, totalPages - 1, totalPages];
      } else {
        range = [
          1,
          '...',
          currentPage - 1,
          currentPage,
          currentPage + 1,
          '...',
          totalPages,
        ];
      }
    }
    return range;
  };

  return (
    <Flex
      flexDirection='column'
      p={6}
      maxWidth='1200px'
      mx='auto'
      bg='gray.50'
      borderRadius='md'
      boxShadow='lg'
    >
      <Text
        fontSize='3xl'
        fontWeight='bold'
        color='gray.800'
        mb={6}
        textAlign='center'
      >
        Product List
      </Text>

      <Box mb={6}>
        <Input
          placeholder='Search by name, description, or price'
          size='lg'
          borderRadius='md'
          bg='white'
          boxShadow='sm'
          _hover={{ boxShadow: 'md' }}
          _focus={{ borderColor: 'teal.500', boxShadow: 'md' }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Box>

      <SimpleGrid
        columns={4}
        spacing={4}
        bg='teal.500'
        color='white'
        p={4}
        borderRadius='md'
        mb={4}
      >
        <Text fontWeight='semibold' textAlign='center'>
          Image
        </Text>
        <Text fontWeight='semibold' textAlign='center'>
          Name
        </Text>
        <Text fontWeight='semibold' textAlign='center'>
          Description
        </Text>
        <Text fontWeight='semibold' textAlign='center'>
          Price
        </Text>
      </SimpleGrid>

      {currentProducts.length === 0 ? (
        <Text fontSize='lg' color='gray.600' textAlign='center' py={6}>
          No products found.
        </Text>
      ) : (
        currentProducts.map(({ images, name, description, price, id }) => (
          <SimpleGrid
            key={id}
            columns={4}
            spacing={4}
            alignItems='center'
            bg='white'
            p={4}
            borderRadius='md'
            boxShadow='sm'
            mb={6}
            transition='all 0.3s'
            _hover={{ boxShadow: 'lg', transform: 'translateY(-5px)' }}
            onClick={() => navigate(`/products/${id}`)}
          >
            <Flex justify='center'>
              <Image
                src={getDefaultImageUrl(images || [])}
                alt={name}
                borderRadius='md'
                boxSize='100px'
                objectFit='cover'
              />
            </Flex>

            <Text
              fontWeight='semibold'
              isTruncated
              maxWidth='150px'
              textAlign='center'
            >
              {name}
            </Text>

            <Text
              fontSize='sm'
              isTruncated
              maxWidth='200px'
              textAlign='center'
              color='gray.600'
            >
              {description}
            </Text>

            <Text fontWeight='bold' color='teal.500' textAlign='center'>
              {price} EUR
            </Text>
          </SimpleGrid>
        ))
      )}

      <HStack justify='center' spacing={4} mt={8}>
        <IconButton
          aria-label='Previous'
          icon={<ChevronLeftIcon />}
          onClick={() => handlePageChange(currentPage - 1)}
          isDisabled={currentPage === 1}
          colorScheme='teal'
        />

        {createPaginationRange().map((page, index) => (
          <Button
            key={index}
            colorScheme='teal'
            variant={currentPage === page ? 'solid' : 'outline'}
            onClick={() => page !== '...' && handlePageChange(page as number)}
            isDisabled={page === '...'}
          >
            {page}
          </Button>
        ))}

        <IconButton
          aria-label='Next'
          icon={<ChevronRightIcon />}
          onClick={() => handlePageChange(currentPage + 1)}
          isDisabled={currentPage === totalPages}
          colorScheme='teal'
        />
      </HStack>
    </Flex>
  );
};

export default Products;
