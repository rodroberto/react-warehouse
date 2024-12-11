import {
  Button,
  Flex,
  Heading,
  Input,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { COMPNAY_USERS } from '../lib/mock/productsMock';
import UserCard from '../components/UserCard';
import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const ITEMS_PER_PAGE = 9;

const CompanyUsers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const filteredUsers = useMemo(() => {
    return COMPNAY_USERS.filter((user) =>
      `${user.firstName} ${user.lastName} ${user.email}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const paginatedUsers = useMemo(() => {
    return filteredUsers.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );
  }, [filteredUsers, currentPage]);

  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);

  const onEdit = () => {
    console.log('Edit');
  };

  const onDelete = () => {
    console.log('onDelete');
  };

  return (
    <Flex
      flexDirection='column'
      p={6}
      bg='gray.50'
      align='center'
      height='full'
    >
      <Heading mb={6}>Users</Heading>

      <Flex
        justifyContent='space-between'
        width='full'
        maxWidth='1200px'
        mb={6}
      >
        <Input
          placeholder='Search by first name, last name or email'
          width='60%'
          size='md'
          borderColor='gray.300'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button colorScheme='teal' size='md'>
          Create New User
        </Button>
      </Flex>

      {filteredUsers.length === 0 ? (
        <Text>No users found</Text>
      ) : (
        <>
          <SimpleGrid
            columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
            spacing={6}
            width='full'
            maxWidth='1200px'
          >
            {paginatedUsers.map((user: CompanyUser) => (
              <UserCard
                key={user.id}
                {...user}
                onEdit={onEdit}
                onDelete={onDelete}
                onDetail={() => navigate(`/company/users/${user.id}`)}
              />
            ))}
          </SimpleGrid>

          {/* Pagination Controls */}
          <Flex justify='center' align='center' mt={8}>
            <Button
              onClick={() => handlePageChange(currentPage - 1)}
              isDisabled={currentPage === 1}
              colorScheme='blue'
              mx={2}
              size='md'
            >
              Previous
            </Button>
            <Text fontSize='lg'>{`${currentPage} / ${totalPages}`}</Text>
            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              isDisabled={currentPage === totalPages}
              colorScheme='blue'
              mx={2}
              size='md'
            >
              Next
            </Button>
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default CompanyUsers;
