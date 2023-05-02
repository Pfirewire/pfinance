import styled from "styled-components";
import LoginForm from "../components/forms/LoginForm";


function LoginPage() {
    return(
        <LoginPageWrapper>
            <LoginForm />
        </LoginPageWrapper>
    );
}

export default LoginPage;

const LoginPageWrapper = styled.div`
  
`;