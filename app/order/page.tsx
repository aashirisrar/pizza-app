import React from "react";

const arr: any = [
    {
        imgLoc: "/hero.jpg",
        title: "Italian Pizza",
        desc: "Spicy",
        bestSeller: "Best Seller",
    },
    {
        imgLoc: "/hero.jpg",
        title: "Italian Pizza",
        desc: "Spicy",
        bestSeller: "Best Seller",
    },
    {
        imgLoc: "/hero.jpg",
        title: "Italian Pizza",
        desc: "Spicy",
        bestSeller: "Best Seller",
    },
    {
        imgLoc: "/hero.jpg",
        title: "Italian Pizza",
        desc: "Spicy",
        bestSeller: "Best Seller",
    },
];

const Order = () => {
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
                                <div className="w-full shadow-lg rounded-xl">
                                    <img
                                        src={pizz.imgLoc}
                                        className="rounded-t-xl"
                                        alt="pizza-1"
                                    />
                                    <div className="p-4">
                                        <div>{pizz.title}</div>
                                        <div>{pizz.desc}</div>
                                        <div>{pizz.bestSeller}</div>
                                        <div>Order Now</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 flex-[33.33%] h-[10%] flex-col shadow-md rounded-xl">
                            <div className="text-2xl font-semibold mb-2">Your Order</div>

                            <div>
                                {arr.map((pizz: any) => (
                                    <div className="py-1 font-medium flex justify-between">
                                        <div>{pizz.title}</div>
                                        <div className="flex gap-2 items-center justify-center  px-3 rounded-full shadow-md">
                                            <div className="">-</div>
                                            <div className="px-1 rounded text-[#D72E3B]">{1}</div>
                                            <div className=" ">+</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-between text-md font-semibold mt-3">
                                <div>Delivery:</div>
                                <div>Free</div>
                            </div>
                            <div className="flex justify-between text-md font-bold mb-2">
                                <div>TOTAL:</div>
                                <div>50$</div>
                            </div>
                            <div className="flex items-center">
                                <a
                                    className="w-full inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#D72E3B] text-white shadow hover:bg-primary/90 h-10 px-4 py-2 rounded-[8px]"
                                    href="/order"
                                >
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
