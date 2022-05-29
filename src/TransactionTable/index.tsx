import { Container } from "./styles";
export function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de sistemas</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>21/05/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$1.200</td>
            <td>Casa</td>
            <td>21/05/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
