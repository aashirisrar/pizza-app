import React from 'react'

const Menu = () => {
    return (
        <div className="relative flex min-h-screen flex-col bg-background mb-12">
            <main className="flex-1">
                <div className="container1 relative">
                    <div className='text-center my-4 mb-10'>
                        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] hidden md:block">
                            Our Delicious Menu
                        </h1>
                    </div>

                    <div className="flex gap-6 items-center justify-center flex-wrap">
                        <div className='w-1/3 bg-[#c75f2f] rounded-xl '>
                            <img src="/hero.jpg" className='rounded-t-xl' alt="pizza-1" />
                            <div className='p-4'>Italian Pizza</div>
                        </div>

                        <div className='w-1/3 bg-[#c75f2f] rounded-xl '>
                            <img src="/hero.jpg" className='rounded-t-xl' alt="pizza-1" />
                            <div className='p-4'>Italian Pizza</div>
                        </div>

                        <div className='w-1/3 bg-[#c75f2f] rounded-xl '>
                            <img src="/hero.jpg" className='rounded-t-xl' alt="pizza-1" />
                            <div className='p-4'>Italian Pizza</div>
                        </div>

                        <div className='w-1/3 bg-[#c75f2f] rounded-xl '>
                            <img src="/hero.jpg" className='rounded-t-xl' alt="pizza-1" />
                            <div className='p-4'>Italian Pizza</div>
                        </div>


                    </div>
                </div>
            </main>
        </div>
    )
}

export default Menu