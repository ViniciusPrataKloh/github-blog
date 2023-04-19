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
`

export const PostCode = styled.div`
    padding: 1rem 1rem;
    background: ${(props) => props.theme["base-code"]};
`