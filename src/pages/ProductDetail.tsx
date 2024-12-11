import { useNavigate, useParams } from 'react-router-dom';
import { Button, Flex, Image, Text, Box, VStack } from '@chakra-ui/react';
import { PRODUCTS } from '../lib/mock/productsMock';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = PRODUCTS.find((prod) => prod.id === parseInt(id!));

  if (!product) {
    return (
      <Flex
        direction='column'
        justify='center'
        align='center'
        p={6}
        bg='white'
        borderRadius='md'
        boxShadow='lg'
        maxWidth='600px'
        mx='auto'
      >
        <Text fontSize='xl' fontWeight='bold'>
          Product not found
        </Text>
      </Flex>
    );
  }

  const { images, name, category, price, qty, seller, description } = product;

  return (
    <Flex
      direction='column'
      p={6}
      bg='white'
      borderRadius='md'
      boxShadow='lg'
      maxWidth='800px'
      mx='auto'
      gap={6}
      marginTop='24px'
      height='calc(100vh - 100px)'
      overflow='auto'
    >
      <Flex justify='space-between' align='center'>
        <Text fontSize='2xl' fontWeight='bold'>
          {name}
        </Text>
        <Flex gap={4}>
          <Button
            colorScheme='blue'
            onClick={() => navigate(`/products/${id}/edit`)}
          >
            Edit
          </Button>
          <Button colorScheme='red'>Remove</Button>
        </Flex>
      </Flex>

      <Box w='full' mb={4}>
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={5000}
          dynamicHeight
        >
          {(images || []).map(({ url }, index) => (
            <Box key={index} p={2}>
              <Image
                src={url}
                alt={`product-image-${index}`}
                borderRadius='md'
                boxSize='100%'
                maxHeight='400px'
                objectFit='contain'
              />
            </Box>
          ))}
        </Carousel>
      </Box>

      <VStack align='start' spacing={4}>
        <Flex w='full' justify='space-between'>
          <Text fontSize='lg' fontWeight='semibold'>
            Category:
          </Text>
          <Text fontSize='lg'>{category}</Text>
        </Flex>
        <Flex w='full' justify='space-between'>
          <Text fontSize='lg' fontWeight='semibold'>
            Price:
          </Text>
          <Text fontSize='lg' color='teal.500'>
            {price} EUR
          </Text>
        </Flex>
        <Flex w='full' justify='space-between'>
          <Text fontSize='lg' fontWeight='semibold'>
            Available Quantity:
          </Text>
          <Text fontSize='lg'>{qty}</Text>
        </Flex>
        <Flex w='full' justify='space-between'>
          <Text fontSize='lg' fontWeight='semibold'>
            Seller:
          </Text>
          <Text fontSize='lg'>{seller}</Text>
        </Flex>
        <Box w='full'>
          <Text fontSize='lg' fontWeight='semibold'>
            Description:
          </Text>
          <Text fontSize='md' mt={2}>
            {description}
          </Text>
        </Box>
      </VStack>
    </Flex>
  );
};

export default ProductDetail;
