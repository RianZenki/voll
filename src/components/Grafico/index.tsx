import { BarChart, XAxis, YAxis, Bar, ResponsiveContainer } from "recharts";
import styled from "styled-components";

import { IProfissional } from "../../types/IProfissional";
import { IConsulta } from "../../types/IConsulta";
import { useDadosGrafico } from "./useDadosGrafico";

interface GraficoProps {
	profissionais: IProfissional[] | null;
	consultas: IConsulta[] | null;
}

interface IDados {
	nome: string;
	consultas: number;
}

const SecaoEstilizada = styled.section`
	background-color: var(--branco);
	border-radius: 16px;
`

export const Grafico = ({ profissionais, consultas }: GraficoProps) => {
	let dados: Array<IDados> = useDadosGrafico({ profissionais, consultas });

	return (
		<SecaoEstilizada>
			<ResponsiveContainer width="100%" height={350}>
				<BarChart
					layout="vertical"
					data={dados}
					margin={{ top: 25, right: 40, left: 40, bottom: 20 }}
				>
					<XAxis type="number"></XAxis>
					<YAxis type="category" dataKey="none"></YAxis>
					<Bar dataKey="consultas" fill="#083860" barSize={30}></Bar>
				</BarChart>
			</ResponsiveContainer>
		</SecaoEstilizada>
	);
};
