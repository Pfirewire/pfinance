import {PageWrapper} from "../styles/PageWrapper.styled";
import {useSelector} from "react-redux";
import {TabList, Tabs, Tab} from "@mui/joy";


function TransactionPage() {
    const { userAccounts } = useSelector(state => state.accounts);

    const accountTabComponents = userAccounts.map((account, index) => {
        console.log(account);
        return(
            <Tab value={index + 1} key={account.id}>{account.name}</Tab>
        );
    });

    return(
        <PageWrapper>
            <h1>Transactions Page</h1>
            <Tabs defaultValue={1}>
                <TabList>
                    {accountTabComponents}
                </TabList>
            </Tabs>
        </PageWrapper>
    );
}

export default TransactionPage;
