// src/context/BagContext.jsx
import React, { createContext, useContext, useState } from 'react';

const BagContext = createContext();

export function BagProvider({ children }) {
  const [bag, setBag] = useState(new Map());

  const addToBag = (id, quantity = 1) => {
    setBag((prev) => {
      const newBag = new Map(prev);
      newBag.set(id, (newBag.get(id) || 0) + quantity);
      return newBag;
    });
  };

  const removeFromBag = (id, quantity = 1) => {
    setBag((prev) => {
      const newBag = new Map(prev);
      const current = newBag.get(id) || 0;
      if (current <= quantity) newBag.delete(id);
      else newBag.set(id, current - quantity);
      return newBag;
    });
  };

  const clearBag = () => setBag(new Map());

  const bagCount = () => {
    let count = 0;
    for (const qty of bag.values()) {
      count += qty;
    }
    return count;
  };

  const getQuantity = (id) => bag.get(id) || 0;

  return (
    <BagContext.Provider
      value={{ bag, addToBag, removeFromBag, clearBag, bagCount, getQuantity }}
    >
      {children}
    </BagContext.Provider>
  );
}

export function useBag() {
  return useContext(BagContext);
}
