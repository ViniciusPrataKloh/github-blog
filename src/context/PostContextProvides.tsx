import { createContext, ReactNode, useEffect, useState } from "react";
import { IPost } from "../interfaces/IPostInterface";
import { api } from "../lib/axios";

interface IPostContext {
    posts: IPost[];
    // filter: string;
    handleSetFilter: (filter: string) => void;
}

interface IPostContextProviderProps {
    children: ReactNode
}

const username = "ViniciusPrataKloh";
const repoName = "dt-money;"

export const PostContext = createContext({} as IPostContext);

export function PostContextProvider({ children }: IPostContextProviderProps) {
    const [posts, setPosts] = useState<IPost[]>([]);
    // const [filter, setFilter] = useState<string>("");

    async function loadPosts(query: string = "") {
        const response = await api.get(
            `/search/issues?q=${query}%20repo:ViniciusPrataKloh/dt-money`
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
                // filter,
                handleSetFilter
            }}
        >
            {children}
        </PostContext.Provider>
    )
}