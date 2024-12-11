import { Box, Divider, Flex, Text, Button, VStack, SimpleGrid } from '@chakra-ui/react';
import { PRODUCTS } from '../lib/mock/productsMock';

const Profile = () => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      gap={6}
      p={6}
      width='full'
      maxWidth='1200px'
      mx='auto'
    >
      <Flex
        direction='column'
        width={{ base: '100%', md: '25%' }}
        bg='white'
        p={4}
        borderRadius='md'
        boxShadow='md'
        align='center'
      >
        <Text fontSize='lg' fontWeight='bold' mb={4}>
          Quick Actions
        </Text>
        <Button colorScheme='teal' variant='solid' width='full' mb={2}>
          Add New Product
        </Button>
      </Flex>

      <Flex
        direction='column'
        width={{ base: '100%', md: '75%' }}
        bg='white'
        p={4}
        borderRadius='md'
        boxShadow='md'
      >
        <VStack spacing={4} align='start'>
          <Box width='full'>
            <Text fontSize='xl' fontWeight='bold' mb={2}>
              Your Profile
            </Text>
            <Divider borderColor='gray.300' />
            <Text fontSize='md' fontWeight='medium' mt={4}>
              Name: John Doe
            </Text>
            <Text fontSize='md' fontWeight='medium'>
              Email: johndoe@example.com
            </Text>
            <Text fontSize='md' fontWeight='medium'>
              Joined on: January 1, 2021
            </Text>
            <Text fontSize='md' fontWeight='medium'>
              Company: Acme Corp
            </Text>
          </Box>

          <Box width='full'>
            <Text fontSize='xl' fontWeight='bold' mb={4}>
              Your Newest Products
            </Text>
            <Divider borderColor='gray.300' mb={4} />

            <SimpleGrid
              columns={4}
              spacing={4}
              bg='gray.100'
              p={2}
              borderRadius='md'
              mb={4}
            >
              <Text fontWeight='semibold'>Product Name</Text>
              <Text fontWeight='semibold'>Description</Text>
              <Text fontWeight='semibold'>Price</Text>
              <Text fontWeight='semibold'>Actions</Text>
            </SimpleGrid>

            {PRODUCTS.map(({ name, description, price }, index) => (
              <SimpleGrid
                key={index}
                columns={4}
                spacing={4}
                alignItems='center'
                bg='white'
                p={2}
                borderRadius='md'
                boxShadow='sm'
                mb={4}
              >
                <Text>{name}</Text>
                <Text isTruncated maxWidth='200px'>{description}</Text>
                <Text fontWeight='bold'>{price} EUR</Text>
                <Flex gap={2}>
                  <Button colorScheme='blue' variant='outline'>
                    View
                  </Button>
                  <Button colorScheme='yellow' variant='outline'>
                    Edit
                  </Button>
                  <Button colorScheme='red' variant='outline'>
                    Delete
                  </Button>
                </Flex>
              </SimpleGrid>
            ))}
          </Box>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Profile;
