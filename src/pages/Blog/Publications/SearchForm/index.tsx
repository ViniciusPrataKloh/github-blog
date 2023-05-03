import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useState } from 'react'
import { useForm } from "react-hook-form"
import * as zod from "zod"
import { PostContext } from '../../../../context/PostContextProvides'
import { Form, Header, SearchFormaContainer } from "./styles"

const newSearchFormSchema = zod.object({
    publication: zod.string()
})

type newSearchFormType = zod.infer<typeof newSearchFormSchema>

export function SearchForm() {
    const { register, handleSubmit } = useForm<newSearchFormType>({
        resolver: zodResolver(newSearchFormSchema)
    });

    const { posts, handleSetFilter } = useContext(PostContext);

    const [filter, setFilter] = useState("");

    const numberOfPublications = posts.length;

    function handleNewFormSubmit({ publication }: newSearchFormType) {
        setFilter(publication);
        handleSetFilter(publication);
    }

    return (
        <SearchFormaContainer>

            <Header>
                <strong>
                    Publicações
                </strong>

                <span>
                    {numberOfPublications} publicações
                </span>
            </Header>
            <Form onSubmit={handleSubmit(handleNewFormSubmit)}>
                <input
                    type="text"
                    placeholder="Buscar publicações"
                    // value={filter}
                    {...register("publication")}
                />
            </Form>
        </SearchFormaContainer>
    )
}