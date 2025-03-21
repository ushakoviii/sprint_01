import styled from "styled-components";

type StyledSectionPropsType = {
    direction?: string;
}
export const StyledSection = styled.div<StyledSectionPropsType>`
  min-height: 100vh;
  display: flex;
  flex-direction: ${props => props.direction};
`
