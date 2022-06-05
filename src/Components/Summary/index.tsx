import { Container } from "./style";
import IncomeImg from "../../assets/income.svg";
import outComeImg from "../../assets/outcome.svg";
import TotalImg from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionContext";
import { useContext } from "react";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outComeImg} alt="Saídas" />
        </header>
        <strong>-R$200,00</strong>
      </div>
      <div className="total">
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="Entradas" />
        </header>
        <strong>R$800,00</strong>
      </div>
    </Container>
  );
}
