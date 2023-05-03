import styled from "styled-components";
import cover from "../../assets/cover.png";

export const HeaderContainer = styled.header`
    background: url(${cover}) no-repeat center;
    background-size: cover;
    height: 18.5rem;
`

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding-top: 4rem;

    display: flex;
    align-items: center;
    justify-content: center;
`