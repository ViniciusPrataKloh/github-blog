import { Buildings, GithubLogo, Link, Users } from "phosphor-react";
import avatar from "../../../assets/avatar.png";
import { Description, Footer, Header, ProfileContainer, ProfileContent } from "./styles";

export function Profile() {
    return (
        <ProfileContainer>
            <ProfileContent>
                <img src={avatar} alt="" />
                <div>
                    <Header>
                        <strong>Cameron Williamson</strong>
                        <a href="#">
                            <span>GITHUB</span>
                            <Link />
                        </a>
                    </Header>

                    <Description>
                        Tristique volutpat pulvinar vel massa,
                        pellentesque egestas. Eu viverra massa quam
                        dignissim aenean malesuada suscipit. Nunc,
                        volutpat pulvinar vel mass.
                    </Description>

                    <Footer>
                        <div>
                            <GithubLogo />
                            <span>cameronwll</span>
                        </div>
                        <div>
                            <Buildings />
                            <span>Rocketseat</span>
                        </div>
                        <div>
                            <Users />
                            <span>32 seguidores</span>
                        </div>
                    </Footer>
                </div>
            </ProfileContent>
        </ProfileContainer>
    )
}