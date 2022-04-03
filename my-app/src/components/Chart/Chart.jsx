import ChartBar from './ChartBar';
import './Chart.css';

export default function Chart(props) {
  const dataPointValues = props.dataPoints.map(d => d.value);
  const totalMaximum = Math.max(...dataPointValues);

  return <div className="chart">
    {props.dataPoints.map(d => (
      <ChartBar
        key={d.label}
        value={d.value}
        maxValue={totalMaximum}
        label={d.label}
      />
    ))}
  </div>
}