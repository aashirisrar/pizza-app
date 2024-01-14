"use client";

import React, { useState } from "react";

const arr: any = [
  {
    imgLoc: "/hero.jpg",
    title: "French Pizza",
    desc: "Spicy",
    bestSeller: "Best Seller",
    cost: 50,
    quantity: 1,
  },
  {
    imgLoc: "/hero.jpg",
    title: "Italian Pizza",
    desc: "Spicy",
    bestSeller: "Best Seller",
    cost: 50,
    quantity: 1,
  },
  {
    imgLoc: "/hero.jpg",
    title: "Macaroni Pizza",
    desc: "Spicy",
    bestSeller: "Best Seller",
    cost: 50,
    quantity: 1,
  },
  {
    imgLoc: "/hero.jpg",
    title: "Pan Pizza",
    desc: "Spicy",
    bestSeller: "Best Seller",
    cost: 50,
    quantity: 1,
  },
];

const Order = () => {
  const [orderitems, setOrderitems] = useState<any>([]);

  const [cost, setcost] = useState(0);

  const handleClick = (e: any) => {
    // Check if item already exists in orderitems
    const itemExists = orderitems.find((item: any) => item.title === e.title);
    // If item exists, increment quantity
    // Else, add item to orderitems
    if (itemExists) {
      const updatedItems = orderitems.map((item: any) =>
        item.title === e.title ? { ...item, quantity: item.quantity + 1 } : item
      );
      setOrderitems(updatedItems);
    } else {
      const newitems = orderitems.length === 0 ? [e] : [...orderitems, e];
      setOrderitems(newitems);
    }

    const newcost = cost + e.cost;

    setcost(newcost);
  };

  const incrementQuantity = (pizza: any) => {
    const updatedItems = orderitems.map((item: any) =>
      item.title === pizza.title
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setOrderitems(updatedItems);

    // Update total cost
    const newCost = cost + pizza.cost;
    setcost(newCost);
  };

  const decrementQuantity = (pizza: any) => {
    const updatedItems = orderitems.map((item: any) =>
      item.title === pizza.title && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    const newCost = cost - pizza.cost;
    setcost(newCost >= 0 ? newCost : 0);

    if (pizza.quantity > 1) {
      // Update total cost
      setOrderitems(updatedItems);
    } else {
      const filteredItems = orderitems.filter(
        (item: any) => item.title !== pizza.title
      );
      setOrderitems(filteredItems);
    }
  };

  return (
    <div className="container1 relative flex max-w-screen-2xl flex-col bg-background mb-12">
      <main className="flex-1 ">
        <div>
          <div className="text-center my-4 mb-10">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] hidden md:block">
              Order what you love!
            </h1>
          </div>

          <div className="flex gap-4">
            <div className="w-[80%] grid gap-6 grid-cols-3 items-start justify-start ">
              {arr.map((pizz: any) => (
                <div className="w-full shadow-lg rounded-xl" key={pizz.title}>
                  <img
                    src={pizz.imgLoc}
                    className="rounded-t-xl"
                    alt="pizza-1"
                  />
                  <div className="p-4">
                    <div>{pizz.title}</div>
                    <div>{pizz.desc}</div>
                    <div>{pizz.bestSeller}</div>
                    <div className="flex items-center">
                      <button
                        onClick={() => handleClick(pizz)}
                        className="w-full inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#D72E3B] text-white shadow hover:bg-[#bc2c38] h-10 px-4 py-2 rounded-[8px]"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 flex-[33.33%] h-[10%] flex-col shadow-md rounded-xl">
              <div className="text-2xl font-semibold mb-2">Your Order</div>

              <div>
                {orderitems.map((pizz: any) => (
                  <div
                    className="py-1 font-medium flex justify-between"
                    key={pizz.title}
                  >
                    <div>{pizz.title}</div>
                    <div className="flex gap-2 items-center justify-center  px-3 rounded-full shadow-md">
                      <button
                        className="cursor-pointer"
                        onClick={() => decrementQuantity(pizz)}
                      >
                        -
                      </button>
                      <div className="px-1 rounded text-[#D72E3B] ">
                        {pizz.quantity}
                      </div>
                      <button
                        className="cursor-pointer"
                        onClick={() => incrementQuantity(pizz)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between text-md font-semibold mt-4">
                <div>Delivery:</div>
                <div>Free</div>
              </div>
              <div className="flex justify-between text-md font-bold mb-4">
                <div>TOTAL:</div>
                <div>{cost}$</div>
              </div>
              <div className="flex items-center">
                <a className="w-full inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#D72E3B] text-white shadow hover:bg-[#bc2c38] h-10 px-4 py-2 rounded-[8px]">
                  Proceed to Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Order;
