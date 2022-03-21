import "./Gastos.css";
import Data from "./Data";

const Gastos = (props) => {

  return (
    <div className="gasto-bloco">
      <div className="data">
        <Data dia={props.dia} />
        {/* {console.log('gastos.js', props.dia)} */}
      </div>
      <div className="descricao">
        <h2 className="titulo">{props.titulo}</h2>
        <div className="valor">R${props.valor}</div>
      </div>
    </div>
  );
};

export default Gastos;
