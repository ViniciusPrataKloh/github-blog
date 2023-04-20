import { Buildings, GithubLogo, Link, Users } from "phosphor-react";
import { AvatarImage, Description, Footer, Header, ProfileContainer, ProfileContent } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../../lib/axios";
import { IUser } from "../../../interfaces/UserInterface";

export function Profile() {
    const [userInfo, setUserInfo] = useState<IUser>({} as IUser); 

    async function loadProfile(){
        const response = await api.get('users/ViniciusPrataKloh');

        setUserInfo(response.data);
    }

    useEffect(() => {
        loadProfile()
    }, [loadProfile]);

    return (
        <ProfileContainer>
            <ProfileContent>
                <AvatarImage url={userInfo.avatar_url}/>

                <div>
                    <Header>
                        <strong>{userInfo.name}</strong>
                        <a href={userInfo.html_url} target="_blank">
                            <span>GITHUB</span>
                            <Link />
                        </a>
                    </Header>

                    <Description>
                        Tristique volutpat pulvinar vel massa, pellentesque egestas. 
                        Eu viverra massa quam dignissim aenean malesuada suscipit. 
                        Nunc, volutpat pulvinar vel mass.
                    </Description>

                    <Footer>
                        <div>
                            <GithubLogo />
                            <span>{userInfo.login}</span>
                        </div>
                        <div>
                            <Buildings />
                            <span>{userInfo.company}</span>
                        </div>
                        <div>
                            <Users />
                            <span>{userInfo.followers} seguidores</span>
                        </div>
                    </Footer>
                </div>
            </ProfileContent>
        </ProfileContainer>
    )
}