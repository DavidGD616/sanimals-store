import React, { useState, useEffect} from 'react';
import { fetchCategories } from '../api/fakeStoreAPI';
import { Announcement } from '../components/Announcement';
import { Header } from '../containers/Header';
import { PageWidth } from '../components/PageWidth';
import { Banner } from '../containers/Banner';
import { CategoriesSection } from '../containers/CategoriesSection';
import { Footer } from '../containers/Footer';

function Home() {
    const [ categories, setCategories ] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const categoriesData = await fetchCategories();
                setCategories(categoriesData);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        }
        
        fetchData();
    }, []);

    if (!categories) {
        return <div>Loading ...</div>
    }

    return (
        <>
        <Announcement />
            <PageWidth>
                <Header />
            </PageWidth>
        <Banner />
            <PageWidth>
                <CategoriesSection categories={categories} />
            </PageWidth>
        <Footer />
        </>
    )
}

export { Home };
