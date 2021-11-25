import products from '../data/products';

export const initialState = {
  products: {
    data: products,
    loading: {
      active: false,
      error: false,
    },
  },
  cart: [
    {
      id: 1,
      name: 'Excellent Jeans 1',
      price: '$50',
      imageOne: '/images/products/Jeans-1-1.webp',
      imageTwo: '/images/products/Jeans-1-2.webp',
      imageThree: '/images/products/Jeans-1-3.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu tellus consectetur, vehicula velit non, convallis arcu. Morbi ut nibh egestas, ullamcorper erat eu, convallis urna. Integer sollicitudin sapien convallis, scelerisque ex id, maximus nisl. Pellentesque nec mauris ac est faucibus porta sit amet in elit. Quisque eleifend pellentesque imperdiet. Praesent euismod lectus non ante porttitor efficitur. Sed pretium tortor.',
    },
  ],
};
