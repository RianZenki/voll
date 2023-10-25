import styled from "styled-components";

import ImagemBanner from "./assets/Imagem-banner.png";

const SecaoEstilizado = styled.section`
	background-color: rgba(51, 156, 255, 1);
	background-image: url(${ImagemBanner});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	height: 375px;
	display: flex;
	align-items: center;
`;

const TituloEstilizado = styled.h2`
	font-size: 32px;
	line-height: 40px;
	color: var(--cinza-claro);
	width: 35%;
	padding: 0 7.5rem;
`;

export const Banner = () => {
	return (
		<SecaoEstilizado>
			<TituloEstilizado>
				Encontre profissionais de diversas especialidades e agende sua
				consulta com facilidade!
			</TituloEstilizado>
		</SecaoEstilizado>
	);
};
