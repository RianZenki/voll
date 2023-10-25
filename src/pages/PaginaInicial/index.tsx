import styled from "styled-components"
import { Banner } from "../../components/Banner"
import { Atividades } from "../../components/Atividades"
import { Depoimentos } from "../../components/Depoimentos"
import { Pesquisa } from "../../components/Pesquisa"

const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`

export const PaginaInicial = () => {
    return (
        <>
            <Banner />
            <Container>
                <Pesquisa />
                <Atividades />
                <Depoimentos />
            </Container >
        </>
    )
}