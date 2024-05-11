import React from 'react';
import AddMedicineForm from '../../AddMedicineForm';

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <h1 className="text-center text-2xl font-semibold mb-4">Medical Store</h1>
        <AddMedicineForm />
      </div>
    </div>
  );
};

export default Home;