import { useParams } from "react-router-dom";
import { PostContent } from "./PostContent";
import { PostInfo } from "./PostInfo";
import { useContext } from "react";
import { PostContext } from "../../context/PostContextProvides";

export function Post() {
    const { id } = useParams();
    console.log(`id: ${id}`);

    return (
        <>
            <PostInfo />

            <PostContent />
        </>
    )
}