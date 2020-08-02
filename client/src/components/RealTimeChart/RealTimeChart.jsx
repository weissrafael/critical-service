import React, {useEffect, useRef, useState} from 'react';
import Chartjs from 'chart.js';
import {colors} from "../../styles/styleGuide";

const RealTimeChart = ({symbol, companyName, basePrice}) => {
  const [chartInstance, setChartInstance] = useState(null);
  const [data, setData] = useState([]);
  const chartContainer = useRef(null);
  const price = Math.trunc(basePrice);

  const chartConfig = {
    type: 'line',
    data: {
      labels: ['60s', '55s', '50s', '45s', '40s', '35s', '30s', '25s', '20s', '15s', '10s', '5s', '0s'],
      datasets: [{
        backgroundColor: colors.positive,
        borderColor: colors.positive,
        data: data,
        fill: false,
        pointRadius: 0,
      }]
    },
    options: {
      animation: {
        easing: 'easeOutExpo',
        duration: 200
      },
      responsive: true,
      title: {
        display: false,
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
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          }
        }],
        yAxes: [{
          gridLines: {
            display: false
          }
        }]
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
    const first = newData[0];
    const last = newData[newData.length - 1];
    let color = colors.positive;
    if (newData.length > 20) {
      newData.shift();
    }
    if(last < first) {
      color = colors.negative;
    }
    setData(newData)
    if(chartInstance){
      chartInstance.data.datasets[0] = {
        backgroundColor: color,
        borderColor: color,
        data: newData,
        fill: false,
        pointRadius: 0,
      };
      chartInstance.update();
    }
  }

  useEffect(() => {
    updateData()
  }, [price]);

  return <canvas ref={chartContainer} />;
};

export default RealTimeChart;
