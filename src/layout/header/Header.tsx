import styled from "styled-components";
import {StyledContact} from "../../components/StyledContact";

export function Header() {
    return (
        <StyledHeader>
            <HeaderMenu>
                <ul>
                    <li><a>Home</a></li>
                    <StyledMenuContainer>
                        <li><a>Projects</a></li>
                        <li><StyledContact>Contact</StyledContact></li>
                    </StyledMenuContainer>
                </ul>
            </HeaderMenu>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
  height: 100px;
  background-color: #fff;
`

const HeaderMenu = styled.nav`
  li {
    list-style: none;
  }

  ul {
    display: flex;
    justify-content: space-between;
  }
`
const StyledMenuContainer = styled.div `
  display: flex;
  justify-content: space-between;
  gap: 90px;
`

