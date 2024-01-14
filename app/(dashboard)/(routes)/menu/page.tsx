import React from "react";

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

const Menu = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-background mb-12">
      <main className="flex-1">
        <div className="container1 relative">
          <div className="text-center my-4 mb-10">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] hidden md:block">
              Our Delicious Menu
            </h1>
          </div>
          <div className="flex gap-6 items-center justify-center flex-wrap">
            {arr.map((pizz: any) => (
              <div className="w-1/3 shadow-lg rounded-xl" key={pizz.title}>
                <img src={pizz.imgLoc} className="rounded-t-xl" alt="pizza-1" />
                <div className="p-4">
                  <div>{pizz.title}</div>
                  <div>{pizz.desc}</div>
                  <div>{pizz.bestSeller}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Menu;
