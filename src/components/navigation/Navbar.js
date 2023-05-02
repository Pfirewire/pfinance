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
  align-items: center;
  position: sticky;
`;