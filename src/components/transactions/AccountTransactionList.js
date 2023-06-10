import styled from "styled-components";
import {useFetchTransactionsByAccountAndDaysQuery} from "../../store";


function AccountTransactionList({ account }) {
    console.log(account);
    const { data, error, isFetching } = useFetchTransactionsByAccountAndDaysQuery({ accountId: account.id, days: 7 });

    let content;
    if(isFetching) content = <div>Loading...</div>;
    else if(error) content = <div>Error retrieving Transaction Data</div>;
    else {
        console.log(data);
        content = data.map(transaction => {
            return(
                <TransactionWrapper>
                    {transaction.amount}
                </TransactionWrapper>
            );
        });
    }

    return(
        <AccountTransactionListWrapper>
            <div>
                Account Transactions List for Account: {account.name}
            </div>
            {content}
        </AccountTransactionListWrapper>
    )
}

export default AccountTransactionList;

const AccountTransactionListWrapper = styled.div``;

const TransactionWrapper = styled.div``;