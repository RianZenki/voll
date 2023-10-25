import { Outlet, Navigate } from "react-router-dom"
import { autenticaStore } from "../stores/autentica.store"

export const RotaPrivada = () => {
   const { estaAutenticado } = autenticaStore

   return (
      estaAutenticado ? <Outlet /> : <Navigate to="/login" />
   )
}