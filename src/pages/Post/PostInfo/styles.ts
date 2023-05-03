import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostInfoContainer = styled.section`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 2rem;

    margin-top: -5rem;
    background: ${(props) => props.theme["base-profile"]};
    border-radius: 6px;
`

export const PostInfoContent = styled.div`
    display: flex;
    flex-direction: column;

    header{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.250rem;

        a{
            display: flex;
            flex-direction: row;
            gap: 0.5rem;

            color: ${(props) => props.theme["brand-blue"]};
            text-decoration: none;
            font-weight: bold;
            font-size: 12px;
            line-height: 160%;
            text-transform: uppercase;
            border: 2px solid transparent;

            transition: 0.2s;

            &:hover{
                color: ${(props) => props.theme["base-text"]};
                border-bottom: 2px solid ${(props) => props.theme["brand-blue"]};
            }
        }
    }

    strong{
        color: ${(props) => props.theme["base-title"]};
        font-weight: bold;
        font-size: 24px;
        line-height: 130%;
        margin-bottom: 1rem;
    }
`

export const Footer = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 2rem;
    
    a{
        display: flex;
        align-items: center;
        justify-content: center;

        color: ${(props) => props.theme["base-span"]};
        line-height: 160%;
        text-decoration: none;
    }

    svg{
        margin-right: 0.5rem;
    }
`

export const BlogLink = styled(Link)`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;

    color: ${(props) => props.theme["brand-blue"]};
    text-decoration: none;
    font-weight: bold;
    font-size: 12px;
    line-height: 160%;
    text-transform: uppercase;

    transition: 0.2s;

    &:hover{
        color: ${(props) => props.theme["base-text"]};
    }
`