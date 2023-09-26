import { CollectionsGridContainer } from "../components/CollectionsGridContainer";
import { CollectionsContainer } from "../components/CollectionsContainer";

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
            </CollectionsGridContainer>
        </section>
    )
}

export { Collections };