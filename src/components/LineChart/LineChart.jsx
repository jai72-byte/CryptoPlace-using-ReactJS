import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const LineChart = ({ historialdata }) => {
  const [data, setdata] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let datacopy = [["Date", "Prices"]];
    if (historialdata.prices) {
      historialdata.prices.map((item) => {
        datacopy.push([
          `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
          item[1],
        ]);
      });
      setdata(datacopy);
    }
  }, [historialdata]);

  return <Chart chartType="LineChart" data={data} height="100%" legentToggle />;
};

export default LineChart;
