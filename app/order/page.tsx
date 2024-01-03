import React from 'react'

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
    }
    ,
    {
        imgLoc: "/hero.jpg",
        title: "Italian Pizza",
        desc: "Spicy",
        bestSeller: "Best Seller",
    }
    ,
    {
        imgLoc: "/hero.jpg",
        title: "Italian Pizza",
        desc: "Spicy",
        bestSeller: "Best Seller",
    }
]

const Order = () => {
    return (
        <div className="relative flex min-h-screen flex-col bg-background mb-12">
            <main className="flex-1">
                <div className="container1 relative">
                    <div className='text-center my-4 mb-10'>
                        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] hidden md:block">
                            Order what you love!
                        </h1>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-[80%] grid gap-6 grid-cols-3 items-start justify-start ">
                            {
                                arr.map((a: any) => (<div className='w-full bg-[#c75f2f] rounded-xl'>
                                    <img src={a.imgLoc} className='rounded-t-xl' alt="pizza-1" />
                                    <div className='p-4'>
                                        <div>{a.title}</div>
                                        <div>{a.desc}</div>
                                        <div>{a.bestSeller}</div>
                                        <div>Order Now</div>
                                    </div>
                                </div>))
                            }
                        </div>

                        <div className="flex-[33.33%] h-[350px] flex-col  bg-blue-500 rounded-xl">
                            <div className="p-12 text-lg">
                                Your Order
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Order