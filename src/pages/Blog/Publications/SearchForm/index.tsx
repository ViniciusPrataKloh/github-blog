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

    const [filter, setFilter] = useState("");

    const { handleSetFilter } = useContext(PostContext);

    // handleSetFilter(watch("publication"));

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
                    6 publicações
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