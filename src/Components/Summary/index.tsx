import { useTransaction } from "../../hooks/useTransaction";
import { Container } from "./style";
import IncomeImg from "../../assets/income.svg";
import outComeImg from "../../assets/outcome.svg";
import TotalImg from "../../assets/total.svg";

export function Summary() {
  const { transactions } = useTransaction();
  let amountEntrada: number = 0;
  let amountSaida: number = 0;

  /*
  transactions.forEach((item) => {
    if (item.type === "deposit") {
      amountEntrada += item.amount;
    } else if (item.type === "withdraw") {
      amountSaida += item.amount;
    }
  });
  */

  const summary = transactions.reduce(
    (acc, transactions) => {
      if (transactions.type === "deposit") {
        acc.deposits += transactions.amount;
        acc.total += transactions.amount;
      } else if (transactions.type === "withdraw") {
        acc.withdraw += transactions.amount;
        acc.total -= transactions.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraw: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outComeImg} alt="Saídas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraw)}
        </strong>
      </div>
      <div className="total">
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
