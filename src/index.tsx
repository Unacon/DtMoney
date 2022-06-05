import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createServer, Model } from "miragejs";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelancer do WebSite",
          type: "deposit",
          category: "Dev",
          amount: 6000,
          createAt: new Date(),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "Casa",
          amount: 1100,
          createAt: new Date("2022-06-01 11:00"),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", { ...data, createAt: new Date() });
    });
  },
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
