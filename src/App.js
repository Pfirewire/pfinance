import styled from "styled-components";
import Navbar from "./components/navigation/Navbar";
import Route from "./components/simple/Route";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import BudgetPage from "./pages/BudgetPage";
import {useSelector} from "react-redux";

function App() {
    const {token} = useSelector(state => state.jwt);

    const AuthenticatedApp = () => {
        return(
            <AppRoutesWrapper>
                <Route path={"/"}>
                    <HomePage />
                </Route>
                <Route path={"/budget"}>
                    <BudgetPage />
                </Route>
                <Route path={"/login"}>
                    <LoginPage />
                </Route>
            </AppRoutesWrapper>
        );
    };

    const UnauthenticatedApp = () => {
        return(
            <AppRoutesWrapper>
                <Route path={"/"}>
                    <HomePage />
                </Route>
                <Route path={"/login"}>
                    <LoginPage />
                </Route>
            </AppRoutesWrapper>
        );
    };

    return(
        <AppWrapper>
            <Navbar />
            {token ? AuthenticatedApp() : UnauthenticatedApp()}
        </AppWrapper>
    );
}

export default App;

const AppWrapper = styled.div`
  
`;

const AppRoutesWrapper = styled.section`
  
`;