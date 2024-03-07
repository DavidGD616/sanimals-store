import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api/fakeStoreAPI';
import { Announcement } from '../components/Announcement';
import { Header } from '../containers/Header';
import { PageWidth } from '../components/PageWidth';
import { Footer } from '../containers/Footer';
import { ProductsSection } from '../containers/ProductsSection';
import { Pagination } from '@nextui-org/react';

function Products() {
    const productsPerPage = 8;
    const [ products, setProducts ] = useState([]);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ totalPages, setTotalPages ] = useState(1);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    useEffect(() => {
        async function fetchData() {
            try {
                const productsData = await fetchProducts();
                setProducts(productsData);
                // Calculate total pages based on the length of productsData
                const totalPages = Math.ceil(productsData.length / productsPerPage);
                setTotalPages(totalPages);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        }
        fetchData();
    }, [currentPage, products]);




    return (
        <>
        <Announcement />
            <PageWidth>
                <Header />
                {products && products.length > 0 ? (
                    <>
                    <ProductsSection products={currentProducts} />
                    <div className='flex w-full justify-center mb-10'>
                        <Pagination
                            variant='flat'
                            color='primary'
                            size='lg'
                            radius='md'
                            total={totalPages}
                            siblings={0}
                            boundaries={2}
                            initialPage={1}
                            showControls
                            page={currentPage}
                            onChange={(currentPage) => setCurrentPage(currentPage)}
                        />

                    </div>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </PageWidth>
        <Footer />
        </>
      );
}

export { Products }