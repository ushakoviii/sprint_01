import {StyledSection} from "../../components/StyledSection";
import {TitleSection} from "../../components/TitleSection";
import {FlexContainer} from "../../components/FlexContainer";
import {Icon} from "../../components/Icon";
import styled from "styled-components";

export function Skills() {
    return (
        <StyledSection direction={"column"}>
            <TitleSection>Skills</TitleSection>
            <FlexContainer wrap={"wrap"} gap={"120px 100px"}>
                <FlexContainer direction={"column"}>
                    <Icon iconId={"js"} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                    <StyledIconName>JAVASCRIPT</StyledIconName>
                </FlexContainer >
                <FlexContainer direction={"column"}>
                    <Icon iconId={"ts"} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                    <StyledIconName>TYPESCRIPT</StyledIconName>
                </FlexContainer>
                <FlexContainer direction={"column"}>
                    <Icon iconId={"mongo_db"} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                    <StyledIconName>MONGO DB</StyledIconName>
                </FlexContainer>
                <FlexContainer direction={"column"}>
                    <Icon iconId={"frame"} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                    <StyledIconName>POSTGRESQL</StyledIconName>
                </FlexContainer>
                <FlexContainer direction={"column"}>
                    <Icon iconId={"jest"} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                    <StyledIconName>JEST</StyledIconName>
                </FlexContainer>
                <FlexContainer direction={"column"}>
                    <Icon iconId={"express"} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                    <StyledIconName>EXPRESS</StyledIconName>
                </FlexContainer>
                <FlexContainer direction={"column"}>
                    <Icon iconId={"nest_js"} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                    <StyledIconName>NEST JS</StyledIconName>
                </FlexContainer>
                <FlexContainer direction={"column"}>
                    <Icon iconId={"docker"} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                    <StyledIconName>DOCKER</StyledIconName>
                </FlexContainer>
                <FlexContainer direction={"column"}>
                    <Icon iconId={"react_js"} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                    <StyledIconName>REACT JS</StyledIconName>
                </FlexContainer>
                <FlexContainer direction={"column"}>
                    <Icon iconId={"react_native"} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                    <StyledIconName>REACT NATIVE</StyledIconName>
                </FlexContainer>
                <FlexContainer direction={"column"}>
                    <Icon iconId={"styled_components"} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                    <StyledIconName>STYLED COMPONENTS</StyledIconName>
                </FlexContainer>
                <FlexContainer direction={"column"}>
                    <Icon iconId={"redux"} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                    <StyledIconName>REDUX</StyledIconName>
                </FlexContainer>
                <FlexContainer direction={"column"}>
                    <Icon iconId={"git"} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                    <StyledIconName>GIT</StyledIconName>
                </FlexContainer>
            </FlexContainer>
        </StyledSection>
    )
}
const SkilIconWrapper = styled.div `
    
`
const StyledIconName = styled.p `
`