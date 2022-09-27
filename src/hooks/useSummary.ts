import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";

export function useSummary(){
  const { transactions } = useContext(TransactionsContext);

  //reduce percorre um Array e vai reduzir a uma nova estrutura de dados
  //Neste caso vai ter [{income: 0, outcome:0 , total: 0}]
  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'Income'){
      acc.income += transaction.price;
      acc.total += transaction.price;
    } else {
      acc.outcome += transaction.price;
      acc.total -= transaction.price;
    }

    return acc;
  }, {
    income: 0,
    outcome: 0,
    total: 0,
  }
  );

  return summary;

}