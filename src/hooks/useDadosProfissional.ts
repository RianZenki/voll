import { IProfissional } from "../types/IProfissional";
import { useFetch } from "./useFetch";

export const useDadosProfissional = () => {
	return useFetch<IProfissional[]>({ url: "especialista" });
};
