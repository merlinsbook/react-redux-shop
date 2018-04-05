import React from 'react';

// internal imports
import { Shop, View } from '../config/lib';

// !DUMMY DATA!
import imgCabbage from '../assets/cabbage.jpg';
import imgCarrots from '../assets/carrots.jpg';
import imgCucumbers from '../assets/cucumbers.jpg';
const itemssource = [
  {
    id: 0,
    name: 'Cabbages',
    isSelected: false,
    price: 2.99,
    currency: '€',
    quantity: 0,
    img: imgCabbage,
  },
  {
    id: 1,
    name: 'Carottes',
    isSelected: false,
    price: 1.99,
    currency: '€',
    quantity: 0,
    img: imgCarrots,
  },
  {
    id: 2,
    name: 'Cucumbers',
    isSelected: false,
    price: 0.99,
    currency: '€',
    quantity: 0,
    img: imgCucumbers,
  }
];

export const ShopView = ({}) => {
  return (
    <View>
      <Shop 
        itemssource={itemssource} 
        title={'Vegetables'}
      />
    </View>
  )
}
