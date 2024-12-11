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
import { useAuth } from '../lib/contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const { login: onLogin } = useAuth();

  const navigate = useNavigate();

  return (
    <Flex
      direction='column'
      align='center'
      justify='center'
      width='100%'
      maxWidth='450px'
      p={8}
      borderRadius='lg'
      boxShadow='lg'
      backgroundColor='white'
      border='1px solid #e2e8f0'
    >
      <Heading as='h1' size='xl' mb={6}>
        Login
      </Heading>
      {error && (
        <Box
          width='full'
          backgroundColor='red.100'
          padding='10px'
          borderRadius='md'
          boxShadow='sm'
          mb={4}
        >
          <Text color='red.600'>Error: {error}</Text>
        </Box>
      )}

      <FormControl mb={4}>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Password</FormLabel>
        <Input
          type='password'
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Button
        width='100%'
        colorScheme='blue'
        size='md'
        marginY={4}
        _active={{ bg: 'blue.600' }}
        onClick={() => onLogin(email, password)}
      >
        Login
      </Button>
      <Flex justify='space-between' width='100%'>
        <Text
          color='blue.500'
          cursor='pointer'
          _hover={{ textDecoration: 'underline', color: 'blue.700' }}
          onClick={() => navigate('/register')}
        >
          Register as a new user
        </Text>
        <Text
          color='blue.500'
          cursor='pointer'
          _hover={{ textDecoration: 'underline', color: 'blue.700' }}
          onClick={() => navigate('/company-register')}
        >
          Register a new company
        </Text>
      </Flex>
    </Flex>
  );
};

export default Login;
