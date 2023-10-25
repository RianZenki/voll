import { IEndereco } from './IEndereco'

export interface IClinica {
   email: string,
   nome: string,
   senha: string,
   endereco: IEndereco
}