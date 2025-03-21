import styled from "styled-components";
import {StyledContact} from "../../components/StyledContact";
import main_image from "../../images/main_image.webp";
import main_image_jpeg from "../../images/main_image_jpeg.jpg";
import {StyledText} from "../../components/StyledText";


export function Main() {
    return (
        <StyledMain>
            <div>
                <StyledTitle1>DEVELOPER</StyledTitle1>
                <StyledTitle2>Erica Font</StyledTitle2>
                <StyledText>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.</StyledText>
                <StyledContact>Contact Me</StyledContact>
            </div>
            <StyledImg>
                <source srcSet={main_image} type="image/webp"/>
                <source srcSet={main_image_jpeg} type="image/jpeg"/>
                <img src={main_image_jpeg}/>
            </StyledImg>
        </StyledMain>
    )
}

const StyledMain = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
`
const StyledTitle1 = styled.h1 `
`
const StyledTitle2 = styled.h2 `
`
const StyledImg = styled.picture`
`