import styled from "styled-components";
import {PageWrapper} from "../styles/PageWrapper.styled";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    usePlaidLink,
    PlaidLinkOptions,
    PlaidLinkOnSuccess,
} from 'react-plaid-link';
import {setLinkToken} from "../store";

function BudgetPage() {
    const dispatch = useDispatch();
    const {jwtToken, linkToken} = useSelector(state => state.keys);

    useEffect(() => {
        const createLinkToken = async () => {
            const results = await fetch("http://localhost:8080/api/plaid/create-link-token", {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${jwtToken}`,
                },
            });
            console.log(results);
            const data = await results.text();
            console.log(data);
            await dispatch(setLinkToken(data));
            console.log(linkToken);
        }
        if(jwtToken) {
            createLinkToken();
        }
    }, []);

    const config = {
        onSuccess: (public_token, metadata) => {
            console.log("Success");
        },
        onExit: (err, metadata) => {
            console.log("Exited")
        },
        onEvent: (eventName, metadata) => {
            console.log("Event")
        },
        token: linkToken,
    };

    const { open, exit, ready } = usePlaidLink(config);

    useEffect(() => {
        if(ready) {
            open()
        }
    }, [open, ready]);


    return(
        <PageWrapper>
            This should only show if authenticated
        </PageWrapper>
    );
}

export default BudgetPage;