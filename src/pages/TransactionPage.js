import {PageWrapper} from "../styles/PageWrapper.styled";
import {useSelector} from "react-redux";
import {TabList, Tabs, Tab, TabPanel} from "@mui/joy";
import AccountTransactionList from "../components/transactions/AccountTransactionList";


function TransactionPage() {
    const { userAccounts } = useSelector(state => state.accounts);

    const accountTabComponents = userAccounts.map((account, index) => {
        console.log(account);
        return(
            <Tab value={index} key={account.id}>{account.name}</Tab>
        );
    });

    const accountTabPanels = userAccounts.map((account, index) => {
        return(
            <TabPanel value={index} key={account.id}>
                <AccountTransactionList account={account} />
            </TabPanel>
        )
    })

    return(
        <PageWrapper>
            <h1>Transactions Page</h1>
            <Tabs defaultValue={0}>
                <TabList>
                    {accountTabComponents}
                </TabList>
                {accountTabPanels}
            </Tabs>
        </PageWrapper>
    );
}

export default TransactionPage;
