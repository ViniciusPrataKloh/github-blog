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
    }, [loadProfile])

    return (
        <ProfileContainer>
            <ProfileContent>
                <AvatarImage url={userInfo.avatar_url}/>

                <div>
                    <Header>
                        <strong>{userInfo.name}</strong>
                        <a href={userInfo.html_url}>
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
                        <a href={userInfo.html_url}>
                            <GithubLogo />
                            <span>{userInfo.login}</span>
                        </a>
                        <a href={userInfo.html_url}>
                            <Buildings />
                            <span>{userInfo.company}</span>
                        </a>
                        <a href={userInfo.followers_url}>
                            <Users />
                            <span>{userInfo.followers} seguidores</span>
                        </a>
                    </Footer>
                </div>
            </ProfileContent>
        </ProfileContainer>
    )
}