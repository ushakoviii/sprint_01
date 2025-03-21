import styled from "styled-components";
import {FlexContainer} from "../../components/FlexContainer";
import {Icon} from "../../components/Icon";

export function Footer() {
    return (
        <StyledFooter>
            <FlexContainer>
                <FlexContainer>
                    <StyledFooterLink>
                        <Icon iconId={"mail"} width={"39"} height={"38"} viewBox={"0 0 39 38"}/>
                        <FooterIconTitle>GMAIL</FooterIconTitle>
                    </StyledFooterLink>
                </FlexContainer>
                <FlexContainer>
                    <StyledFooterLink>
                        <Icon iconId={"linkedil"} width={"39"} height={"38"} viewBox={"0 0 39 38"}/>
                        <FooterIconTitle>LINKEDIL</FooterIconTitle>
                    </StyledFooterLink>
                </FlexContainer>
                <FlexContainer>
                    <StyledFooterLink>
                        <Icon iconId={"git_contact"} width={"39"} height={"38"} viewBox={"0 0 39 38"}/>
                        <FooterIconTitle>GITHUB</FooterIconTitle>
                    </StyledFooterLink>
                </FlexContainer>
            </FlexContainer>
            <FooterMenu>
                <li>
                    <a>Projects</a>
                </li>
                <li>
                    <a>Contacts</a>
                </li>
            </FooterMenu>
            <FooterScript>WEB DEVELOPER 2021</FooterScript>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FooterMenu = styled.nav`
  display:flex;
    li {
      list-style: none;
    }
`
const FooterScript = styled.p`
`
const FooterIconTitle = styled.p `
`
const StyledFooterLink = styled.a `
  margin: 0 auto;
`