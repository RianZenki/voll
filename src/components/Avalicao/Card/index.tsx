import styled from "styled-components";
import { Rating } from "@mui/material";

import { IProfissional } from "../../../types/IProfissional";

const ContainerEstilizado = styled.div`
	flex: 40%;
	max-width: 100%;
	background-color: #ffffff;
	padding: 1em;
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
	border-radius: 8px;
	color: var(--cinza);
	display: flex;
	align-items: center;
`;

const ListaEstilizada = styled.ul`
   list-style: none;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	padding: 0;
	margin: 0;
	width: 100%;
`;

const ImagemEstilizada = styled.img`
	width: 64px;
	height: 64px;
	border-radius: 50%;
	border: 2px solid var(--azul-claro);
	object-fit: cover;
`;

const ItemListaEstilizado = styled.li`
	flex-grow: 1;
   min-width: 100px;
`;

const ParagrafoNomeEstilizado = styled.p`
	font-weight: 700;
	margin: 0.5rem 0;
`;

const ParagrafoEstilizado = styled.p`
	font-weight: 400;
	font-size: 14px;
	margin: 0.5rem 0;
`;

export const Card = ({ profissional }: { profissional: IProfissional }) => {
	const { nome, imagem, especialidade, nota } = profissional;

	return (
		<ContainerEstilizado>
			<ListaEstilizada>
				<li>
					<ImagemEstilizada
						src={imagem}
						alt={`Foto de perfil do profissinal ${nome}`}
					/>
				</li>
				<ItemListaEstilizado>
					<ParagrafoNomeEstilizado>{nome}</ParagrafoNomeEstilizado>
					<ParagrafoEstilizado>{especialidade}</ParagrafoEstilizado>
				</ItemListaEstilizado>
				<li>
					<Rating name="simple-controlled" value={nota} readOnly />
				</li>
			</ListaEstilizada>
		</ContainerEstilizado>
	);
};
