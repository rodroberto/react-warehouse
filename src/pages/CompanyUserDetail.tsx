import { Avatar, Button, Flex, Heading, Text, VStack, Box, SimpleGrid } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import { COMPNAY_USERS } from '../lib/mock/productsMock';

const CompanyUserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const companyUser = COMPNAY_USERS.find(
    (user: CompanyUser) => user.id === parseInt(id!)
  );

  if (!companyUser) {
    return (
      <Flex
        direction="column"
        align="center"
        justify="center"
        height="full"
        p={6}
        bg="gray.50"
      >
        <Heading mb={4}>User not found</Heading>
        <Text color="gray.500">The user details you requested are not available.</Text>
      </Flex>
    );
  }

  const { firstName, lastName, email } = companyUser;

  return (
    <Flex
      direction="column"
      bg="white"
      borderRadius="md"
      boxShadow="md"
      p={6}
      width="full"
      maxWidth="800px"
      m="auto"
    >
      <Heading mb={6} textAlign="center">User Details</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        <VStack align="center" spacing={4}>
          <Avatar
            size="xl"
            name={`${firstName} ${lastName}`}
            src="https://bit.ly/dan-abramov"
            boxSize="150px"
            borderWidth="4px"
            borderColor="teal.500"
          />
          <Text fontSize="xl" fontWeight="bold">
            {`${firstName} ${lastName}`}
          </Text>
          <Text color="gray.600">{email}</Text>
        </VStack>

        <VStack align="start" spacing={4} justify="center">
          <Box w="full">
            <Flex w="full" justify="space-between">
              <Text fontSize="lg" fontWeight="semibold">First Name:</Text>
              <Text fontSize="lg" color="teal.600">{firstName}</Text>
            </Flex>
          </Box>
          <Box w="full">
            <Flex w="full" justify="space-between">
              <Text fontSize="lg" fontWeight="semibold">Last Name:</Text>
              <Text fontSize="lg" color="teal.600">{lastName}</Text>
            </Flex>
          </Box>
          <Box w="full">
            <Flex w="full" justify="space-between">
              <Text fontSize="lg" fontWeight="semibold">Email:</Text>
              <Text fontSize="lg" color="teal.600">{email}</Text>
            </Flex>
          </Box>
        </VStack>
      </SimpleGrid>
      <Flex justify="flex-end" mt={6} gap={4}>
        <Button onClick={() => navigate(-1)} colorScheme="gray" size="md">
          Back
        </Button>
        <Button colorScheme="teal" size="md">Edit</Button>
      </Flex>
    </Flex>
  );
};

export default CompanyUserDetail;
