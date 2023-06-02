import styled from "styled-components";
import {PageWrapper} from "../styles/PageWrapper.styled";
import {useSelector} from "react-redux";
import {useEffect} from "react";


function HomePage() {
    const {jwtToken} = useSelector(state => state.keys);

    return(
        <PageWrapper>
            {jwtToken ? 'Token Received' : 'Home Page'}
        </PageWrapper>
    );
}

export default HomePage;