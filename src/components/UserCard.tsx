import { Button, Flex, Tag, Text, Box } from '@chakra-ui/react';

interface UserCardProps {
  firstName: string;
  lastName: string;
  email: string;
  isManager?: boolean;
  onEdit: () => void;
  onDelete: () => void;
  onDetail: () => void;
}

const UserCard = ({ firstName, lastName, email, isManager, onEdit, onDelete, onDetail }: UserCardProps) => {

  return (
    <Box
      p={4}
      borderRadius="md"
      boxShadow="lg"
      bg="white"
      border="1px solid"
      borderColor="gray.200"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
      transition="all 0.2s"
      _hover={{ boxShadow: 'xl', borderColor: 'blue.300' }}
      onClick={onDetail}
    >
      <Flex flexDirection="column" gap={2} mb={4}>
        <Text fontSize="lg" fontWeight="bold">
          {`${firstName} ${lastName}`}
        </Text>
        <Text color="gray.600">{email}</Text>
        {isManager && (
          <Tag colorScheme="green" variant="subtle" mt={2}>
            Company Manager
          </Tag>
        )}
      </Flex>
      <Flex justifyContent="flex-end" mt="auto">
        <Button colorScheme="red" size="sm" mr={2} onClick={onDelete}>
          Delete
        </Button>
        <Button colorScheme="blue" size="sm" onClick={onEdit}>
          Edit
        </Button>
      </Flex>
    </Box>
  );
};

export default UserCard;
