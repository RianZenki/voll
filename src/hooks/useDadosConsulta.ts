import { IConsulta } from "../types/IConsulta";
import { useFetch } from "./useFetch";

export const useDadosConsulta = () => {
	return useFetch<IConsulta[]>({ url: "consultas" });
};
