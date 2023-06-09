import { IPost } from "../../../interfaces/IPostInterface";
import { formatDateToPassedTimeInDays, formatDateToPassedTimeInHours, formatPassedDaysToString, formatPassedHoursToString } from "../../../utils/formatter";
import { Header, PostCardContainer, PostCardSpan } from "./styles";

interface IPostCardProps {
    post: IPost;
}

export function PostCard({ post }: IPostCardProps) {
    const postBodySpans = post.body.split("\r\r");

    let passedTime = formatDateToPassedTimeInDays(post.created_at);
    let formattedPassedTime = formatPassedDaysToString(passedTime);

    if (passedTime === 0) {
        passedTime = formatDateToPassedTimeInHours(post.created_at);
        formattedPassedTime = formatPassedHoursToString(passedTime);
    }

    return (
        <PostCardContainer to={`/post/${post.number}`}>

            <Header>
                <strong>
                    {post.title}
                </strong>

                <span>
                    {formattedPassedTime}
                </span>
            </Header>

            <PostCardSpan>
                {
                    postBodySpans.map((bodySpan) => {
                        return (
                            <p key={post.number}>
                                {bodySpan}
                            </p>
                        )
                    })
                }
            </PostCardSpan>
        </PostCardContainer>
    )
}