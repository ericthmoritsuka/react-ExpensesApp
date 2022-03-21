import "./App.css";
import LeitorGastos from "./components/Expenses/LeitorGastos";
import NovosGastos from "./components/NovosGastos/NovosGastos";
import React, { useState } from "react";

const listaInicial = [
  {id: 'g1', titulo: "Estácio", valor: 190.64, dia: new Date(2022, 1, 21) },
  {id: 'g2', titulo: "Hapvida", valor: 249.32, dia: new Date(2022, 1, 18) },
  {id: 'g3', titulo: "Nubank", valor: 203.12, dia: new Date(2022, 1, 13) },
  {id: 'g4', titulo: "Supermercado", valor: 201.33, dia: new Date(2022, 2, 2) },
];

function App() {
  const [listaDeGastos, setLista] = useState(listaInicial);

  const adicionarHandler = (dadosAdicionados) => {
    setLista((prevListaDeGastos) => {
      return [dadosAdicionados, ...prevListaDeGastos];
    });
  };
  
  return (
    <div>
      <NovosGastos onAdicionarDado={adicionarHandler} />;
      <LeitorGastos lista={listaDeGastos} />;
    </div>
  );
}

export default App;
