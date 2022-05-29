import { Container } from "./style";
import IncomeImg from "../assets/income.svg";
import TotalImg from "../assets/total.svg";

export function Summary() {
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
          <img src={IncomeImg} alt="Entradas" />
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
