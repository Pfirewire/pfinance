import {PageWrapper} from "../styles/PageWrapper.styled";
import GroupList from "../components/budget/GroupList";

function BudgetPage() {
    const handleLinkAccount = () => {

    };

    return(
        <PageWrapper>
            <button onClick={handleLinkAccount} />
            <GroupList />
        </PageWrapper>
    );
}

export default BudgetPage;