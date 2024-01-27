"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const StockPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const ord = await axios.post("api/getstock");
      setProducts(ord.data.products);
    };

    fetchOrders();
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        <div className="container1 relative">
          <div className="text-center my-4 mb-10">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] hidden md:block">
              Stock Management
            </h1>
          </div>
          <div className="flex flex-col items-center">
            {products.map((products: any) => (
              <div className="mb-6 shadow-lg rounded-xl p-4" key={products.id}>
                <div>Product Id: {products.id}</div>
                <div className="mt-2 text-[#D72E3B] font-semibold">
                  Stock Status:
                  {products.quantity ? " In Stock" : " Not in Stock"}
                </div>
                <div className="mt-2 font-semibold">Quantity:</div>
                <div>
                  <div className="flex justify-between" key={products.id}>
                    <div>{products.name}</div>
                    <div>x{products.stock}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default StockPage;
