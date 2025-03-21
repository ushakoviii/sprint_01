import styled from "styled-components";

type ProjectPropsType = {
    imgJpeg?: string;
    imgWebp?: string;
    title?: string;
    text?: string;
    tech1?: string;
    tech2?: string;
    tech3?: string;
    tech4?: string;
}

export function Project(props:ProjectPropsType) {
    return (
        <StyledProject>
            <StyledProjecImg>
                <source srcSet={props.imgWebp} type="image/webp"/>
                <source srcSet={props.imgJpeg} type="image/jpeg"/>
                <img src={props.imgJpeg}/>
            </StyledProjecImg>
            <StyledProjectTitle>{props.title}</StyledProjectTitle>
            <div>
                <StyledProjectLink>{props.tech1}</StyledProjectLink>
                <StyledProjectLink>{props.tech2}</StyledProjectLink>
                <StyledProjectLink>{props.tech3}</StyledProjectLink>
                <StyledProjectLink>{props.tech4}</StyledProjectLink>
            </div>
            <StyledProjectText>{props.text}</StyledProjectText>
        </StyledProject>
    )
}

const StyledProject = styled.div`
  max-width: 522px;
  min-height: 636px;
`
const StyledProjecImg = styled.picture`

`
const StyledProjectTitle = styled.h4`

`
const StyledProjectLink = styled.a`

`
const StyledProjectText = styled.p`

`