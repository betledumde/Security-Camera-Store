import React from "react";

const products = [
  { id: 1, name: "PoE Injector", price: 29.99, description: "Power over Ethernet injector for IP cameras." },
  { id: 2, name: "IR Night Vision Module", price: 45.99, description: "Infrared module for night surveillance." },
  { id: 3, name: "Weatherproof Camera Housing", price: 59.99, description: "Outdoor-rated protective camera housing." },
  { id: 4, name: "DVR Recorder (4CH)", price: 89.99, description: "Digital video recorder for 4 cameras." },
  { id: 5, name: "Camera Mount Bracket", price: 12.99, description: "Adjustable mount for security cameras." },
];

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center' }}>Anthony's Surveillance</h1>
      <input placeholder="Search for security parts..." style={{ display: 'block', margin: '1rem auto', padding: '0.5rem', width: '300px' }} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '1rem', width: '250px' }}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p><strong>${product.price.toFixed(2)}</strong></p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
