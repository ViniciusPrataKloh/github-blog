import styled from "styled-components";

export const ProfileContainer = styled.section`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 2rem;

    margin-top: -5rem;
    background: ${(props) => props.theme["base-profile"]};
    border-radius: 6px;
`

export const ProfileContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    strong{
        font-weight: bold;
        font-size: 24px;
        color: ${(props) => props.theme["base-title"]}
    }

    a{
        color: ${(props) => props.theme["brand-blue"]};
        display: flex;
        gap: 0.5rem;
        text-decoration: none;
    }
`

interface AvatarImageProps {
    url: string;
  }

export const AvatarImage = styled.div<AvatarImageProps>`
  min-width: 14.8rem;
  height: 14.8rem;
  
  background-image: url(${({ url }) => url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  @media (max-width: 660px) {
    width: 14.8rem;
    margin: 0 auto;
  }
`

export const Description = styled.span`
    margin-top: 0.5rem;
    margin-bottom:  1.5rem;
    color: ${(props) => props.theme["base-text"]};
`

export const Footer = styled.footer`
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 1.5rem;

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