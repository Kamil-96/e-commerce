const formatPrice = price => {
  const newPrice = price.replace('$', '');
  return newPrice;
};

export default formatPrice;
