import React from "react";
import { Link } from "react-router-dom";

function ProductSection({ product }) {
  const colors = [
    { bg: "bg-[#2563EB]", ring: "ring-[#2563EB]" },
    { bg: "bg-[#8B5CF6]", ring: "ring-[#8B5CF6]" },
    { bg: "bg-[#DB2777]", ring: "ring-[#DB2777]" },
    { bg: "bg-[#475569]", ring: "ring-[#475569]" },
    { bg: "bg-[#EA580C]", ring: "ring-[#EA580C]" }]

  const sizes = [
    { "size": "XXS" },
    { "size": "XS" },
    { "size": "S" },
    { "size": "M" },
    { "size": "L" },
    { "size": "XL" },
    { "size": "XXL" },
  ]
    return (
      <section className="py-12 sm:py-16">
        <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3 lg:row-end-1">
            <div className="lg:flex lg:items-start">
              <div className="lg:order-2 lg:ml-5">
                <div className="max-w-sm overflow-hidden rounded-lg">
                  <img className="h-full w-full max-w-full object-cover"
                  src={product.image} alt={product.title} />
                </div>
              </div>

              <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                <div className="flex flex-row items-start lg:flex-col">
                  <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center">
                    <img className="h-full w-full object-contain" src={product.image} alt={product.title} />
                  </button>
                  <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                    <img className="h-full w-full object-contain" src={product.image} alt={product.title} />
                  </button>
                  <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                    <img className="h-full w-full object-contain" src={product.image} alt={product.title} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl mb-8">
              {product.title}
            </h1>
            <label className="mt-8 text-base text-gray-900">Color</label>
            <ul className="mt-4 mb-8 flex items-center flex-wrap gap-4">
              {
                colors.map((item, idx) => (
                  <li key={idx} className="flex-none">
                            <label htmlFor={item.bg} className="block relative w-8 h-8">
                                <input id={item.bg} type="radio" defaultChecked={idx === 1 ? true : false} name="color" class="sr-only peer" />
                                <span className={`inline-flex justify-center items-center w-full h-full rounded-full peer-checked:ring ring-offset-2 cursor-pointer duration-150 ${item.bg} ${item.ring}`}>
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white absolute inset-0 m-auto z-0 pointer-events-none hidden peer-checked:block duration-150">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </label>
                        </li>
                ))
              }
            </ul>
            <label className="mt-8 text-base text-gray-900">Size</label>
            <ul className="mt-4 flex items-center flex-wrap gap-4">
              {
                sizes.map((item, idx) => (
                  <li key={idx} className="flex-none">
                    <label htmlFor={item.size} className="block relative w-12 h-12">
                      <input id={item.size} type="radio" defaultChecked={idx === 1 ? true : false} name="sizes" className="sr-only peer" />
                      <span className='inline-flex justify-center items-center w-full h-full rounded-full border-2 peer-checked:ring ring-offset-2 cursor-pointer duration-150 peer-checked:bg-black ring-black peer-checked:text-white'>
                        {item.size}
                      </span>
                    </label>
                  </li>
                ))
              }
            </ul>

            <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
              <div className="flex items-end">
                <span className="text-3xl font-bold text-black">${product.price}</span>
              </div>
              <button type="button" className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Add to Cart
              </button>
            </div>

            <div className="lg:col-span-3">
              <div className="border-b border-gray-300">
                <nav className="flex gap-4">
                  <Link to='#' className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800">Description</Link>
                </nav>
              </div>
            </div>

            <div className="mt-8 flow-root sm:mt-12">
              <p className="mt-4">{product.description}</p>
            </div>

          </div>

        </div>

      </section>   
    )
}

export { ProductSection };