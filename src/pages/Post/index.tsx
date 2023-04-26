import { useParams } from "react-router-dom";
import { PostContent } from "./PostContent";
import { PostInfo } from "./PostInfo";
import { useContext, useEffect, useState } from "react";
import { PostContext } from "../../context/PostContextProvides";
import { api } from "../../lib/axios";

export function Post() {
    const { number } = useParams();
    const [title, setTitle] = useState<string>("");
    const [user, setUser] = useState<string>("");
    const [updatedAt, setUpdatedAt] = useState<string>("");
    const [comments, setComments] = useState<number>(0);
    const [body, setBody] = useState<string>("");

    async function getPostInfo(){
        const response = await api.get(`https://api.github.com/repos/ViniciusPrataKloh/dt-money/issues/${number}`);
        setTitle(response.data.title);
        setUser(response.data.user.login);
        setUpdatedAt(response.data.updated_at);
        setComments(response.data.comments);
        setBody(response.data.body);

        console.log(response.data);
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
                body={body}
            />
        </>
    )
}