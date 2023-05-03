import styled from "styled-components";
import {PageWrapper} from "../styles/PageWrapper.styled";
import {useSelector} from "react-redux";


function HomePage() {
    const {token} = useSelector(state => state.jwt);

    return(
        <PageWrapper>
            {token ? 'Token Received' : 'Home Page'}
        </PageWrapper>
    );
}

export default HomePage;