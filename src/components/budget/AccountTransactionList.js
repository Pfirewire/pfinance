import styled from "styled-components";


function AccountTransactionList({ account }) {
    return(
        <AccountTransactionListWrapper>
            Account Transactions List for Account: {account.name}
        </AccountTransactionListWrapper>
    )
}

export default AccountTransactionList;

const AccountTransactionListWrapper = styled.div``;