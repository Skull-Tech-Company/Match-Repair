import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import {
  InputField,
  ColumnDiv,
  RowDiv,
  MediumText,
  DivSvg,
  RadioInput,
  StyledForm,
  BgImg,
  ForgotPassWordLink,
  Logo,
  InputWithIcon,
} from "@/screens/SignIn/SignInStyles";
import eyeIconOn from "../../assets/eyeOn.png";
import eyeIconOff from "../../assets/eyeOff.png";

export function SigIn() {
  // salvar login e senha no state conforme é digitado
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // state para mostrar/ocultar a senha mudando o type do input
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  // alterna a visibilidade da senha, state inicia com falso e mudamos para true quando clicado
  const togglePasswordVisibilty = () => setShowPassword(!showPassword);
  // salva o login no state conforme vai digitando
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  // salva a senha no state conforme vai digitando
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  // envio do formulario (adicionar a logica ainda)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  const handleAcessClick = () => {
    navigate("/Home");
  };

  return (
    // Bg de fundo
    <BgImg>
      <ColumnDiv>
        <Logo />
        {/* Inicio do Form */}
        <StyledForm onSubmit={handleSubmit}>
          <ColumnDiv>
            {/* Input de login */}
            <RowDiv>
              <DivSvg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M19.8912 21.2618V18.6183C20.486 18.3235 22.1871 16.2986 22.3655 14.7164C22.8334 14.6807 23.5683 14.2511 23.785 12.5553C23.9014 11.6446 23.4387 11.1331 23.1585 10.9718C23.1585 10.9718 23.8564 9.64608 23.8564 8.0454C23.8564 4.83613 22.5968 2.09741 19.8912 2.09741C19.8912 2.09741 18.9515 0.114746 15.9261 0.114746C10.3193 0.114746 7.99576 3.7113 7.99576 8.0454C7.99576 9.50465 8.69363 10.9718 8.69363 10.9718C8.41342 11.1331 7.95082 11.6459 8.06713 12.5553C8.28389 14.2511 9.01877 14.6807 9.48666 14.7164C9.66509 16.2986 11.3661 18.3235 11.9609 18.6183V21.2618C10.6392 25.2272 0.0654297 22.5836 0.0654297 31.8361H31.7867C31.7867 22.5836 21.213 25.2272 19.8912 21.2618Z"
                    fill="#EBEBEB"
                  />
                </svg>
              </DivSvg>
              <InputField
                type="text"
                placeholder="John Smith"
                onChange={handleUsernameChange}
              />
            </RowDiv>
            {/* Fim do input de login */}
            {/* Input de senha */}
            <RowDiv>
              <DivSvg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 38 39"
                  fill="none"
                >
                  <path
                    d="M19.0256 0.878662C12.5822 0.878662 7.32344 5.59576 7.32344 11.3755V14.3746H3.97996C2.13268 14.3746 0.636475 15.7167 0.636475 17.3737V35.3684C0.636475 37.0254 2.13268 38.3675 3.97996 38.3675H34.0713C35.9186 38.3675 37.4148 37.0254 37.4148 35.3684V17.3737C37.4148 15.7167 35.9186 14.3746 34.0713 14.3746H30.7278V11.3755C30.7278 5.78457 25.7738 1.28139 19.6199 0.987028C19.4308 0.918716 19.2294 0.88199 19.0256 0.878662ZM19.0256 3.87777C23.6625 3.87777 27.3844 7.21627 27.3844 11.3755V14.3746H10.6669V11.3755C10.6669 7.21627 14.3888 3.87777 19.0256 3.87777Z"
                    fill="#EBEBEB"
                  />
                </svg>
              </DivSvg>
              <InputWithIcon>
                {/* verifica se o state é true ou false, se for true ele alterna para texto para a visualização, se for false deixa como password para não ver a senha */}
                <InputField
                  $haveIcon
                  type={showPassword ? "text" : "password"}
                  placeholder="******"
                  onChange={handlePasswordChange}
                />
                {/* Checka o state para alternar o icone de ver/ocultar senha */}
                <img
                  src={showPassword ? eyeIconOff : eyeIconOn}
                  alt=""
                  onClick={togglePasswordVisibilty}
                />
              </InputWithIcon>
            </RowDiv>
            {/* Fim do input de senha */}
          </ColumnDiv>
          {/* Input de lembrar de mim */}
          <RowDiv $startLeft>
            <RadioInput type="checkbox" />
            <MediumText>Lembrar de mim</MediumText>
          </RowDiv>
          {/* Fim do input de lembrar de mim */}
          {/* Botão e esqueceu a senha */}
          <ColumnDiv>
            <Button type="submit" $primary onClick={handleAcessClick}>
              Acessar
            </Button>
            <ForgotPassWordLink>
              Esqueceu a senha? <p> Clique aqui</p>
            </ForgotPassWordLink>
          </ColumnDiv>
        </StyledForm>
        {/* Fim do formulario */}
      </ColumnDiv>
      {/* fim do botão e esqueceu a senha */}
    </BgImg>
  );
}
