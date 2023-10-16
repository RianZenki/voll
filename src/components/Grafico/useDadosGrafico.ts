import { IConsulta } from "../../types/IConsulta";
import { IProfissional } from "../../types/IProfissional";

interface DadosGraficoProps {
	profissionais: IProfissional[] | null;
	consultas: IConsulta[] | null;
}

interface IDados {
	nome: string;
	consultas: number;
}

export const useDadosGrafico = ({
	consultas,
	profissionais,
}: DadosGraficoProps) => {
	let dados: Array<IDados> = [];

	if (profissionais && profissionais.length && consultas) {
		dados = profissionais.map((profissional) => ({
			nome: profissional.nome,
			consultas: consultas.filter((consulta) =>
				consulta.profissional.some(
					(prof) => prof.nome === profissional.nome
				)
			).length,
		}));
	}

   return dados
};
