import { Outlet } from 'react-router-dom'

import { Cabecalho } from "../../components/Cabecalho"
import { Rodape } from "../../components/Rodape"

export const PaginaBase = () => {
   return (
      <>
         <Cabecalho />
         <main>
            <Outlet />
         </main>
         <Rodape />
      </>
   )
}