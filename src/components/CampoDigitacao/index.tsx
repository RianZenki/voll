import styled from "styled-components";

const Campo = styled.input`
	background: #f0f0f0;
	margin: 1em 0;
	box-sizing: border-box;
	box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
	border: none;
	width: 100%;
	padding: 16px;
	outline: none;
`;

const Rotulo = styled.label`
   display: block;
   font-weight: 700;
   font-size: 16px;
   line-height: 19px;
   color: var(--azul-escuro)
`;

const Container = styled.div`
   width: 100%;
`;

interface CampoDigitacaoProps {
	valor: string;
	tipo: string;
	placeholder: string;
	onChange: (value: string) => void;
	label?: string;
}

export const CampoDigitacao = ({
	valor,
	tipo,
	placeholder,
	onChange,
	label,
}: CampoDigitacaoProps) => {
	return (
		<Container>
			{label ? <Rotulo htmlFor={label}>{label}</Rotulo> : null}
			<Campo
				value={valor}
				type={tipo}
				placeholder={placeholder}
				onChange={(e) => onChange(e.target.value)}
				id={label}
			/>
		</Container>
	);
};
