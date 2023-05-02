import styled from "styled-components";


function Navbar() {
    return(
        <NavbarWrapper>
            <div>Home</div>
            <div>Login</div>
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