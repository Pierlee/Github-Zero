import { useState } from "react";
import logoImg from '../../images/github-img.png'
import * as S from "./style";
import Button from "../../Components/Button";
import Input from "../../Components/Input";

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <S.Container>
      <S.Header>
        <img src={logoImg} alt="" />
      </S.Header>
      <S.Form>
        <S.FormTitle>
          Sign in
        </S.FormTitle>
        <Input
          placeholder='E-mail'
          type='email'
          focus={true}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          placeholder='Senha'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <S.ButtonControllers>
          <Button type={'submit'}>Entrar</Button>
          <S.Paragrapher><p>ou</p></S.Paragrapher>
          <Button type={'button'}>Continuar com Github</Button>
        </S.ButtonControllers>
        
      </S.Form>
    </S.Container>
  )
}
