import { createContext, ReactNode, useEffect, useState } from "react";
import { IPost } from "../interfaces/IPostInterface";
import { api } from "../lib/axios";

interface IPostContext {
    posts: IPost[];
    handleSetFilter: (filter: string) => void;
    username: string;
    repoName: string;
}

interface IPostContextProviderProps {
    children: ReactNode
}

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export const PostContext = createContext({} as IPostContext);

export function PostContextProvider({ children }: IPostContextProviderProps) {
    const [posts, setPosts] = useState<IPost[]>([]);
    // const [filter, setFilter] = useState<string>("");

    async function loadPosts(query: string = "") {
        const response = await api.get(
            `/search/issues?q=${query}%20repo:${username}/${repoName}`
        );
        setPosts(response.data.items);
    }


    function handleSetFilter(filter: string) {
        loadPosts(filter);
    }

    useEffect(() => {
        loadPosts();
    }, []);

    return (
        <PostContext.Provider
            value={{
                posts,
                handleSetFilter,
                username,
                repoName
            }}
        >
            {children}
        </PostContext.Provider>
    )
}