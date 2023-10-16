import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { Paper } from "@mui/material";
import styled from "@emotion/styled";

import { IConsulta } from "../../types/IConsulta";

const CelulaEstilizada = styled(TableCell)(() => ({
	[`&.${tableCellClasses.head}`]: {
		color: "var(--azul-escuro)",
		fontSize: 18,
		fontWeight: 700,
		fontFamily: "var(--fonte-principal)",
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 16,
		fontFamily: "var(--fonte-principal)",
	},
}));

const ListaEstilizada = styled(TableRow)(() => ({
	["&:nth-of-type(odd)"]: {
		backgroundColor: "var(--cinza-claro)",
		align: "rigt",
	},
}));

export const Tabela = ({ consultas }: { consultas: IConsulta[] | null }) => {
	return (
		<>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 700 }} aria-label="tabela-customizada">
					<TableHead>
						<TableRow>
							<CelulaEstilizada>Data</CelulaEstilizada>
							<CelulaEstilizada>Horário</CelulaEstilizada>
							<CelulaEstilizada>Profissional</CelulaEstilizada>
							<CelulaEstilizada>Espeialidade</CelulaEstilizada>
							<CelulaEstilizada>Paciente</CelulaEstilizada>
							<CelulaEstilizada>Modalidade</CelulaEstilizada>
						</TableRow>
					</TableHead>
					<TableBody>
						{consultas &&
							consultas?.map((consulta) => (
								<ListaEstilizada key={consulta.id}>
									<CelulaEstilizada component="th" scope="row">
										{new Date(consulta.data).toLocaleDateString()}
									</CelulaEstilizada>
									<CelulaEstilizada component="th" scope="row">
										{consulta.horario}
									</CelulaEstilizada>
									<CelulaEstilizada component="th" scope="row">
										{consulta.profissional[0].nome}
									</CelulaEstilizada>
									<CelulaEstilizada component="th" scope="row">
										{consulta.profissional[0].especialidade}
									</CelulaEstilizada>
									<CelulaEstilizada component="th" scope="row">
										{consulta.paciente}
									</CelulaEstilizada>
									<CelulaEstilizada component="th" scope="row">
										{consulta.modalidade}
									</CelulaEstilizada>
								</ListaEstilizada>
							))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};
