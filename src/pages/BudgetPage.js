import styled from "styled-components";
import {PageWrapper} from "../styles/PageWrapper.styled";
import {useEffect} from "react";
import {useSelector} from "react-redux";

function BudgetPage() {
    const {token} = useSelector(state => state.jwt);

    useEffect(() => {
        const createLinkToken = async () => {
            const results = await fetch("http://localhost:8080/api/plaid/create-link-token", {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            console.log(results);
            const data = await results.text();
            console.log(data);
        }
        if(token) {
            createLinkToken();
        }
    }, []);
    return(
        <PageWrapper>
            This should only show if authenticated
        </PageWrapper>
    );
}

export default BudgetPage;