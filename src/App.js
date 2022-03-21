import "./App.css";
import LeitorGastos from "./components/Expenses/LeitorGastos";
import NovosGastos from "./components/NovosGastos/NovosGastos";
import React, { useState } from "react";

const listaInicial = [
  {id: 'g1', titulo: "Exemplo1", valor: 190.64, dia: new Date(2022, 1, 21) },
  {id: 'g2', titulo: "Exemplo2", valor: 249.32, dia: new Date(2022, 1, 18) },
  {id: 'g3', titulo: "Exemplo3", valor: 203.12, dia: new Date(2022, 1, 13) },
  {id: 'g4', titulo: "Exemplo4", valor: 201.33, dia: new Date(2022, 2, 2) },
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
