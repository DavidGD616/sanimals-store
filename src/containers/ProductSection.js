import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { Link } from "react-router-dom";
import { ColorsPicker } from "../components/ProductPage/ColorsPicker";
import { SizesPicker } from "../components/ProductPage/SizesPicker";
import { Button } from "@nextui-org/react";
import { BagIcon } from "../svg/BagIcon";

function ProductSection({ product, colors, sizes }) {
  const {
    addToCart,
  } = useContext(CartContext)

  const images = product.images;

  const [mainImage, setMainImage] = useState(images[0]);

  const handleThumbnailClick = (image) => {
    setMainImage(image)
  }
    return (
      <section className="py-12 sm:py-16">
        <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3 lg:row-end-1">
            <div className="lg:flex lg:items-start">
              <div className="lg:order-2 lg:ml-5">
                <div className="max-w-xl overflow-hidden rounded-lg">
                <img className="h-full w-full max-w-full object-cover"
                  src={mainImage} alt={product.title} />
                </div>
              </div>

              <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                <div className="flex flex-row items-start lg:flex-col">
                  {
                    images.map((image, index) => (
                      <button key={index}
                      type="button" 
                      className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent focus:border-gray-900 text-center">
                         <img className="h-full w-full object-contain" src={image} alt={product.title} onClick={() => handleThumbnailClick(image)} />
                      </button>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl mb-8">
              {product.title}
            </h1>

            {/* Color Picker */}
            <label className="mt-8 text-base text-gray-900">Color</label>
              <ColorsPicker colors={colors} />

            {/* Sizes Picker */}
            <label className="mt-8 text-base text-gray-900">Size</label>
              <SizesPicker sizes={sizes} />

            <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
              <div className="flex items-end">
                <span className="text-3xl font-bold text-black">${product.price}</span>
              </div>
              {/* Add to Cart Button */}
              <Button 
              onClick={() => {addToCart(product)}}
              className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-6 text-center text-base font-bold text-white">
                <BagIcon />
                Add to Cart
              </Button>
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