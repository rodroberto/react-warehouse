import { Box, Image, Text } from "@chakra-ui/react";

interface ProductCardProps {
  imageUrl?: string;
  name: string;
  category: string;
  price: number;
}

const ProductCard = ({ imageUrl, name, category, price }: ProductCardProps) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      boxShadow="md"
      _hover={{ boxShadow: 'lg' }}
      transition="box-shadow 0.3s"
      p={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Image
        src={imageUrl}
        alt={name}
        borderRadius="md"
        boxSize="200px"
        objectFit="cover"
        mb={4}
      />
      <Text fontSize="lg" fontWeight="bold" mb={2}>{name}</Text>
      <Text color="gray.600" mb={2}>Category: {category}</Text>
      <Text fontSize="xl" fontWeight="semibold">{price} EUR</Text>
    </Box>
  );
};

export default ProductCard;
