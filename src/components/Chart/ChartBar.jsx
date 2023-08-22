import "./ChartBar.css";

const ChartBar = ({ label, value, maxValue }) => {
  //Calculate filled style percentage

  let expensesChartFilledHeight = "0%";

  if (maxValue > 0) {
    expensesChartFilledHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <section className="chart-bar">
      <section className="chart-bar__inner">
        <section
          className="chart-bar__fill"
          style={{ height: expensesChartFilledHeight }}
        ></section>
      </section>
      <section className="chart-bar__label">{label}</section>
    </section>
  );
};

export default ChartBar;
