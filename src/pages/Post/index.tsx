import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../../context/PostContextProvides";
import { api } from "../../lib/axios";
import { PostContent } from "./PostContent";
import { PostInfo } from "./PostInfo";

export function Post() {
    const { username, repoName } = useContext(PostContext);

    const { number } = useParams();
    const [title, setTitle] = useState<string>("");
    const [user, setUser] = useState<string>("");
    const [updatedAt, setUpdatedAt] = useState<Date>(new Date());
    const [comments, setComments] = useState<number>(0);
    const [body, setBody] = useState<string>("");

    async function getPostInfo() {
        const response = await api.get(`https://api.github.com/repos/${username}/${repoName}/issues/${number}`);
        setTitle(response.data.title);
        setUser(response.data.user.login);
        setUpdatedAt(response.data.updated_at);
        setComments(response.data.comments);
        setBody(response.data.body);
    }

    useEffect(() => {
        getPostInfo();
    }, []);

    return (
        <>
            <PostInfo
                title={title}
                user={user}
                updatedAt={updatedAt}
                comments={comments}
            />

            <PostContent
                content={body}
            />
        </>
    )
}