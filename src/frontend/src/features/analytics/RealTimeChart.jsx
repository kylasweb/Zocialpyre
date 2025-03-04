import { AnimatedLineSeries } from '@visx/xychart'
// Update usage in chart configuration
<AnimatedLineSeries dataKey="value" data={data} />
import { scaleTime, scaleLinear } from '@visx/scale'

export const RealTimeChart = ({ data, width = 800, height = 400 }) => {
  const xScale = scaleTime({
    domain: [new Date(data[0].time), new Date(data[data.length - 1].time)],
    range: [0, width]
  })

  const yScale = scaleLinear({
    domain: [0, Math.max(...data.map(d => d.value))],
    range: [height, 0]
  })

  return (
    <svg width={width} height={height}>
      <Line
        data={data}
        x={d => xScale(new Date(d.time))}
        y={d => yScale(d.value)}
        stroke="#8884d8"
        strokeWidth={2}
      />
    </svg>
  )
}