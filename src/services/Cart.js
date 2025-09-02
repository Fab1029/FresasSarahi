import { useState } from 'react';

export const useCart = () => {
  const [cartItems, setCartItems] = useState(
    sessionStorage.getItem('cartItems') ? JSON.parse(sessionStorage.getItem('cartItems')) : []
  );

  const updateCart = (item) => {
    let items = [...cartItems];
    const itemIndex = items.findIndex((p) => p.name === item.name);

    if (itemIndex >= 0) {
      items[itemIndex] = item; 
    } else {
      items.push(item);
    }

    setCartItems(items);
    sessionStorage.setItem("cartItems", JSON.stringify(items)); 
  };

  const deleteItemCart = (item) => {
    const items = cartItems.filter((p) => p.name !== item.name);
    setCartItems(items);
    sessionStorage.setItem("cartItems", JSON.stringify(items)); 
  };

  const deleteItemsCart = () => {
    setCartItems([]);
    sessionStorage.setItem("cartItems", JSON.stringify([])); 
  };

  return { cartItems, updateCart, deleteItemCart, deleteItemsCart};
};
