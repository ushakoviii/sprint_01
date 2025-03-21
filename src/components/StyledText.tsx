import styled from "styled-components";
type StyledTextPropsType = {
    size?: string;
    line?: string;
}
export const StyledText = styled.p <StyledTextPropsType> `
  font-weight: 400;
  font-size: ${props => props.size};
  line-height: ${props => props.line};
`