import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api/fakeStoreAPI';
import { PageWidth } from '../components/PageWidth';
import { Footer } from '../containers/Footer';
import { ProductSection } from '../containers/ProductSection';

function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const productData = await fetchProductById(id);
                setProduct(productData);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        }

        fetchData();
    }, [id]);

    if (!product) {
        return <div>Loading ...</div>
    }

    return (
        <>
        <PageWidth>
            <ProductSection product={product} />
        </PageWidth>
        <Footer />
        </>
    )
}

export { ProductPage };