import { Announcement } from '../components/Announcement';
import { Header } from '../containers/Header';
import { PageWidth } from '../components/PageWidth';
import { Banner } from '../containers/Banner';

function Home() {
    return (
        <>
        <Announcement />
        <PageWidth>
         <Header />
        </PageWidth>
        <Banner />
        </>
    )
}

export { Home };
