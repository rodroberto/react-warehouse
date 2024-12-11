export const getDefaultImageUrl = (images: ProductImage[]) => {
  return images.find((image: ProductImage) => image.isDefault)?.url;
};
