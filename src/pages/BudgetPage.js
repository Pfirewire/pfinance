import {PageWrapper} from "../styles/PageWrapper.styled";
import CategoryList from "../components/budget/CategoryList";
import Budget from "../components/budget/Budget";
import Button from "../components/simple/Button";
import {addAccounts, setLinkToken} from "../store";
import {useDispatch, useSelector} from "react-redux";
import {usePlaidLink} from "react-plaid-link";
import {useEffect, useState} from "react";
import useNavigation from "../hooks/use-navigation";

function BudgetPage() {
    const dispatch = useDispatch();
    const {navigate} = useNavigation();
    const {jwtToken, linkToken} = useSelector(state => state.keys);
    const [addingAccount, setAddingAccount] = useState(false);
    const {userAccounts} = useSelector(state => state.accounts);
    console.log(userAccounts);
    const config = {
        onSuccess: async (public_token, metadata) => {
            console.log("Success");
            console.log(public_token);
            console.log(metadata);
            const results = await fetch("http://localhost:8080/api/plaid/exchange-public-token", {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${jwtToken}`,
                },
                body: public_token
            });
            console.log(results);
            const data = await results.json();
            console.log(data);
            dispatch(addAccounts(data));
            setAddingAccount(false);
            // navigate("/");
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
        setAddingAccount(true);
    };

    const accountElements = userAccounts.map((account, index) => {
        return (
            <div key={index}>
                {account.name}: ${account.availableBalance}
            </div>
        );
    });

    useEffect(() => {
        if(ready && addingAccount) {
            open()
        }
    }, [open, ready, addingAccount]);

    const handleLinkAccount = async () => {
        await createLinkToken();
    };

    return(
        <PageWrapper>
            {accountElements}
            <Button onClick={handleLinkAccount} primary>
                + Add Bank Account
            </Button>
            {/*<CategoryList />*/}
            <Budget />
        </PageWrapper>
    );
}

export default BudgetPage;