import {
  Box,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Divider,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Box
      as='header'
      bg='gray.800'
      color='white'
      p={4}
      boxShadow='md'
      borderBottom='2px solid'
      borderColor='gray.600'
    >
      <Flex justify='space-between' align='center' wrap='wrap' mx='auto'>
        <Flex gap={6} alignItems='center'>
          <Text
            fontSize='xl'
            fontWeight='bold'
            _hover={{ color: 'teal.300' }}
            cursor='pointer'
            onClick={() => navigate('/dashboard')}
          >
            Warehouse
          </Text>
          <Menu>
            <MenuButton
              as={Text}
              fontSize='md'
              _hover={{ color: 'teal.300' }}
              cursor='pointer'
              fontWeight='semibold'
            >
              Products <ChevronDownIcon ml={2} />
            </MenuButton>
            <MenuList>
              <MenuItem color='black' _hover={{ bg: 'gray.100' }} onClick={() => navigate('/products')}>
                Products market
              </MenuItem>
              <MenuItem color='black' _hover={{ bg: 'gray.100' }} onClick={() => navigate('/profile')}>
                Your products
              </MenuItem>
              <Divider marginY='4px' />
              <MenuItem color='black' _hover={{ bg: 'gray.100' }} onClick={() => navigate('/products')}>
                Add new product
              </MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              as={Text}
              fontSize='md'
              _hover={{ color: 'teal.300' }}
              cursor='pointer'
              fontWeight='semibold'
            >
              Your company <ChevronDownIcon ml={2} />
            </MenuButton>
            <MenuList>
              <MenuItem color='black' _hover={{ bg: 'gray.100' }} onClick={() => navigate('/company')}>
                Company information
              </MenuItem>
              <MenuItem color='black' _hover={{ bg: 'gray.100' }} onClick={() => navigate('/products')}>
                Products
              </MenuItem>
              <MenuItem color='black' _hover={{ bg: 'gray.100' }} onClick={() => navigate('/company/users')}>
                Company users
              </MenuItem>
              <Divider marginY='4px' />
              <MenuItem color='black' _hover={{ bg: 'gray.100' }} onClick={() => navigate('/products')}>
                Add new product
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        <Flex gap={4}>
          <Text
            fontSize='md'
            fontWeight='semibold'
            _hover={{ color: 'teal.300' }}
            cursor='pointer'
            onClick={() => navigate('/register')}
          >
            Register
          </Text>
          <Text
            fontSize='md'
            fontWeight='semibold'
            _hover={{ color: 'teal.300' }}
            cursor='pointer'
            onClick={() => navigate('/login')}
          >
            Login
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
