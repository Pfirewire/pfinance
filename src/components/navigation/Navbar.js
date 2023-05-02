import styled from "styled-components";
import Link from '../simple/Link.js';


function Navbar() {
    return(
        <NavbarWrapper>
            <Link to={"/"}>Home</Link>
            <Link to={"/login"}>Login</Link>
        </NavbarWrapper>
    )
}

export default Navbar;

const NavbarWrapper = styled.nav`
  width:100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  padding: 1rem;
  background-color: darkslategrey;
  color: white;
  
  a:visited {
    color: white;
  }
`;