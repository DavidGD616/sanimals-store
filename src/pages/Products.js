import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api/fakeStoreAPI';
import { Announcement } from '../components/Announcement';
import { Header } from '../containers/Header';
import { PageWidth } from '../components/PageWidth';
import { Footer } from '../containers/Footer';
import { ProductsSection } from '../containers/ProductsSection';

function Products() {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const productsData = await fetchProducts();
                setProducts(productsData);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        }
        fetchData();
    })
    return (
        <>
        <Announcement />
            <PageWidth>
                <Header />
                <ProductsSection products={products} />
            </PageWidth>
        <Footer />
        </>
      );
}

export { Products }