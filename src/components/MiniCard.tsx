import { Button, Text, Box } from '@chakra-ui/react';

interface MiniCardProps {
  title: string;
  description: string;
  action: string;
  onClick: () => void;
}

const MiniCard = ({ title, description, action, onClick }: MiniCardProps) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      p={4}
      bg="white"
      _hover={{ boxShadow: 'lg', cursor: 'pointer' }}
      transition="box-shadow 0.3s"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      textAlign="center"
    >
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        {title}
      </Text>
      <Text mb={4} color="gray.600">
        {description}
      </Text>
      <Button colorScheme="blue" onClick={onClick}>
        {action}
      </Button>
    </Box>
  );
};

export default MiniCard;
