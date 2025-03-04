import { Network } from '@visx/network'
import { hierarchy } from '@visx/hierarchy'

const TeamNetwork = ({ data }) => {
  const { width, height } = useViewportSize()
  
  const tree = hierarchy(data, d => d.children)
  const network = treeToNetwork(tree)

  return (
    <Network
      width={width}
      height={height * 0.6}
      nodes={network.nodes}
      links={network.links}
      nodeComponent={({ node }) => (
        <g transform={`translate(${node.x}, ${node.y})`}>
          <rect width={40} height={40} fill="#4f46e5" />
          <text fill="white" fontSize={10} textAnchor="middle" dy="1.3em">
            {node.data.name}
          </text>
        </g>
      )}
    />
  )
}