import logo from "../../assets/logo.png";
import { HeaderContainer, HeaderContent } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} alt="Logo do Github Blog" />
            </HeaderContent>
        </HeaderContainer>
    )
}