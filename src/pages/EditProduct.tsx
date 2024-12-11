import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Image,
  Text,
  VStack,
  Radio,
} from '@chakra-ui/react';
import { PRODUCTS } from '../lib/mock/productsMock';

const EditProduct = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((prod) => prod.id === parseInt(id!));

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: 0,
    qty: 0,
    seller: '',
    description: '',
    images: [] as ProductImage[],
  });

  console.log("formData", formData)

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        category: product.category,
        price: product.price,
        qty: product.qty || 0,
        seller: product.seller || '',
        description: product.description || '',
        images: product.images || [],
      });
    }
  }, [product]);

  if (!product) {
    return (
      <Box
        p={6}
        bg='white'
        borderRadius='md'
        boxShadow='lg'
        maxWidth='600px'
        mx='auto'
      >
        <Text fontSize='xl' fontWeight='bold'>
          Product not found
        </Text>
      </Box>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      const newImages = newFiles.map((file) => ({
        id: Date.now(), // Temporary unique ID for the new image
        productId: product.id,
        isDefault: false,
        url: URL.createObjectURL(file),
      }));
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...newImages],
      }));
    }
  };

  const handleSetDefault = (index: number) => {
    const updatedImages = formData.images.map((image, i) => ({
      ...image,
      isDefault: i === index,
    }));
    setFormData({ ...formData, images: updatedImages });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updated product:', formData);
    // Add logic to save the updated product data to the data source
  };

  return (
    <Flex
      as='form'
      flexDirection='column'
      p={6}
      gap={6}
      onSubmit={handleSubmit}
      maxWidth='800px'
      minWidth='600px'
      mx='auto'
    >
      <FormControl>
        <FormLabel>Product Name</FormLabel>
        <Input
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Enter product name'
        />
      </FormControl>

      <FormControl>
        <FormLabel>Category</FormLabel>
        <Input
          name='category'
          value={formData.category}
          onChange={handleChange}
          placeholder='Enter product category'
        />
      </FormControl>

      <FormControl>
        <FormLabel>Price (EUR)</FormLabel>
        <Input
          name='price'
          type='number'
          value={formData.price}
          onChange={handleChange}
          placeholder='Enter product price'
        />
      </FormControl>

      <FormControl>
        <FormLabel>Available Quantity</FormLabel>
        <Input
          name='qty'
          type='number'
          value={formData.qty}
          onChange={handleChange}
          placeholder='Enter available quantity'
        />
      </FormControl>

      <FormControl>
        <FormLabel>Seller</FormLabel>
        <Input
          name='seller'
          value={formData.seller}
          onChange={handleChange}
          placeholder='Enter seller name'
        />
      </FormControl>

      <FormControl>
        <FormLabel>Description</FormLabel>
        <Input
          name='description'
          value={formData.description}
          onChange={handleChange}
          placeholder='Enter product description'
        />
      </FormControl>

      <FormControl>
        <FormLabel>Product Images</FormLabel>
        <Input
          type='file'
          name='images'
          accept='image/*'
          display='none'
          multiple
          onChange={handleFileChange}
        />
        <Button
          mt={2}
          colorScheme='blue'
          onClick={() => {
            const fileInput = document.querySelector('input[type="file"]');
            if (fileInput && fileInput instanceof HTMLInputElement) {
              fileInput.click();
            }
          }}
        >
          Upload Images
        </Button>
      </FormControl>

      <Box mt={4}>
        <Text fontSize='lg' fontWeight='semibold' mb={2}>
          Image Previews:
        </Text>
        <VStack align='start' spacing={4}>
          {formData.images.map((image, index) => (
            <Flex
              key={index}
              direction='row'
              w='full'
              justify='space-between'
              align='center'
              borderRadius='md'
              boxShadow='sm'
              p={2}
              bg='gray.50'
              border='1px solid'
              borderColor='gray.200'
            >
              <Image
                src={image.url}
                alt={`preview-${index}`}
                boxSize='100px'
                objectFit='cover'
                borderRadius='md'
              />

              <Flex direction='row' align='center' gap={4}>
                <Radio
                  isChecked={image.isDefault}
                  onChange={() => handleSetDefault(index)}
                >
                  Default
                </Radio>
                <Button
                  onClick={() => {
                    const updatedImages = formData.images.filter(
                      (_, i) => i !== index
                    );
                    setFormData({ ...formData, images: updatedImages });
                  }}
                  colorScheme='red'
                  variant='outline'
                >
                  Remove
                </Button>
              </Flex>
            </Flex>
          ))}
        </VStack>
      </Box>

      <Flex mt={4} justifyContent='center'>
        <Button colorScheme='red' mr='6px'>Cancel</Button>
        <Button colorScheme='teal' type='submit'>
          Save
        </Button>
      </Flex>
    </Flex>
  );
};

export default EditProduct;
