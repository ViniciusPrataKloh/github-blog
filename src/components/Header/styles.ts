import styled from "styled-components";
import cover from "../../assets/cover.png";

export const HeaderContainer = styled.header`
    background: url(${cover});
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
    height: 212px;
`

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
`