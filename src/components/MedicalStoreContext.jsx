// src/MedicalStoreContext.js
import React, { createContext, useContext, useEffect, useReducer } from 'react';

const MedicalStoreContext = createContext();

const initialState = {
  medicines: [],
  cart: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_MEDICINES':
      return {
        ...state,
        medicines: action.payload,
      };
    case 'ADD_TO_STORE':
      return {
        ...state,
        medicines: [...state.medicines, action.payload],
      };
    case 'ADD_TO_CART':
      const updatedMedicines = state.medicines.map(medicine => {
        if (medicine.name === action.payload.name) {
          return {
            ...medicine,
            quantity: medicine.quantity - 1
          };
        }
        return medicine;
      });
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
        medicines: updatedMedicines
      };
    default:
      return state;
  }
};

export const MedicalStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await fetch('https://crudcrud.com/api/e788daf81dbb446a8ee8d86f5d26aef8/medicines');
        if (response.ok) {
          const data = await response.json();
          dispatch({ type: 'SET_MEDICINES', payload: data });
        }
      } catch (error) {
        console.error('Error fetching medicines:', error);
      }
    };

    fetchMedicines();
  }, []); // Fetch medicines only once when the component mounts

  const addMedicine = async (medicine) => {
    try {
      const response = await fetch('https://crudcrud.com/api/e788daf81dbb446a8ee8d86f5d26aef8/medicines', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(medicine),
      });
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: 'ADD_TO_STORE', payload: data });
      }
    } catch (error) {
      console.error('Error adding medicine:', error);
    }
  };

  const addToCart = (medicine) => {
    dispatch({ type: 'ADD_TO_CART', payload: medicine });
  };

  return (
    <MedicalStoreContext.Provider value={{ state, addMedicine, addToCart }}>
      {children}
    </MedicalStoreContext.Provider>
  );
};

export const useMedicalStore = () => {
  const context = useContext(MedicalStoreContext);
  if (!context) {
    throw new Error('useMedicalStore must be used within a MedicalStoreProvider');
  }
  return context;
};
