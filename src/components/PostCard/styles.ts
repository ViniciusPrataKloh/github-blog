import styled from "styled-components";

export const PostCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.125rem;
    padding: 2rem;
    background: ${(props) => props.theme["base-post"]};
`
export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong{
        color: ${(props) => props.theme["base-title"]};
        font-weight: bold;
        font-size: 20px;
        line-height: 160%;
    }

    span{
        color: ${(props) => props.theme["base-span"]};
        font-size: 14px;
        line-height: 160%;
    }
`