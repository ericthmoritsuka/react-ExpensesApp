import React, { useState } from "react";
import Gastos from "./Gastos";
import Filtro from "./Filtro";
import GraficoDeGastos from "./GraficoDeGastos";
import "./LeitorGastos.css";

const LeitorGastos = (props) => {
  const [ano, setAno] = useState("2022");
  const filtroChangeHandler = (anoSelecionado) => {
    setAno(anoSelecionado);
  };

  const itensFiltrados = props.lista.filter((gastos) => {
    return gastos.dia.getFullYear().toString() === ano;
  });

  let displayItem = <p className="mensagem-vazio">Não há gastos no ano selecionado.</p>;
  if (itensFiltrados.length > 0) {
    displayItem = itensFiltrados.map((gasto) => (
      <Gastos
        key={gasto.id}
        titulo={gasto.titulo}
        valor={gasto.valor}
        dia={gasto.dia}
      />
    ));
  }

  return (
    <div>
      <div>
        <Filtro selecionado={ano} onSelecionaFiltro={filtroChangeHandler} />
      </div>
      <div className="divisoria">
        <GraficoDeGastos expenses={itensFiltrados} />
        {displayItem}
      </div>
    </div>
  );
};

export default LeitorGastos;
