import styled from "styled-components";

export const PostContentContainer = styled.section`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 2.5rem 2rem;
`

export const StyledPostContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    color: ${(props) => props.theme["base-text"]};

    a{
        color: ${(props) => props.theme["brand-blue"]};
        text-decoration-line: underline;
    }

    strong, h1,h2,h3{
        color: ${(props) => props.theme["brand-blue"]};
        font-weight: bold;
    }

    pre{
        padding: 1rem 1rem;
        background: ${(props) => props.theme["base-post"]};

        > div {
            background: none !important;
            padding: 0 !important;
            margin: 0 !important;
            code {
                font-family: "FiraCode", monospace !important;
                line-height: 160% !important;
            }
        }
    }

    img {
        width: 100%;
    }

    ul {
        list-style: inherit;
        padding-left: 1.5rem;
    }
`