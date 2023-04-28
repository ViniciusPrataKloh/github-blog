import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostCardContainer = styled(Link)`
    display: flex;
    flex-direction: column;
    gap: 1.125rem;
    padding: 2rem;
    background: ${(props) => props.theme["base-post"]};
    border-radius: 6px;
    border: 2px solid ${(props) => props.theme["base-post"]};
    transition: 0.2s;

    text-decoration: none;
    /* color: ${(props) => props.theme["base-title"]}; */

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    
    &:hover{
        border-color: ${(props) => props.theme["base-label"]};
    }

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

            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;  
        }

    span{
        color: ${(props) => props.theme["base-span"]};
        font-size: 14px;
        line-height: 160%;
    }
`

export const PostCardSpan = styled.span`
    text-decoration: none;
    white-space: pre-line;
    color: ${(props) => props.theme["base-text"]};

    p{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 6;
    }
`