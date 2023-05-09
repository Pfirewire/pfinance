import styled from "styled-components";
import {PageWrapper} from "../styles/PageWrapper.styled";
import {useSelector} from "react-redux";
import {useEffect} from "react";


function HomePage() {
    const {jwtToken} = useSelector(state => state.keys);

    useEffect(() => {
        const getGroups = async () => {
            const results = await fetch("http://localhost:8080/api/groups", {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${jwtToken}`,
                },
            });
            console.log(results);
        };
        if(jwtToken) {
            getGroups();
        }
    });

    return(
        <PageWrapper>
            {jwtToken ? 'Token Received' : 'Home Page'}
        </PageWrapper>
    );
}

export default HomePage;