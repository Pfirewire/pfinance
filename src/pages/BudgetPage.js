import {PageWrapper} from "../styles/PageWrapper.styled";
import CategoryList from "../components/budget/CategoryList";
import Budget from "../components/budget/Budget";

function BudgetPage() {
    const handleLinkAccount = () => {

    };

    return(
        <PageWrapper>
            <button onClick={handleLinkAccount} />
            {/*<CategoryList />*/}
            <Budget />
        </PageWrapper>
    );
}

export default BudgetPage;