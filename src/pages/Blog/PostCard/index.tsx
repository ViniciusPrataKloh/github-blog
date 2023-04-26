import { IPost } from "../../../interfaces/IPostInterface";
import { formatDateToPassedTimeInDays, formatDateToPassedTimeInHours, formatPassedDaysToString, formatPassedHoursToString } from "../../../utils/formatter";
import { Header, PostCardContainer, PostCardSpan } from "./styles";

interface IPostCardProps {
    post: IPost;
}

export function PostCard({ post }: IPostCardProps) {
    const postBodySpans = post.body.split("\r\r");

    const postRoute = `http://localhost:5173/post/${post.number}`;

    let passedTime = formatDateToPassedTimeInDays(post.created_at);
    let formattedPassedTime = formatPassedDaysToString(passedTime);

    if (passedTime === 0) {
        passedTime = formatDateToPassedTimeInHours(post.created_at);
        formattedPassedTime = formatPassedHoursToString(passedTime);
    }

    return (
        <PostCardContainer>

            <Header>
                <a href={postRoute}>
                    <strong>
                        {post.title}
                    </strong>
                </a>
                <span>
                    {formattedPassedTime}
                </span>
            </Header>

            <PostCardSpan>
                {
                    postBodySpans.map((bodySpan) => {
                        return (
                            <span>
                                {bodySpan}
                            </span>
                        )
                    })
                }
            </PostCardSpan>
        </PostCardContainer>
    )
}