import {PageWrapper} from "../styles/PageWrapper.styled";
import CategoryList from "../components/budget/CategoryList";

function BudgetPage() {
    const handleLinkAccount = () => {

    };

    return(
        <PageWrapper>
            <button onClick={handleLinkAccount} />
            <CategoryList />
        </PageWrapper>
    );
}

export default BudgetPage;