import * as React from "react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

interface AreaChartProps {
  data: {
    name: string
    value: number
  }[]
  className?: string
}

export function AreaChart({ data, className }: AreaChartProps) {
  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        fill: true,
        label: "Value",
        data: data.map(item => item.value),
        borderColor: "rgb(249, 115, 22)",
        backgroundColor: "rgba(249, 115, 22, 0.1)",
        tension: 0.4,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#1f2937",
        titleColor: "#f3f4f6",
        bodyColor: "#f3f4f6",
        borderColor: "#374151",
        borderWidth: 1,
        padding: 12,
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: "#9ca3af",
        },
      },
      y: {
        grid: {
          color: "#1f2937",
          drawBorder: false,
        },
        ticks: {
          color: "#9ca3af",
          padding: 10,
        },
      },
    },
  }

  return (
    <div className={className}>
      <Line data={chartData} options={options} />
    </div>
  )
} 