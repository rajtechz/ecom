import React from 'react';
import ChildComponent from './ChildComponent';
import Home from './Home';

function Data() {
  const data = [
    {
      "name": "computer",
      "price": "130",
      "category": "computers",
      "description": "",
      "image": "computer.jpg"
    },
    {
      "name": "sweater",
      "price": "1",
      "category": "Clothing",
      "description": "fashion, clothes , sweater, wool, cardigan,..."
    },
    {
      "name": "tie",
      "price": "46",
      "category": "Clothing",
      "description": "fashion, tie, clothes, accessory , accessoire,...",
      "image": "tie.jpeg"
    },
    {
      "name": "jacket",
      "price": "190",
      "category": "Clothing",
      "description": "winter jacket ",
      "image": "jacket.jpeg"
    }
  ];

  return (
    <div>
      <Home data={data} />
    </div>
  );
}

export default Data;
