
import React, { useState } from 'react';
import { useMedicalStore } from './MedicalStoreContext';

const AddMedicineForm = () => {
  const { addMedicine } = useMedicalStore();
  const [medicine, setMedicine] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicine({
      ...medicine,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMedicine(medicine);
    setMedicine({
      name: '',
      description: '',
      price: '',
      quantity: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
      <h2 className="text-lg font-semibold mb-4">Add Medicine</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Medicine Name"
          name="name"
          value={medicine.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md outline-none"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={medicine.description}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md outline-none"
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={medicine.price}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md outline-none"
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Quantity"
          name="quantity"
          value={medicine.quantity}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md outline-none"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
        Add to Store
      </button>
    </form>
  );
};

export default AddMedicineForm;
