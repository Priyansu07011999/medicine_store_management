import React from 'react';
import { useMedicalStore } from '../../MedicalStoreContext';

const Store = () => {
  const { state, addToCart } = useMedicalStore();

  const handleAddToCart = (medicine) => {
    addToCart(medicine);
  };

  return (
    <div className="max-w-md mx-auto mt-4">
      <h2 className="text-xl font-semibold mb-4">Medicine Store</h2>
      {state.medicines.length === 0 ? (
        <p>No medicines available in the store.</p>
      ) : (
        <ul>
          {state.medicines.map((medicine, index) => (
            <li key={index} className="border-b py-2">
              <p className="font-semibold">{medicine.name}</p>
              <p>{medicine.description}</p>
              <p>Price: ₹{medicine.price}</p>
              <p>Quantity: {medicine.quantity}</p>
              <button
                className={`${medicine.quantity === 0 ? 'bg-red-700' : 'bg-blue-500'}`}
                onClick={() => handleAddToCart(medicine)}
                disabled={medicine.quantity === 0}
              >
                {medicine.quantity === 0 ? 'Out of Stock' : 'Add to Cart'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Store;
