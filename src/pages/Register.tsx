import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Text,
  } from '@chakra-ui/react';
  import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
  
  const Register = () => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const navigate = useNavigate()
  
    const onRegister = () => {
      // Placeholder for form validation logic and API call
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      // API call for registration goes here
      setError('');
    };
  
    return (
      <Flex
        direction="column"
        align="center"
        justify="center"
        width="100%"
        maxWidth="450px"
        p={8}
        borderRadius="lg"
        boxShadow="lg"
        backgroundColor="white"
        border="1px solid #e2e8f0"
      >
        <Heading as="h1" size="xl" mb={6}>
          Register
        </Heading>
        {error && (
          <Box
            width="full"
            backgroundColor="red.100"
            padding="10px"
            borderRadius="md"
            boxShadow="sm"
            mb={4}
          >
            <Text color="red.600">{error}</Text>
          </Box>
        )}
        <FormControl mb={4}>
          <FormLabel>First Name</FormLabel>
          <Input
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Last Name</FormLabel>
          <Input
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormControl>
        <Button
          width="100%"
          colorScheme="blue"
          size="md"
          marginY={4}
          _active={{ bg: 'blue.600' }}
          onClick={onRegister}
        >
          Register
        </Button>
        <Flex justify="flex-start" flexDirection='column' width="100%">
          <Text
            color="blue.500"
            cursor="pointer"
            _hover={{ textDecoration: 'underline', color: 'blue.700' }}
            onClick={() => navigate('/login')}
          >
            Already have an account? Login here
          </Text>
          <Text
            color="blue.500"
            cursor="pointer"
            _hover={{ textDecoration: 'underline', color: 'blue.700' }}
            onClick={() => navigate('/company-register')}
          >
            Register your company
          </Text>
        </Flex>
      </Flex>
    );
  };
  
  export default Register;
  