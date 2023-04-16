import styled from "styled-components";

export const SearchFormaContainer = styled.div`
    width: 100%;
    max-width: 1220px;
    margin: 4.5rem auto;
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong{
        color: ${(props) => props.theme["base-subtitle"]};
        font-weight: bold;
        font-size: 18px;
        line-height: 160%;
    }

    span{
        color: ${(props) => props.theme["base-span"]};
        font-size: 14px;
        line-height: 160%;
    }
`

export const Form = styled.form`
    input{
        width: 100%;
        flex: 1;
        box-sizing: border-box;
        border: 1px solid ${(props) => props.theme["base-border"]};
        border-radius: 6px;
        padding: 12px 16px;
        margin-top: 0.5rem;

        background: ${(props) => props.theme["base-input"]};
        color: ${(props) => props.theme["base-text"]};

        &::placeholder{
            color: ${(props) => props.theme["base-label"]};
        }

        &::focus{
            border: 1px solid ${(props) => props.theme["brand-blue"]};
        }
    }
`