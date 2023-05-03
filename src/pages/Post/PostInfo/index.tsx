import { Calendar, CaretLeft, Chat, GithubLogo, Link } from "phosphor-react";
import {
    formatDateToPassedTimeInDays,
    formatDateToPassedTimeInHours,
    formatPassedDaysToString,
    formatPassedHoursToString
} from "../../../utils/formatter";
import { BlogLink, Footer, PostInfoContainer, PostInfoContent } from "./styles";

interface PostInfoProps {
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
}: PostInfoProps) {

    let passedTime = formatDateToPassedTimeInDays(updatedAt);
    let formattedPassedTime = formatPassedDaysToString(passedTime);

    if (passedTime === 0) {
        passedTime = formatDateToPassedTimeInHours(updatedAt);
        formattedPassedTime = formatPassedHoursToString(passedTime);
    }

    return (
        <PostInfoContainer>
            <PostInfoContent>

                <header>
                    <BlogLink to={"/"}>
                        <CaretLeft size={22} />
                        <span>Voltar</span>
                    </BlogLink>

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