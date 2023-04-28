import styled from "styled-components";

export const PublicationsContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    margin-top: 3rem;
    margin-bottom: 14.625rem;
`

export const PublicationsContent = styled.div`
    display: grid;
    /* grid-template-columns: repeat(2, 1fr);  */
    grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
    gap: 2rem;
`