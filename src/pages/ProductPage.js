import { Announcement } from '../components/Announcement';
import { Header } from '../containers/Header';
import { PageWidth } from '../components/PageWidth';
import { Footer } from '../containers/Footer';
import { ProductSection } from '../containers/ProductSection';

function ProductPage() {
    return (
        <>
        <Announcement />
            <PageWidth>
                <Header />
                <ProductSection />
            </PageWidth>
        <Footer />
        </>
    )
}

export { ProductPage };