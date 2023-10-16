import { Cabecalho } from "./components/Cabecalho";
import { Container } from "./components/Container";
import { Titulo } from "./components/Titiulo";
import { Rodape } from "./components/Rodape";
import { Tabela } from "./components/Tabela";
import { Grafico } from "./components/Grafico";
import { useDadosConsulta } from "./hooks/useDadosConsulta";
import { useDadosProfissional } from "./hooks/useDadosProfissional";

import "./App.css";
import { Avaliacao } from "./components/Avalicao";
import { Botao } from "./components/Botao";
import { Subtitulo } from "./components/Subtitulo";

function App() {
	const { dados: consultas, erro: consultasErro } = useDadosConsulta();
	const { dados: profissionais, erro: profissionaisErro } =
		useDadosProfissional();

	if (consultasErro || profissionaisErro) {
		console.log(
			"Ocorreu um erro na requisição",
			consultasErro,
			profissionaisErro
		);
	}

	return (
		<>
			<Cabecalho />
			<Container>
				<Titulo>Área Administrativa</Titulo>
				<Botao>Cadastrar especialista</Botao>

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
			<Rodape />
		</>
	);
}

export default App;
