import { CollectionsGridContainer } from "../components/CollectionsGridContainer";
import { CollectionsContainer } from "../components/CollectionsContainer";
import ArrowUp from '../svg/carbon_arrow-up-right.svg';

function Collections () {
    return (
        <section className="collections" >
            <h2 className="collections__h2">COLLECTIONS</h2>
            <CollectionsGridContainer>
                <CollectionsContainer />
                <CollectionsContainer />
                <CollectionsContainer />
                <CollectionsContainer />
                <CollectionsContainer />
                <div className="collections__ButtonCategories">
                    <span>
                        ALL CATEGORIES
                        <img src={ArrowUp}/>
                    </span>
                </div>
            </CollectionsGridContainer>
        </section>
    )
}

export { Collections };