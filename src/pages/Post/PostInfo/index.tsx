import {Calendar, CaretLeft, Chat, GithubLogo, Link} from "phosphor-react";
import { Footer, PostInfoContainer, PostInfoContent } from "./styles";

export function PostInfo(){
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

            <strong>JavaScript data types and data structures</strong>

            <Footer>
                <a href="#">
                    <GithubLogo />
                    <span>cameronwll</span>
                </a>
                <a href="#">
                    <Calendar />
                    <span>Há 1 dia</span>
                </a>
                <a href="#">
                    <Chat />
                    <span>5 comentários</span>
                </a>
            </Footer>

            </PostInfoContent>
        </PostInfoContainer>
    )
}