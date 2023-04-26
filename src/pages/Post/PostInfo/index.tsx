import {Calendar, CaretLeft, Chat, GithubLogo, Link} from "phosphor-react";
import { Footer, PostInfoContainer, PostInfoContent } from "./styles";
import { 
    formatDateToPassedTimeInDays, 
    formatDateToPassedTimeInHours, 
    formatPassedDaysToString, 
    formatPassedHoursToString 
} from "../../../utils/formatter";

interface PostInfoProps{
    title: string;
    user: string;
    updatedAt: Date;
    comments: number; 
}

export function PostInfo({
    title,
    user,
    updatedAt,
    comments
}: PostInfoProps){

    let passedTime = formatDateToPassedTimeInDays(updatedAt);
    let formattedPassedTime = formatPassedDaysToString(passedTime);

    if (passedTime === 0){
        passedTime = formatDateToPassedTimeInHours(updatedAt);
        formattedPassedTime = formatPassedHoursToString(passedTime);
    }

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
                <span>
                    <GithubLogo />
                    <span>{user}</span>
                </span>
                <span>
                    <Calendar />
                    <span>{formattedPassedTime}</span>
                </span>
                <span>
                    <Chat />
                    <span>{comments} comentários</span>
                </span>
            </Footer>

            </PostInfoContent>
        </PostInfoContainer>
    )
}