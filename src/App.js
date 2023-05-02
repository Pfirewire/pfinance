import styled from "styled-components";
import Navbar from "./components/navigation/Navbar";
import Route from "./components/simple/Route";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";


function App() {
    return(
        <AppWrapper>
            <Navbar />
            <AppRoutesWrapper>
                <Route path={"/"}>
                    <HomePage />
                </Route>
                <Route path={"/login"}>
                    <LoginPage />
                </Route>
            </AppRoutesWrapper>
        </AppWrapper>
    );
}

export default App;

const AppWrapper = styled.div`
  
`;

const AppRoutesWrapper = styled.section`
  
`;