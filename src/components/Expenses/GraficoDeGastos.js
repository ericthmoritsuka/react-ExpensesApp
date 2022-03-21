import Grafico from '../Graficos/Grafico';

const GraficoDeGastos = (props) => {
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Fev', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Abr', value: 0 },
    { label: 'Maio', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Ago', value: 0 },
    { label: 'Set', value: 0 },
    { label: 'Out', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dez', value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.dia.getMonth(); // starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.valor;
  }

  return <Grafico dataPoints={chartDataPoints} />;
};

export default GraficoDeGastos;