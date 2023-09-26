import { Announcement } from '../components/Announcement';
import { Header } from '../containers/Header';
import { PageWidth } from '../components/PageWidth';
import { Banner } from '../containers/Banner';
import { Collections } from '../containers/Collections';

function Home() {
    return (
        <>
        <Announcement />
        <PageWidth>
         <Header />
        </PageWidth>
        <Banner />
        <PageWidth>
            <Collections />
        </PageWidth>
        </>
    )
}

export { Home };
