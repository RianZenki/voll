import styled from "styled-components";

import avaliacao from "./assets/avaliacao.png";
import consulta from "./assets/consulta.png";
import grafico from "./assets/grafico.png";

interface TituloProps {
	imagem?: string;
	children?: React.ReactNode;
}

interface IImagens {
	avaliacao: string;
	grafico: string;
	consulta: string;
}

const SpanEstilizado = styled.span<TituloProps>`
	background-repeat: no-repeat;
	background-postion: center;
	background-size: cover;
	width: 25px;
	height: 25px;
	background-image: ${(props) =>
		props.imagem ? `url(${props.imagem})` : "none"};
	margin-right: ${(props) => (props.imagem ? ".5rem" : "")};
`;

const TituloEstilizado = styled.h2`
	color: var(--azul-claro);
`;

const ContainerEstilizado = styled.div`
	display: flex;
	align-items: center;
`;

export const Titulo = ({ imagem, children }: TituloProps) => {
	const listaDeImagens: IImagens = {
		avaliacao,
		consulta,
		grafico,
	};

	return (
		<ContainerEstilizado>
			{imagem && (
				<SpanEstilizado imagem={listaDeImagens[imagem as keyof IImagens]} />
			)}
			<TituloEstilizado>{children}</TituloEstilizado>
		</ContainerEstilizado>
	);
};
