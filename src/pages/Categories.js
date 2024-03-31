import React, { useEffect, useState } from "react";
import { fetchCategories } from "../api/fakeStoreAPI";
import { PageWidth } from "../components/PageWidth";
import { Footer } from "../containers/Footer";
import { CategoriesSection } from "../containers/CategoriesSection";
import { SkeletonCategorie } from "../components/Skeletons";

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
        return <SkeletonCategorie />
    }

    return (
        <>
        <PageWidth>
            <CategoriesSection categories={categories}/>
        </PageWidth>
        <Footer />
        </>
    )
}

export { Categories };