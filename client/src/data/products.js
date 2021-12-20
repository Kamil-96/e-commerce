const products = [
  {
    id: 1,
    name: 'Trendy Jeans',
    gender: 'Woman',
    type: 'Jeans',
    price: 50,
    imageOne: '/images/products/Product_1-1.jpg',
    imageTwo: '/images/products/Product_1-2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu tellus consectetur, vehicula velit non, convallis arcu. Morbi ut nibh egestas, ullamcorper erat eu, convallis urna. Integer sollicitudin sapien convallis, scelerisque ex id, maximus nisl. Pellentesque nec mauris ac est faucibus porta sit amet in elit. Quisque eleifend pellentesque imperdiet. Praesent euismod lectus non ante porttitor efficitur. Sed pretium tortor.',
  },
  {
    id: 2,
    name: 'Jeans Slim Fit',
    gender: 'Woman',
    type: 'Jeans',
    price: 70,
    imageOne: '/images/products/Product_2-1.jpg',
    imageTwo: '/images/products/Product_2-2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu tellus consectetur, vehicula velit non, convallis arcu. Morbi ut nibh egestas, ullamcorper erat eu, convallis urna. Integer sollicitudin sapien convallis, scelerisque ex id, maximus nisl. Pellentesque nec mauris ac est faucibus porta sit amet in elit. Quisque eleifend pellentesque imperdiet. Praesent euismod lectus non ante porttitor efficitur. Sed pretium tortor.',
  },
  {
    id: 3,
    name: 'Jeans Straight Leg',
    gender: 'Woman',
    type: 'Jeans',
    price: 55,
    imageOne: '/images/products/Product_3-1.jpg',
    imageTwo: '/images/products/Product_3-2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu tellus consectetur, vehicula velit non, convallis arcu. Morbi ut nibh egestas, ullamcorper erat eu, convallis urna. Integer sollicitudin sapien convallis, scelerisque ex id, maximus nisl. Pellentesque nec mauris ac est faucibus porta sit amet in elit. Quisque eleifend pellentesque imperdiet. Praesent euismod lectus non ante porttitor efficitur. Sed pretium tortor.',
  },
  {
    id: 4,
    name: 'Fancy Dress',
    gender: 'Woman',
    type: 'Dress',
    price: 125,
    imageOne: '/images/products/Product_4-1.jpg',
    imageTwo: '/images/products/Product_4-2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu tellus consectetur, vehicula velit non, convallis arcu. Morbi ut nibh egestas, ullamcorper erat eu, convallis urna. Integer sollicitudin sapien convallis, scelerisque ex id, maximus nisl. Pellentesque nec mauris ac est faucibus porta sit amet in elit. Quisque eleifend pellentesque imperdiet. Praesent euismod lectus non ante porttitor efficitur. Sed pretium tortor.',
  },
  {
    id: 5,
    name: 'Queen Dress',
    gender: 'Woman',
    type: 'Dress',
    price: 165,
    imageOne: '/images/products/Product_5-1.jpg',
    imageTwo: '/images/products/Product_5-2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu tellus consectetur, vehicula velit non, convallis arcu. Morbi ut nibh egestas, ullamcorper erat eu, convallis urna. Integer sollicitudin sapien convallis, scelerisque ex id, maximus nisl. Pellentesque nec mauris ac est faucibus porta sit amet in elit. Quisque eleifend pellentesque imperdiet. Praesent euismod lectus non ante porttitor efficitur. Sed pretium tortor.',
  },
  {
    id: 6,
    name: 'Casual Dress',
    gender: 'Woman',
    type: 'Dress',
    price: 110,
    imageOne: '/images/products/Product_6-1.jpg',
    imageTwo: '/images/products/Product_6-2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu tellus consectetur, vehicula velit non, convallis arcu. Morbi ut nibh egestas, ullamcorper erat eu, convallis urna. Integer sollicitudin sapien convallis, scelerisque ex id, maximus nisl. Pellentesque nec mauris ac est faucibus porta sit amet in elit. Quisque eleifend pellentesque imperdiet. Praesent euismod lectus non ante porttitor efficitur. Sed pretium tortor.',
  },
  {
    id: 7,
    name: 'Classic Jeans',
    gender: 'Man',
    type: 'Jeans',
    price: 50,
    imageOne: '/images/products/Product_7-1.jpg',
    imageTwo: '/images/products/Product_7-2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu tellus consectetur, vehicula velit non, convallis arcu. Morbi ut nibh egestas, ullamcorper erat eu, convallis urna. Integer sollicitudin sapien convallis, scelerisque ex id, maximus nisl. Pellentesque nec mauris ac est faucibus porta sit amet in elit. Quisque eleifend pellentesque imperdiet. Praesent euismod lectus non ante porttitor efficitur. Sed pretium tortor.',
  },
  {
    id: 8,
    name: 'Jeans Slim Fit',
    gender: 'Man',
    type: 'Jeans',
    price: 60,
    imageOne: '/images/products/Product_8-1.jpg',
    imageTwo: '/images/products/Product_8-2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu tellus consectetur, vehicula velit non, convallis arcu. Morbi ut nibh egestas, ullamcorper erat eu, convallis urna. Integer sollicitudin sapien convallis, scelerisque ex id, maximus nisl. Pellentesque nec mauris ac est faucibus porta sit amet in elit. Quisque eleifend pellentesque imperdiet. Praesent euismod lectus non ante porttitor efficitur. Sed pretium tortor.',
  },
  {
    id: 9,
    name: 'Jeans Relaxed Fit',
    gender: 'Man',
    type: 'Jeans',
    price: 55,
    imageOne: '/images/products/Product_9-1.jpg',
    imageTwo: '/images/products/Product_9-2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu tellus consectetur, vehicula velit non, convallis arcu. Morbi ut nibh egestas, ullamcorper erat eu, convallis urna. Integer sollicitudin sapien convallis, scelerisque ex id, maximus nisl. Pellentesque nec mauris ac est faucibus porta sit amet in elit. Quisque eleifend pellentesque imperdiet. Praesent euismod lectus non ante porttitor efficitur. Sed pretium tortor.',
  },
  {
    id: 10,
    name: 'Outstanding Suit Jacket',
    gender: 'Man',
    type: 'Suit Jacket',
    price: 150,
    imageOne: '/images/products/Product_10-1.jpg',
    imageTwo: '/images/products/Product_10-2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu tellus consectetur, vehicula velit non, convallis arcu. Morbi ut nibh egestas, ullamcorper erat eu, convallis urna. Integer sollicitudin sapien convallis, scelerisque ex id, maximus nisl. Pellentesque nec mauris ac est faucibus porta sit amet in elit. Quisque eleifend pellentesque imperdiet. Praesent euismod lectus non ante porttitor efficitur. Sed pretium tortor.',
  },
  {
    id: 11,
    name: 'Excellent Suit Jacket',
    gender: 'Man',
    type: 'Suit Jacket',
    price: 110,
    imageOne: '/images/products/Product_11-1.jpg',
    imageTwo: '/images/products/Product_11-2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu tellus consectetur, vehicula velit non, convallis arcu. Morbi ut nibh egestas, ullamcorper erat eu, convallis urna. Integer sollicitudin sapien convallis, scelerisque ex id, maximus nisl. Pellentesque nec mauris ac est faucibus porta sit amet in elit. Quisque eleifend pellentesque imperdiet. Praesent euismod lectus non ante porttitor efficitur. Sed pretium tortor.',
  },
  {
    id: 12,
    name: 'Casual Sweater',
    gender: 'Man',
    type: 'Sweater',
    price: 40,
    imageOne: '/images/products/Product_12-1.jpg',
    imageTwo: '/images/products/Product_12-2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu tellus consectetur, vehicula velit non, convallis arcu. Morbi ut nibh egestas, ullamcorper erat eu, convallis urna. Integer sollicitudin sapien convallis, scelerisque ex id, maximus nisl. Pellentesque nec mauris ac est faucibus porta sit amet in elit. Quisque eleifend pellentesque imperdiet. Praesent euismod lectus non ante porttitor efficitur. Sed pretium tortor.',
  },
  {
    id: 13,
    name: 'Elegant Sweater',
    gender: 'Man',
    type: 'Sweater',
    price: 50,
    imageOne: '/images/products/Product_13-1.jpg',
    imageTwo: '/images/products/Product_13-2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu tellus consectetur, vehicula velit non, convallis arcu. Morbi ut nibh egestas, ullamcorper erat eu, convallis urna. Integer sollicitudin sapien convallis, scelerisque ex id, maximus nisl. Pellentesque nec mauris ac est faucibus porta sit amet in elit. Quisque eleifend pellentesque imperdiet. Praesent euismod lectus non ante porttitor efficitur. Sed pretium tortor.',
  },
  {
    id: 14,
    name: 'Fashionable Sweater',
    gender: 'Man',
    type: 'Sweater',
    price: 55,
    imageOne: '/images/products/Product_14-1.jpg',
    imageTwo: '/images/products/Product_14-2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu tellus consectetur, vehicula velit non, convallis arcu. Morbi ut nibh egestas, ullamcorper erat eu, convallis urna. Integer sollicitudin sapien convallis, scelerisque ex id, maximus nisl. Pellentesque nec mauris ac est faucibus porta sit amet in elit. Quisque eleifend pellentesque imperdiet. Praesent euismod lectus non ante porttitor efficitur. Sed pretium tortor.',
  },
  {
    id: 15,
    name: 'Smart Sweater',
    gender: 'Man',
    type: 'Sweater',
    price: 45,
    imageOne: '/images/products/Product_15-1.jpg',
    imageTwo: '/images/products/Product_15-2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu tellus consectetur, vehicula velit non, convallis arcu. Morbi ut nibh egestas, ullamcorper erat eu, convallis urna. Integer sollicitudin sapien convallis, scelerisque ex id, maximus nisl. Pellentesque nec mauris ac est faucibus porta sit amet in elit. Quisque eleifend pellentesque imperdiet. Praesent euismod lectus non ante porttitor efficitur. Sed pretium tortor.',
  },
  {
    id: 16,
    name: 'Cosy Sweater',
    gender: 'Woman',
    type: 'Sweater',
    price: 40,
    imageOne: '/images/products/Product_16-1.jpg',
    imageTwo: '/images/products/Product_16-2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu tellus consectetur, vehicula velit non, convallis arcu. Morbi ut nibh egestas, ullamcorper erat eu, convallis urna. Integer sollicitudin sapien convallis, scelerisque ex id, maximus nisl. Pellentesque nec mauris ac est faucibus porta sit amet in elit. Quisque eleifend pellentesque imperdiet. Praesent euismod lectus non ante porttitor efficitur. Sed pretium tortor.',
  },
  {
    id: 17,
    name: 'Home Sweater',
    gender: 'Woman',
    type: 'Sweater',
    price: 30,
    imageOne: '/images/products/Product_17-1.jpg',
    imageTwo: '/images/products/Product_17-2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu tellus consectetur, vehicula velit non, convallis arcu. Morbi ut nibh egestas, ullamcorper erat eu, convallis urna. Integer sollicitudin sapien convallis, scelerisque ex id, maximus nisl. Pellentesque nec mauris ac est faucibus porta sit amet in elit. Quisque eleifend pellentesque imperdiet. Praesent euismod lectus non ante porttitor efficitur. Sed pretium tortor.',
  },
  {
    id: 18,
    name: 'Trendy Sweater',
    gender: 'Woman',
    type: 'Sweater',
    price: 50,
    imageOne: '/images/products/Product_18-1.jpg',
    imageTwo: '/images/products/Product_18-2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu tellus consectetur, vehicula velit non, convallis arcu. Morbi ut nibh egestas, ullamcorper erat eu, convallis urna. Integer sollicitudin sapien convallis, scelerisque ex id, maximus nisl. Pellentesque nec mauris ac est faucibus porta sit amet in elit. Quisque eleifend pellentesque imperdiet. Praesent euismod lectus non ante porttitor efficitur. Sed pretium tortor.',
  },
  {
    id: 19,
    name: 'Distinguished Scarf',
    gender: 'Woman',
    type: 'Scarf',
    price: 70,
    imageOne: '/images/products/Product_19-1.jpg',
    imageTwo: '/images/products/Product_19-2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu tellus consectetur, vehicula velit non, convallis arcu. Morbi ut nibh egestas, ullamcorper erat eu, convallis urna. Integer sollicitudin sapien convallis, scelerisque ex id, maximus nisl. Pellentesque nec mauris ac est faucibus porta sit amet in elit. Quisque eleifend pellentesque imperdiet. Praesent euismod lectus non ante porttitor efficitur. Sed pretium tortor.',
  },
  {
    id: 20,
    name: 'Modern Scarf',
    gender: 'Woman',
    type: 'Scarf',
    price: 60,
    imageOne: '/images/products/Product_20-1.jpg',
    imageTwo: '/images/products/Product_20-2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu tellus consectetur, vehicula velit non, convallis arcu. Morbi ut nibh egestas, ullamcorper erat eu, convallis urna. Integer sollicitudin sapien convallis, scelerisque ex id, maximus nisl. Pellentesque nec mauris ac est faucibus porta sit amet in elit. Quisque eleifend pellentesque imperdiet. Praesent euismod lectus non ante porttitor efficitur. Sed pretium tortor.',
  },
  {
    id: 21,
    name: 'Elegant Scarf',
    gender: 'Man',
    type: 'Scarf',
    price: 80,
    imageOne: '/images/products/Product_21-1.jpg',
    imageTwo: '/images/products/Product_21-2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu tellus consectetur, vehicula velit non, convallis arcu. Morbi ut nibh egestas, ullamcorper erat eu, convallis urna. Integer sollicitudin sapien convallis, scelerisque ex id, maximus nisl. Pellentesque nec mauris ac est faucibus porta sit amet in elit. Quisque eleifend pellentesque imperdiet. Praesent euismod lectus non ante porttitor efficitur. Sed pretium tortor.',
  },
  {
    id: 22,
    name: 'Smart Hat',
    gender: 'Man',
    type: 'Hat',
    price: 50,
    imageOne: '/images/products/Product_22-1.jpg',
    imageTwo: '/images/products/Product_22-2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu tellus consectetur, vehicula velit non, convallis arcu. Morbi ut nibh egestas, ullamcorper erat eu, convallis urna. Integer sollicitudin sapien convallis, scelerisque ex id, maximus nisl. Pellentesque nec mauris ac est faucibus porta sit amet in elit. Quisque eleifend pellentesque imperdiet. Praesent euismod lectus non ante porttitor efficitur. Sed pretium tortor.',
  },
  {
    id: 23,
    name: 'Outstanding Hat',
    gender: 'Woman',
    type: 'Hat',
    price: 90,
    imageOne: '/images/products/Product_23-1.jpg',
    imageTwo: '/images/products/Product_23-2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu tellus consectetur, vehicula velit non, convallis arcu. Morbi ut nibh egestas, ullamcorper erat eu, convallis urna. Integer sollicitudin sapien convallis, scelerisque ex id, maximus nisl. Pellentesque nec mauris ac est faucibus porta sit amet in elit. Quisque eleifend pellentesque imperdiet. Praesent euismod lectus non ante porttitor efficitur. Sed pretium tortor.',
  },
  {
    id: 24,
    name: 'Fashionable Hat',
    gender: 'Woman',
    type: 'Hat',
    price: 60,
    imageOne: '/images/products/Product_24-1.jpg',
    imageTwo: '/images/products/Product_24-2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu tellus consectetur, vehicula velit non, convallis arcu. Morbi ut nibh egestas, ullamcorper erat eu, convallis urna. Integer sollicitudin sapien convallis, scelerisque ex id, maximus nisl. Pellentesque nec mauris ac est faucibus porta sit amet in elit. Quisque eleifend pellentesque imperdiet. Praesent euismod lectus non ante porttitor efficitur. Sed pretium tortor.',
  },
];

export default products;
