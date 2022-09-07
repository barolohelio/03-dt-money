import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import logImg from '../../assets/logo.svg';

export function Header(){
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logImg} alt="" />

        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}