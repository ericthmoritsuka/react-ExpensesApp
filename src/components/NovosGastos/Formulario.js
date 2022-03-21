import "./Formulario.css";
import React, { useState } from "react";

const Formulario = (props) => {
  const [titulo, setTitulo] = useState("");
  const [valor, setValor] = useState("");
  const [dia, setDia] = useState("");

  const tituloChangeHandler = (event) => {
    setTitulo(event.target.value);
  };
  const valorChangeHandler = (event) => {
    setValor(event.target.value);
  };
  const diaChangeHandler = (event) => {
    setDia(event.target.value);
  };

  function adicionaHoras(data, intHoras) {
    var mlSegundos = data.getTime();
    var addmlSegundos = intHoras * 60 * 60 * 1000;
    var novaData = new Date(mlSegundos + addmlSegundos);

    return novaData;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const gastos = {
      titulo: titulo,
      valor: +valor,
      dia: adicionaHoras(new Date(dia), 3),
    };

    props.onSalvar(gastos);

    setTitulo("");
    setValor("");
    setDia("");
  };

  return (
    <form onSubmit={submitHandler} className="formulario">
      <div className="bg-formulario">
        <div className="bloco-input add-titulo">
          <label>Título</label>
          <input type="text" onChange={tituloChangeHandler} value={titulo} />
        </div>
        <div className="bloco-input add-valor">
          <label>Valor</label>
          <input
            type="number"
            onChange={valorChangeHandler}
            value={valor}
            min="0.1"
            step="0.1"
          />
        </div>
        <div className="bloco-input add-data">
          <label>Data</label>
          <input
            type="date"
            onChange={diaChangeHandler}
            value={dia}
            min="2022-01-01"
            max="2024-12-31"
          ></input>
        </div>
        <div className="bloco-bt">
          <button
            type="button"
            onClick={props.onChange}
            className="bt-adicionar-cancelar"
          >
            Cancelar
          </button>
          <button type="submit" className="bt-adicionar">
            Adicionar
          </button>
        </div>
      </div>
    </form>
  );
};

export default Formulario;
