import styled from "styled-components";
import {PageWrapper} from "../styles/PageWrapper.styled";
import {useSelector} from "react-redux";
import {useEffect} from "react";


function HomePage() {
    const {token} = useSelector(state => state.jwt);

    useEffect(() => {
        const getGroups = async () => {
            const results = await fetch("http://localhost:8080/api/groups", {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            console.log(results);
        };
        if(token) {
            getGroups();
        }
    });

    return(
        <PageWrapper>
            {token ? 'Token Received' : 'Home Page'}
        </PageWrapper>
    );
}

export default HomePage;