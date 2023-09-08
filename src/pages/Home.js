import { Announcement } from '../components/Announcement';
import { Header } from '../containers/Header';
import { PageWidth } from '../components/PageWidth';

function Home() {
    return (
        <>
        <Announcement />
        <PageWidth>
         <Header />
        </PageWidth>
        </>
    )
}

export { Home };
