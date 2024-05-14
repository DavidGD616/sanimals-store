import React from "react";
import { ProductCard } from "../components/ProductCard"; 


function ProductsSection({ products }) {
    return (
    <section>
        <div className="mt-10 grid grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4">
            <ProductCard products={products} />
        </div>
    </section>
    )
}

export { ProductsSection }