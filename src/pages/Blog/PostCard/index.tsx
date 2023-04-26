import { IPost } from "../../../interfaces/IPostInterface";
import { Header, PostCardContainer, PostCardSpan } from "./styles";

interface IPostCardProps{
    post: IPost;
}

export function PostCard({post}: IPostCardProps) {
    const postBodySpans = post.body.split("\r\r");

    const postRoute = `http://localhost:5173/post/${post.number}`;

    return (
        <PostCardContainer>
            <a href={postRoute}>
                <Header>
                    <strong>
                        {post.title}
                    </strong>
                    <span>
                        {post.created_at}
                    </span>
                </Header>

                <PostCardSpan>
                    {
                        postBodySpans.map((bodySpan) => {
                            return(
                                <span>
                                    {bodySpan}
                                </span>
                            )
                        })
                    }
                </PostCardSpan>
            </a>
        </PostCardContainer>
    )
}