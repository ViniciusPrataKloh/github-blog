import { useContext, useEffect, useState } from "react";
import { PostCard } from "../PostCard";
import { SearchForm } from "./SearchForm";
import { PublicationsContainer, PublicationsContent } from "./styles";
import { IPost } from "../../../interfaces/IPostInterface";
import { PostContext } from "../../../context/PostContextProvides";

export function Publications() {
    const {posts} = useContext(PostContext);

    console.log(posts);

    return (
        <PublicationsContainer>
            <SearchForm />

            <PublicationsContent>
                {
                    posts.map((post) => {
                        return (
                            <PostCard 
                                key={post.id}
                                post={post}
                            />
                        )
                    })
                }
            </PublicationsContent>
        </PublicationsContainer>
    )
}

