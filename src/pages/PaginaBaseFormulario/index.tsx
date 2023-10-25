import styled from "styled-components"
import ImagemDeFundo from "./ImagemDeFundo.png"
import { Outlet } from "react-router-dom"

const ContainerPrincipal = styled.div`
   background-image: url(${ImagemDeFundo});
   background-size: cover;
   width: 100%;
   height: 100svh;
   display: flex;
   flex-direction: column;
   align-items: center;
`
const Container = styled.div`
   background-color: white;
   width: 50vw;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
`

export const PaginaBaseFormulario = () => {
   return (
      <ContainerPrincipal>
         <Container>
            <Outlet />
         </Container>
      </ContainerPrincipal>
   )
}