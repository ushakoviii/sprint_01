import {StyledSection} from "../../components/StyledSection";
import {TitleSection} from "../../components/TitleSection";
import {FlexContainer} from "../../components/FlexContainer";

export function Contacts() {
    return (
        <StyledSection direction={"column"}>
            <TitleSection>Contacts</TitleSection>
            <form action={""} method={"get"}>
                <FlexContainer direction={"column"}>
                    <label>Name</label>
                    <input id={"userName"} type={"text"} name={"userName"} placeholder={"Example"}/>
                </FlexContainer>
                <FlexContainer direction={"column"}>
                    <label>Email</label>
                    <input id={"userEmail"} type={"email"} name={"userEmail"} placeholder={"Your Email"}/>
                </FlexContainer>
                <FlexContainer direction={"column"}>
                    <label>Messange</label>
                    <textarea name={"userMessage"} id={"userMessage"}>Your Message</textarea>
                </FlexContainer>
                <button type={"submit"}>Submit</button>
            </form>
        </StyledSection>
)
}
