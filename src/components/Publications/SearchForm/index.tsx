import { Form, Header, SearchFormaContainer } from "./styles"

export function SearchForm() {
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
            <Form>
                <input type="text" name="input" id="input" placeholder="Buscar publicações" />
            </Form>
        </SearchFormaContainer>
    )
}