import styled from "styled-components";
import {TitleSection} from "../../components/TitleSection";
import {StyledText} from "../../components/StyledText";
import {StyledSection} from "../../components/StyledSection";

export function AboutMe() {
    return (
        <StyledSection>
            <TitleSection>About me</TitleSection>
            <StyledText>The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a chamber built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains were placed within this chamber during the Neolithic period, representing at least nine or ten individuals.</StyledText>
        </StyledSection>
    )
}