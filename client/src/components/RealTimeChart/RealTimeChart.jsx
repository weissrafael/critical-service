import React, {useEffect, useRef, useState} from 'react';
import Chartjs from 'chart.js';
import {colors} from "../../styles/styleGuide";
import {ChartContainer} from "./RealTimeChart.style";

const RealTimeChart = ({stock}) => {
  const [chartInstance, setChartInstance] = useState(null);
  const [speedReducer, setSpeedReducer] = useState(0);
  const [frameRate, setFrameRate] = useState(10);
  const [data, setData] = useState([]);
  const {symbol, companyName, basePrice, subscribed} = stock;
  const chartContainer = useRef(null);
  const price = Math.trunc(basePrice);

  const chartConfig = {
    type: 'line',
    data: {
      labels: ['60s', '55s', '50s', '45s', '40s', '35s', '30s', '25s', '20s', '15s', '10s', '5s', '0s'],
      datasets: [{
        label: symbol,
        backgroundColor: colors.byneBlue,
        borderColor: colors.byneBlue,
        data: data,
        fill: false,
      }]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: companyName
      },
      tooltips: {
        mode: 'index',
        intersect: false,
        enabled: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      scales: {
        x: {
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Month'
          }
        },
        y: {
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Value'
          }
        }
      }
    }
  };

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  const updateData = () => {
    const newData = [...data, price];
    if (newData.length > 20) {
      newData.shift();
    }
    setData(newData)
    if(chartInstance){
      chartInstance.data.datasets[0].data = newData;
      chartInstance.update();
    }
  }

  useEffect(() => {
    if(speedReducer <= frameRate){
      setSpeedReducer(speedReducer + 1)
    }
    if(speedReducer > frameRate){
      setSpeedReducer(0)
      updateData()
    }
  }, [price]);

  return (
    <ChartContainer>
      <canvas ref={chartContainer} />
    </ChartContainer>
  );
};

export default RealTimeChart;
