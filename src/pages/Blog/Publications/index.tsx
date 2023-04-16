import { PostCard } from "../PostCard";
import { SearchForm } from "./SearchForm";
import { PublicationsContainer, PublicationsContent } from "./styles";

export function Publications() {
    return (
        <PublicationsContainer>
            <SearchForm />

            <PublicationsContent>
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </PublicationsContent>
        </PublicationsContainer>
    )
}