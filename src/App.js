import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart } from "lucide-react";

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

  const filteredProducts = initialProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-4xl font-bold text-center">Security Camera Parts Store</h1>
      <div className="max-w-md mx-auto">
        <Input
          placeholder="Search for security parts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-4"
        />
        <div className="mb-2 text-sm font-semibold">Cart Items: {cart.length}</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="rounded-2xl shadow-md">
            <CardContent className="space-y-2 p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
              <Button
                onClick={() => addToCart(product)}
                className="w-full flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-4 h-4" /> Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

