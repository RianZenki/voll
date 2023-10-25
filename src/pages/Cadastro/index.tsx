import styled from "styled-components";
import logo from "./assets/logo.png";
import { Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";
import { Botao } from "../../components/Botao";
import { CampoDigitacao } from "../../components/CampoDigitacao";
import { IClinica } from "../../types/IClinica";
import { usePost } from "../../hooks/usePost";
import { useNavigate } from "react-router-dom";

const Imagem = styled.img`
	padding: 2em 0;
`;

const Titulo = styled.h2`
	font-weight: 700;
	font-size: 24px;
	line-height: 28px;
	color: var(--cinza);
`;

const Formulario = styled.form`
	width: 70%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const BotaoCustomizado = styled(Botao)`
	width: 50%;
`;

const StepCustomizado = styled.div<CustomStepProps>`
	background-color: ${({ cor }) => cor};
	width: 8px;
	height: 8px;
	border-radius: 50%;
`;

const Container = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: 30% 65%;
	justify-content: space-between;
`;

interface CustomStepProps {
	cor: string;
}

export const Cadastro = () => {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [nome, setNome] = useState("");
	const [cnpj, setCnpj] = useState("");
	const [senhaVerificada, setSenhaVerificada] = useState("");
	const [telefone, setTelefone] = useState("");
	const [cep, setCep] = useState("");
	const [rua, setRua] = useState("");
	const [numero, setNumero] = useState("");
	const [complemento, setComplemento] = useState("");
	const [etapaAtiva, setEtapaAtiva] = useState(0);
	const [estado, setEstado] = useState("");
	const { cadastrarDados, erro, sucesso } = usePost();
	const navigate = useNavigate();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault(); // previne o envio padrão do formulário

		const clinica: IClinica = {
			email,
			nome,
			senha,
			endereco: {
				cep,
				rua,
				numero,
				complemento,
				estado,
			},
		};

		if (etapaAtiva !== 0) {
			try {
				await cadastrarDados({ url: "clinica", dados: clinica });
				navigate("/login");
			} catch (erro) {
				erro && alert("Erro ao cadastrar os dados");
			}
		}

		setEtapaAtiva(etapaAtiva + 1); // atualiza o estado da etapa para a próxima etapa
	};

	return (
		<>
			<Imagem src={logo} alt="Logo da Voll" />
			<Stepper activeStep={etapaAtiva}>
				<Step>
					<StepLabel
						StepIconComponent={(props) => (
							<StepCustomizado
								cor={props.active ? "lightblue" : "lightgray"}
							/>
						)}
					/>
				</Step>

				<Step>
					<StepLabel
						StepIconComponent={(props) => (
							<StepCustomizado
								cor={props.active ? "lightblue" : "lightgray"}
							/>
						)}
					/>
				</Step>
			</Stepper>

			{etapaAtiva === 0 ? (
				<>
					<Titulo>Primeiro, alguns dados básicos:</Titulo>
					<Formulario onSubmit={handleSubmit}>
						<CampoDigitacao
							tipo="text"
							label="Nome"
							valor={nome}
							placeholder="Insira seu nome"
							onChange={setNome}
						/>
						<CampoDigitacao
							tipo="text"
							label="CNPJ"
							valor={cnpj}
							placeholder="Insira seu cnpj"
							onChange={setCnpj}
						/>
						<CampoDigitacao
							tipo="email"
							label="Email"
							valor={email}
							placeholder="Insira o endereço de e-mail para login"
							onChange={setEmail}
						/>
						<CampoDigitacao
							tipo="password"
							label="Senha"
							valor={senha}
							placeholder="Digite sua senha"
							onChange={setSenha}
						/>
						<CampoDigitacao
							tipo="password"
							label="Confirme a senha"
							valor={senhaVerificada}
							placeholder="Confirme sua senha"
							onChange={setSenhaVerificada}
						/>
						<BotaoCustomizado type="submit">Avançar</BotaoCustomizado>
					</Formulario>
				</>
			) : (
				<>
					<Titulo>Agora, os dados técnicos:</Titulo>
					<Formulario onSubmit={handleSubmit}>
						<CampoDigitacao
							tipo="tel"
							label="Telefone"
							valor={telefone}
							placeholder="(DDD) XXXXX-XXXX"
							onChange={setTelefone}
						/>
						<CampoDigitacao
							tipo="number"
							label="CEP"
							valor={cep}
							placeholder="Insira o CEP"
							onChange={setCep}
						/>
						<CampoDigitacao
							tipo="text"
							label="Rua"
							valor={rua}
							placeholder="Rua"
							onChange={setRua}
						/>
						<Container>
							<CampoDigitacao
								tipo="number"
								valor={numero}
								placeholder="Número"
								onChange={setNumero}
							/>
							<CampoDigitacao
								tipo="text"
								valor={complemento}
								placeholder="Complemento"
								onChange={setComplemento}
							/>
							<CampoDigitacao
								tipo="text"
								valor={estado}
								placeholder="Estado"
								onChange={setEstado}
							/>
						</Container>
						<BotaoCustomizado type="submit">Cadastrar</BotaoCustomizado>
					</Formulario>
				</>
			)}
		</>
	);
};
