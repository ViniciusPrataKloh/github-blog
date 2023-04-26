import {Calendar, CaretLeft, Chat, GithubLogo, Link} from "phosphor-react";
import { Footer, PostInfoContainer, PostInfoContent } from "./styles";

interface PostInfoProps{
    title: string;
    user: string;
    updatedAt: string;
    comments: number; 
}

export function PostInfo({
    title,
    user,
    updatedAt,
    comments
}: PostInfoProps){
    return(
        <PostInfoContainer>
            <PostInfoContent>

            <header>
                <a href="http://localhost:5173">
                    <CaretLeft size={22}/>
                    <span>Voltar</span>
                </a>

                <a href="#">
                    <span>Ver no github</span>
                    <Link />
                </a>
            </header>

            <strong>{title}</strong>

            <Footer>
                <a href="#">
                    <GithubLogo />
                    <span>{user}</span>
                </a>
                <a href="#">
                    <Calendar />
                    <span>{updatedAt}</span>
                </a>
                <a href="#">
                    <Chat />
                    <span>{comments} comentários</span>
                </a>
            </Footer>

            </PostInfoContent>
        </PostInfoContainer>
    )
}