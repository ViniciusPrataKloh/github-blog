import { ReactNode, createContext, useEffect, useState } from "react";
import { IPost } from "../interfaces/IPostInterface";
import { api } from "../lib/axios";

interface IPostContext{
    posts: IPost[];
}

interface IPostContextProviderProps {
    children: ReactNode
  }

export const PostContext = createContext({} as IPostContext);

export function PostContextProvider({children}: IPostContextProviderProps){
    const [posts, setPosts] = useState<IPost[]>([]);

    async function loadPosts(){
        const response = await api.get('search/issues', {
            params: {
                // q : ${texto}%20repo:${username}/${repo}
                q: `repo:ViniciusPrataKloh/dt-money`
            }
        });

        setPosts(response.data.items);
    }

    useEffect(() => {
        loadPosts();
    }, []);



    return(
        <PostContext.Provider 
            value={{
                posts,
            }}
        >
            {children}
        </PostContext.Provider>
    )
}