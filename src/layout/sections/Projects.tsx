import styled from "styled-components";
import {FlexContainer} from "../../components/FlexContainer";
import {TitleSection} from "../../components/TitleSection";
import {Project} from "../../components/Project";
import project_image_jpeg from "../../images/project_image_jpeg.jpg"
import {StyledSection} from "../../components/StyledSection";
import project_image from "../../images/project_image.webp"


export function Projects() {
    return (
        <StyledSection direction={"column"}>
                <TitleSection>Projects</TitleSection>
                <FlexContainer wrap={"wrap"}>
                    <Project
                        imgJpeg={project_image_jpeg}
                        imgWebp={project_image}
                        title={"TITLE PROJECT"}
                        tech1={"JAVASCRIPT"}
                        tech2={"PPOSTGRESQL"}
                        tech3={"REACT"}
                        tech4={"REDUX"}
                        text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
                    />
                    <Project
                        imgJpeg={project_image_jpeg}
                        imgWebp={project_image}
                        title={"I N S I G H T G R A M"}
                        tech1={"JAVASCRIPT"}
                        tech2={"PPOSTGRESQL"}
                        tech3={"REACT"}
                        text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
                    />
                    <Project
                        imgJpeg={project_image_jpeg}
                        imgWebp={project_image}
                        title={"TITLE PROJECT"}
                        tech1={"JAVASCRIPT"}
                        tech2={"PPOSTGRESQL"}
                        tech3={"REACT"}
                        tech4={"REDUX"}
                        text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
                    />
                    <Project
                        imgJpeg={project_image_jpeg}
                        imgWebp={project_image}
                        title={"I N S I G H T G R A M"}
                        tech1={"JAVASCRIPT"}
                        tech2={"PPOSTGRESQL"}
                        tech3={"REACT"}
                        text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
                    />
                </FlexContainer>
        </StyledSection>
    )
}

