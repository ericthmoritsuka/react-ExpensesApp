import "./Data.css";

const Data = (props) => {
  const dia = props.dia.toLocaleString('pt-BR', { day: '2-digit' });
  const mes = props.dia.toLocaleString('pt-BR', { month: 'long' });
  const ano = props.dia.getFullYear();
  // console.log('data.js', props)


  return (
    <div className="caixa-data">
      <div className="mes">{mes}</div>
      <div className="dia">{dia}</div>
      <div className="ano">{ano}</div>
    </div>
  );
};

export default Data;
