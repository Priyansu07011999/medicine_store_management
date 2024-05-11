import React from 'react';
import { useMedicalStore } from '../../MedicalStoreContext';

const Cart = () => {
  const { state } = useMedicalStore();

  const groupedCart = state.cart.reduce((acc, item) => {
    const existingItem = acc.find(i => i.name === item.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  // Calculate total price
  const totalPrice = groupedCart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="max-w-md mx-auto mt-4">
      <h2 className="text-xl font-semibold mb-4">Cart</h2>
      {groupedCart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <div>
          <ul>
            {groupedCart.map((item, index) => (
              <li key={index} className="border-b py-2">
                <p className="font-semibold">{item.name}</p>
                <p>{item.description}</p>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </li>
            ))}
            
          </ul>
          <p className="font-semibold mt-4">Total Price: ₹{totalPrice}</p>
          <button className='bg-cyan-700'>Make payment</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
