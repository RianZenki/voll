import { Card } from "./Card";
import { Botao } from "../Botao";
import { IProfissional } from "../../types/IProfissional";

import styled from "styled-components";

const SecaoCard = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 100%;
	margin: 1rem 0;
	gap: 1rem;
`;

export const Avaliacao = ({
	profissionais,
}: {
	profissionais: IProfissional[] | null;
}) => {
	return (
		<>
			<SecaoCard>
				{profissionais && profissionais.length
					? profissionais?.map((profissional) => (
							<Card profissional={profissional} />
					  ))
					: "Não há avalicações para mostrar"}
			</SecaoCard>

			{profissionais && profissionais.length ? (
				<Botao>Ver mais</Botao>
			) : null}
		</>
	);
};
