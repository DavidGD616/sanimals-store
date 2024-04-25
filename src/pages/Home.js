import React, { useState, useEffect} from 'react';
import { fetchCategories } from '../api/fakeStoreAPI';
import { Banner } from '../containers/Banner';
import { CategoriesSectionHome } from '../containers/CategoriesSection';

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
        <Banner />
            <CategoriesSectionHome categories={categories} />
        </>
    )
}

export { Home };
