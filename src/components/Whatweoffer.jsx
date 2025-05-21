import React, { useState } from 'react'



const menus = [
  // Food
  { name: "burger", level: 60, category: "food" },
  { name: "sandwich", level: 90, category: "food"},
  { name: "pizza", level: 90, category: "food"},
  { name: "Hotdog", level: 90, category: "food" }, 
  

  // drink
  { name: "apple juice", level: 50, category: "drink" },
  { name: "orange juice", level: 50, category: "drink" },
  { name: "kiwi juice", level: 50, category: "drink" },
  { name: "coffee", level: 50, category: "drink" },
 

  // snack
  { name: "donut", level: 30, category: "snack" },
  { name: "chicken nugget", level: 65, category: "snack" },
  { name: "french fries", level: 55, category: "snack" }
];

const categories = ["all", "food", "drink", "snack"];
const Whatweoffer = () => {

    const[activeCategory,setActiveCategory]=useState("all");
    const filteredMenus = menus.filter((menu) => {
        if (activeCategory === "all") {
            return true;
        }
        return menu.category === activeCategory;
    }
    );
  
    return (
    <section id="menus" className="py-24 px-4 relative " >
         <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                Menu
            </h2>
            <div className='flex flex-wrap justify-center gap-4 mb-12'>
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`px-5 py-2 rounded-full 
                            text-sm font-semibold transition-colors  duration-300 
                            ${activeCategory === category ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                        onClick={() => setActiveCategory(category)

                        }
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    filteredMenus.map((menu, index) => (
                        <div key={index} className='bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105'>
                               <h3 className='text-xl font-semibold mb-2'>{menu.name}</h3>
                               <p className='text-gray-600'>Price: {menu.level}  THB </p>
                        
                        </div>
                    ))
                }

            </div>

         </div>
   </section>
  )
}

export default Whatweoffer;