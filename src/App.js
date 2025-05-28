import React, { useState } from "react";

const initialProducts = [
  { id: 1, name: "PoE Injector", price: 29.99, description: "Power over Ethernet injector for IP cameras." },
  { id: 2, name: "IR Night Vision Module", price: 45.99, description: "Infrared module for night surveillance." },
  { id: 3, name: "Weatherproof Camera Housing", price: 59.99, description: "Outdoor-rated protective camera housing." },
  { id: 4, name: "DVR Recorder (4CH)", price: 89.99, description: "Digital video recorder for 4 cameras." },
  { id: 5, name: "Camera Mount Bracket", price: 12.99, description: "Adjustable mount for security cameras." },
];

export default function CameraPartsStore() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (productId) => {
    const index = cart.findIndex((item) => item.id === productId);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  const filteredProducts = initialProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const getCartSummary = () => {
    const summary = {};
    cart.forEach(item => {
      summary[item.id] = summary[item.id] || { ...item, quantity: 0 };
      summary[item.id].quantity += 1;
    });
    return Object.values(summary);
  };

  const cartItems = getCartSummary();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "1rem" }}>Anthony's Surveillance</h1>
      <div style={{ maxWidth: "500px", margin: "0 auto", marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Search for security parts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
        />
        <div style={{ fontWeight: "bold" }}>Cart Items: {cart.length}</div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "10px", width: "250px" }}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p><strong>${product.price.toFixed(2)}</strong></p>
            <button onClick={() => addToCart(product)} style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div style={{ maxWidth: "700px", margin: "2rem auto", padding: "1rem", border: "1px solid #ddd", borderRadius: "10px" }}>
          <h2 style={{ marginBottom: "1rem" }}>🛒 Cart Summary</h2>
          {cartItems.map(item => (
            <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
              <div>
                {item.name} x{item.quantity} - ${ (item.price * item.quantity).toFixed(2) }
              </div>
              <button onClick={() => removeFromCart(item.id)} style={{ padding: "0.25rem 0.5rem" }}>
                Remove
              </button>
            </div>
          ))}
          <hr style={{ margin: "1rem 0" }} />
          <strong>Total: ${total.toFixed(2)}</strong>
        </div>
      )}
    </div>
  );
}