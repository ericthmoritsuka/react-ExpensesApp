import "./NovosGastos.css";
import Formulario from "./Formulario";
import React, { useState } from "react";

const NovosGastos = (props) => {
  const dadosHandler = (dadosRecebidos) => {
    const dados = {
      ...dadosRecebidos,
      id: Math.random().toString(),
    };
    props.onAdicionarDado(dados);
    setEstado(false);
  };

  const [estado, setEstado] = useState(false);
  const trueHandler = () => {
    setEstado(true);
  };
  const falseHandler = () => {
    setEstado(false);
  };

  return (
    <div className="bg-botao-novo">
      {!estado && (
        <button onClick={trueHandler} className="bt-novo">
          NOVA DESPESA
        </button>
      )}
      {estado && <Formulario onSalvar={dadosHandler} onChange={falseHandler}/>}
    </div>
  );
};

export default NovosGastos;
