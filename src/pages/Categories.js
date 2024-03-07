import React, { useEffect, useState } from "react";
import { fetchCategories } from "../api/fakeStoreAPI";
import { Announcement } from "../components/Announcement";
import { PageWidth } from "../components/PageWidth";
import { Header } from "../containers/Header";
import { Footer } from "../containers/Footer";
import { CategoriesSection } from "../containers/CategoriesSection";

function Categories() {
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
                <CategoriesSection categories={categories}/>
            </PageWidth>
        <Footer />
        </>
    )
}

export { Categories };