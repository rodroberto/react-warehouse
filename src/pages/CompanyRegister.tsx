import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Stack,
  Divider,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CompanyRegister = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [companyName, setCompanyName] = useState<string>('');
  const [taxIdentificationNumber, setTaxIdentificationNumber] =
    useState<string>('');
  const [address1, setAddress1] = useState<string>('');
  const [address2, setAddress2] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [zipcode, setZipcode] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [state, setState] = useState<string>('');

  const [error, setError] = useState<string>('');

  const navigate = useNavigate()

  const onRegister = () => {
    // Basic validation check
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // Clear the error if validation passes
    setError('');
    // Add API call logic here
  };

  return (
    <Flex
      direction='column'
      align='center'
      justify='center'
      width='100%'
      maxWidth='800px'
      p={8}
      borderRadius='lg'
      boxShadow='lg'
      backgroundColor='white'
      border='1px solid #e2e8f0'
    >
      <Heading as='h1' size='xl' mb={6}>
        Company Registration
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
          <Text color='red.600'>{error}</Text>
        </Box>
      )}

      <Flex
        flexDirection='column'
        width='full'
        maxHeight='500px'
        overflow='auto'
        paddingRight='4px'
      >
        <Box width='100%' mb={6}>
          <Heading size='md' mb={4}>
            Company Manager Information
          </Heading>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input
                placeholder='Enter your first name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input
                placeholder='Enter your last name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type='password'
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type='password'
                placeholder='Confirm your password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </FormControl>
          </Stack>
        </Box>
        <Divider marginTop='24px' marginBottom='48px' />

        <Box width='100%' mb={6}>
          <Heading size='md' mb={4}>
            Company Information
          </Heading>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Company Name</FormLabel>
              <Input
                placeholder='Enter company name'
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Tax Identification Number</FormLabel>
              <Input
                placeholder='Enter tax identification number'
                value={taxIdentificationNumber}
                onChange={(e) => setTaxIdentificationNumber(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Address Line 1</FormLabel>
              <Input
                placeholder='Enter address line 1'
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Address Line 2</FormLabel>
              <Input
                placeholder='Enter address line 2'
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Input
                placeholder='Enter city'
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Zip Code</FormLabel>
              <Input
                placeholder='Enter zip code'
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Country</FormLabel>
              <Input
                placeholder='Enter country'
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>State</FormLabel>
              <Input
                placeholder='Enter state'
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </FormControl>
          </Stack>
        </Box>
      </Flex>

      <Button
        width='100%'
        colorScheme='blue'
        size='md'
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
            Login with your company account
          </Text>
        </Flex>
    </Flex>
  );
};

export default CompanyRegister;
