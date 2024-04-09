import React, { useState } from 'react';
import GiftBox from './GiftBox';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {isOpen ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold">Happy Eid ul Fitr To All</h1>
        </div>
      ) : (
        <GiftBox onClick={handleOpen} />
      )}
    </div>
  );
}

export default App;
