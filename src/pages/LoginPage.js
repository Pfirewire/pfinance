import styled from "styled-components";
import LoginForm from "../components/forms/LoginForm";
import {PageWrapper} from "../styles/PageWrapper.styled";


function LoginPage() {
    return(
        <PageWrapper>
            <LoginForm />
        </PageWrapper>
    );
}

export default LoginPage;