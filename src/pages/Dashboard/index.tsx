import { Container } from "../../components/Container";
import { Titulo } from "../../components/Titiulo";
import { Botao } from "../../components/Botao";
import { Tabela } from "../../components/Tabela";
import { Subtitulo } from "../../components/Subtitulo";
import { Grafico } from "../../components/Grafico";
import { Avaliacao } from "../../components/Avalicao";
import { useDadosConsulta } from "../../hooks/useDadosConsulta";
import { useDadosProfissional } from "../../hooks/useDadosProfissional";
import { ModalCadastro } from "./Modal";
import { useState } from "react";

export const Dashboard = () => {
	const { dados: consultas, erro: consultasErro } = useDadosConsulta();
	const { dados: profissionais, erro: profissionaisErro } =
		useDadosProfissional();
	const [open, setOpen] = useState(false)

	const handleOpen = () => {
		setOpen(true);
	}

	const handleClose = () => {
		setOpen(false)
	}

	if (consultasErro || profissionaisErro) {
		console.log(
			"Ocorreu um erro na requisição",
			consultasErro,
			profissionaisErro
		);
	}

	return (
		<>
			<Container>
				<Titulo>Área Administrativa</Titulo>
				<Botao onClick={handleOpen}>Cadastrar especialista</Botao>

				<ModalCadastro open={open} handleClose={handleClose}></ModalCadastro>

				<Titulo imagem="consulta">Consultas do dia</Titulo>
				<Tabela consultas={consultas} />
				<Botao>Ver mais</Botao>

				<Titulo imagem="grafico">Consultas mensais por especialista</Titulo>
				<Subtitulo>Dezembro/22</Subtitulo>
				<Grafico profissionais={profissionais} consultas={consultas} />

				<Titulo imagem="avaliacao">Avaliações de especialistas</Titulo>
				<Subtitulo>Dezembro/22</Subtitulo>
				<Avaliacao profissionais={profissionais} />
			</Container>
		</>
	);
};
