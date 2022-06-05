import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Container } from "./styles";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createAt: string;
}

export function TransactionTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    api.get("/transactions").then((response) => setTransactions(response.data.transactions));
  }, []);

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
          {transactions.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td className={item.type}>
                  {item.type === "withdraw" ? "- " : ""}
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(item.amount)}
                </td>
                <td>{item.category}</td>
                <td>{new Intl.DateTimeFormat("pt-BR").format(new Date(item.createAt))}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
