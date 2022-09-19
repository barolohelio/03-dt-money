import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { Transactions } from "../../pages/Transactions";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./style";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      {/* 
          Portals fornece uma forma elegante de renderizar um elemento 
          filho dentro de um nó DOM que existe fora da hierarquia do componente 
          pai.
      */}
      {/**  O primeiro argumento (child) é qualquer elemento filho React
       *  renderizável, como um elemento, string ou fragmento.
       *  O segundo argumento (container) é um elemento DOM.
       */}
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton >
          <X size={24}/>
        </CloseButton>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <TransactionType>
            <TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>

            <TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">
            Cadastrar
          </button>
        </form>

      </Content>
    </Dialog.Portal>
  );
}
