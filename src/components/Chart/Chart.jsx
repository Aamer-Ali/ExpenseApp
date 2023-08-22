import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  const valueArray = dataPoints.map((data) => data.value);
  const maxValue = Math.max(...valueArray);

  return (
    <section className="chart">
      {dataPoints.map((data) => (
        <ChartBar
          key={data.label}
          label={data.label}
          value={data.value}
          maxValue={maxValue}
        />
      ))}
    </section>
  );
};

export default Chart;
