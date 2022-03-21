import "./Filtro.css";

const Filtro = (props) => {
  const anoChangeHandler = (event) => {
    props.onSelecionaFiltro(event.target.value);
  };

  return (
    <div className="bg-filtro">
      <div className="filtro">
        <label>Filtrar por Ano:</label>
        <select value={props.selecionado} onChange={anoChangeHandler}>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>
  );
};

export default Filtro;
