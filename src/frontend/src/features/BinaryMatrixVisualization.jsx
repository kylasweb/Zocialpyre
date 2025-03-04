import { Canvas, useFrame, useThree, useGraph } from '@react-three/fiber'
import { OrbitControls, Sphere, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useEffect, useState } from 'react'
import { Canvas as Canvas2, useFrame as useFrame2 } from '@react-three/fiber'
import { OrbitControls as OrbitControls2, Text as Text2 } from '@react-three/drei'
import * as THREE2 from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
const Node = ({ position, data, onClick }) => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={data.isExtreme ? '#ff4444' : '#4444ff'}
        opacity={0.8}
        transparent
      />
      <Text
        position={[0, 0.7, 0]}
        fontSize={0.2}
        color="white">
        {data.username}
      </Text>
    </mesh>
  )
}

export const BinaryMatrixVisualization = () => {
  const [nodes, setNodes] = useState([])
  const [connections, setConnections] = useState([])

  useEffect(() => {
    // Fetch network data
    fetchNetworkData()
  }, [])

  const fetchNetworkData = async () => {
    try {
      const response = await fetch('/api/network/structure')
      const data = await response.json()
      setNodes(data.nodes)
      setConnections(data.connections)
    } catch (error) {
      console.error('Failed to fetch network data:', error)
    }
  }

  return (
    <div style={{ height: '80vh' }}>
      <Canvas camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {nodes.map((node) => (
          <Node
            key={node.id}
            position={node.position}
            data={node}
            onClick={() => console.log('Node clicked:', node)}
          />
        ))}
        {connections.map((connection, index) => (
          <line key={index}>
            <bufferGeometry
              attach="geometry"
              {...connection.geometry}
            />
            <lineBasicMaterial
              attach="material"
              color="#ffffff"
              linewidth={1}
              linecap="round"
              linejoin="round"
            />
          </line>
        ))}
      </Canvas>
    </div>
  )
}
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'

const Node = ({ position, data, onClick }) => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={data.isExtreme ? '#ff4444' : '#4444ff'}
        opacity={0.8}
        transparent
      />
      <Text
        position={[0, 0.7, 0]}
        fontSize={0.2}
        color="white">
        {data.username}
      </Text>
    </mesh>
  )
}

export const BinaryMatrixVisualization = () => {
  const [nodes, setNodes] = useState([])
  const [connections, setConnections] = useState([])

  useEffect(() => {
    // Fetch network data
    fetchNetworkData()
  }, [])

  const fetchNetworkData = async () => {
    try {
      const response = await fetch('/api/network/structure')
      const data = await response.json()
      setNodes(data.nodes)
      setConnections(data.connections)
    } catch (error) {
      console.error('Failed to fetch network data:', error)
    }
  }

  return (
    <div style={{ height: '80vh' }}>
      <Canvas camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {nodes.map((node) => (
          <Node
            key={node.id}
            position={node.position}
            data={node}
            onClick={() => console.log('Node clicked:', node)}
          />
        ))}
        {connections.map((connection, index) => (
          <line key={index}>
            <bufferGeometry
              attach="geometry"
              {...connection.geometry}
            />
            <lineBasicMaterial
              attach="material"
              color="#ffffff"
              linewidth={1}
              linecap="round"
              linejoin="round"
            />
          </line>
        ))}
      </Canvas>
    </div>
  )
}
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'

const Node = ({ position, data, onClick }) => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={data.isExtreme ? '#ff4444' : '#4444ff'}
        opacity={0.8}
        transparent
      />
      <Text
        position={[0, 0.7, 0]}
        fontSize={0.2}
        color="white">
        {data.username}
      </Text>
    </mesh>
  )
}

export const BinaryMatrixVisualization = () => {
  const [nodes, setNodes] = useState([])
  const [connections, setConnections] = useState([])

  useEffect(() => {
    // Fetch network data
    fetchNetworkData()
  }, [])

  const fetchNetworkData = async () => {
    try {
      const response = await fetch('/api/network/structure')
      const data = await response.json()
      setNodes(data.nodes)
      setConnections(data.connections)
    } catch (error) {
      console.error('Failed to fetch network data:', error)
    }
  }

  return (
    <div style={{ height: '80vh' }}>
      <Canvas camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {nodes.map((node) => (
          <Node
            key={node.id}
            position={node.position}
            data={node}
            onClick={() => console.log('Node clicked:', node)}
          />
        ))}
        {connections.map((connection, index) => (
          <line key={index}>
            <bufferGeometry
              attach="geometry"
              {...connection.geometry}
            />
            <lineBasicMaterial
              attach="material"
              color="#ffffff"
              linewidth={1}
              linecap="round"
              linejoin="round"
            />
          </line>
        ))}
      </Canvas>
    </div>
  )
}
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'

const Node = ({ position, data, onClick }) => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={data.isExtreme ? '#ff4444' : '#4444ff'}
        opacity={0.8}
        transparent
      />
      <Text
        position={[0, 0.7, 0]}
        fontSize={0.2}
        color="white">
        {data.username}
      </Text>
    </mesh>
  )
}

export const BinaryMatrixVisualization = () => {
  const [nodes, setNodes] = useState([])
  const [connections, setConnections] = useState([])

  useEffect(() => {
    // Fetch network data
    fetchNetworkData()
  }, [])

  const fetchNetworkData = async () => {
    try {
      const response = await fetch('/api/network/structure')
      const data = await response.json()
      setNodes(data.nodes)
      setConnections(data.connections)
    } catch (error) {
      console.error('Failed to fetch network data:', error)
    }
  }

  return (
    <div style={{ height: '80vh' }}>
      <Canvas camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {nodes.map((node) => (
          <Node
            key={node.id}
            position={node.position}
            data={node}
            onClick={() => console.log('Node clicked:', node)}
          />
        ))}
        {connections.map((connection, index) => (
          <line key={index}>
            <bufferGeometry
              attach="geometry"
              {...connection.geometry}
            />
            <lineBasicMaterial
              attach="material"
              color="#ffffff"
              linewidth={1}
              linecap="round"
              linejoin="round"
            />
          </line>
        ))}
      </Canvas>
    </div>
  )
}
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'

const Node = ({ position, data, onClick }) => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={data.isExtreme ? '#ff4444' : '#4444ff'}
        opacity={0.8}
        transparent
      />
      <Text
        position={[0, 0.7, 0]}
        fontSize={0.2}
        color="white">
        {data.username}
      </Text>
    </mesh>
  )
}

export const BinaryMatrixVisualization = () => {
  const [nodes, setNodes] = useState([])
  const [connections, setConnections] = useState([])

  useEffect(() => {
    // Fetch network data
    fetchNetworkData()
  }, [])

  const fetchNetworkData = async () => {
    try {
      const response = await fetch('/api/network/structure')
      const data = await response.json()
      setNodes(data.nodes)
      setConnections(data.connections)
    } catch (error) {
      console.error('Failed to fetch network data:', error)
    }
  }

  return (
    <div style={{ height: '80vh' }}>
      <Canvas camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {nodes.map((node) => (
          <Node
            key={node.id}
            position={node.position}
            data={node}
            onClick={() => console.log('Node clicked:', node)}
          />
        ))}
        {connections.map((connection, index) => (
          <line key={index}>
            <bufferGeometry
              attach="geometry"
              {...connection.geometry}
            />
            <lineBasicMaterial
              attach="material"
              color="#ffffff"
              linewidth={1}
              linecap="round"
              linejoin="round"
            />
          </line>
        ))}
      </Canvas>
    </div>
  )
}
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'

const Node = ({ position, data, onClick }) => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={data.isExtreme ? '#ff4444' : '#4444ff'}
        opacity={0.8}
        transparent
      />
      <Text
        position={[0, 0.7, 0]}
        fontSize={0.2}
        color="white">
        {data.username}
      </Text>
    </mesh>
  )
}

export const BinaryMatrixVisualization = () => {
  const [nodes, setNodes] = useState([])
  const [connections, setConnections] = useState([])

  useEffect(() => {
    // Fetch network data
    fetchNetworkData()
  }, [])

  const fetchNetworkData = async () => {
    try {
      const response = await fetch('/api/network/structure')
      const data = await response.json()
      setNodes(data.nodes)
      setConnections(data.connections)
    } catch (error) {
      console.error('Failed to fetch network data:', error)
    }
  }

  return (
    <div style={{ height: '80vh' }}>
      <Canvas camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {nodes.map((node) => (
          <Node
            key={node.id}
            position={node.position}
            data={node}
            onClick={() => console.log('Node clicked:', node)}
          />
        ))}
        {connections.map((connection, index) => (
          <line key={index}>
            <bufferGeometry
              attach="geometry"
              {...connection.geometry}
            />
            <lineBasicMaterial
              attach="material"
              color="#ffffff"
              linewidth={1}
              linecap="round"
              linejoin="round"
            />
          </line>
        ))}
      </Canvas>
    </div>
  )
}
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'

const Node = ({ position, data, onClick }) => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={data.isExtreme ? '#ff4444' : '#4444ff'}
        opacity={0.8}
        transparent
      />
      <Text
        position={[0, 0.7, 0]}
        fontSize={0.2}
        color="white">
        {data.username}
      </Text>
    </mesh>
  )
}

export const BinaryMatrixVisualization = () => {
  const [nodes, setNodes] = useState([])
  const [connections, setConnections] = useState([])

  useEffect(() => {
    // Fetch network data
    fetchNetworkData()
  }, [])

  const fetchNetworkData = async () => {
    try {
      const response = await fetch('/api/network/structure')
      const data = await response.json()
      setNodes(data.nodes)
      setConnections(data.connections)
    } catch (error) {
      console.error('Failed to fetch network data:', error)
    }
  }

  return (
    <div style={{ height: '80vh' }}>
      <Canvas camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {nodes.map((node) => (
          <Node
            key={node.id}
            position={node.position}
            data={node}
            onClick={() => console.log('Node clicked:', node)}
          />
        ))}
        {connections.map((connection, index) => (
          <line key={index}>
            <bufferGeometry
              attach="geometry"
              {...connection.geometry}
            />
            <lineBasicMaterial
              attach="material"
              color="#ffffff"
              linewidth={1}
              linecap="round"
              linejoin="round"
            />
          </line>
        ))}
      </Canvas>
    </div>
  )
}
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'

const Node = ({ position, data, onClick }) => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={data.isExtreme ? '#ff4444' : '#4444ff'}
        opacity={0.8}
        transparent
      />
      <Text
        position={[0, 0.7, 0]}
        fontSize={0.2}
        color="white">
        {data.username}
      </Text>
    </mesh>
  )
}

export const BinaryMatrixVisualization = () => {
  const [nodes, setNodes] = useState([])
  const [connections, setConnections] = useState([])

  useEffect(() => {
    // Fetch network data
    fetchNetworkData()
  }, [])

  const fetchNetworkData = async () => {
    try {
      const response = await fetch('/api/network/structure')
      const data = await response.json()
      setNodes(data.nodes)
      setConnections(data.connections)
    } catch (error) {
      console.error('Failed to fetch network data:', error)
    }
  }

  return (
    <div style={{ height: '80vh' }}>
      <Canvas camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {nodes.map((node) => (
          <Node
            key={node.id}
            position={node.position}
            data={node}
            onClick={() => console.log('Node clicked:', node)}
          />
        ))}
        {connections.map((connection, index) => (
          <line key={index}>
            <bufferGeometry
              attach="geometry"
              {...connection.geometry}
            />
            <lineBasicMaterial
              attach="material"
              color="#ffffff"
              linewidth={1}
              linecap="round"
              linejoin="round"
            />
          </line>
        ))}
      </Canvas>
    </div>
  )
}
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'

const Node = ({ position, data, onClick }) => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={data.isExtreme ? '#ff4444' : '#4444ff'}
        opacity={0.8}
        transparent
      />
      <Text
        position={[0, 0.7, 0]}
        fontSize={0.2}
        color="white">
        {data.username}
      </Text>
    </mesh>
  )
}

export const BinaryMatrixVisualization = () => {
  const [nodes, setNodes] = useState([])
  const [connections, setConnections] = useState([])

  useEffect(() => {
    // Fetch network data
    fetchNetworkData()
  }, [])

  const fetchNetworkData = async () => {
    try {
      const response = await fetch('/api/network/structure')
      const data = await response.json()
      setNodes(data.nodes)
      setConnections(data.connections)
    } catch (error) {
      console.error('Failed to fetch network data:', error)
    }
  }

  return (
    <div style={{ height: '80vh' }}>
      <Canvas camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {nodes.map((node) => (
          <Node
            key={node.id}
            position={node.position}
            data={node}
            onClick={() => console.log('Node clicked:', node)}
          />
        ))}
        {connections.map((connection, index) => (
          <line key={index}>
            <bufferGeometry
              attach="geometry"
              {...connection.geometry}
            />
            <lineBasicMaterial
              attach="material"
              color="#ffffff"
              linewidth={1}
              linecap="round"
              linejoin="round"
            />
          </line>
        ))}
      </Canvas>
    </div>
  )
}
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'

const Node = ({ position, data, onClick }) => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={data.isExtreme ? '#ff4444' : '#4444ff'}
        opacity={0.8}
        transparent
      />
      <Text
        position={[0, 0.7, 0]}
        fontSize={0.2}
        color="white">
        {data.username}
      </Text>
    </mesh>
  )
}

export const BinaryMatrixVisualization = () => {
  const [nodes, setNodes] = useState([])
  const [connections, setConnections] = useState([])

  useEffect(() => {
    // Fetch network data
    fetchNetworkData()
  }, [])

  const fetchNetworkData = async () => {
    try {
      const response = await fetch('/api/network/structure')
      const data = await response.json()
      setNodes(data.nodes)
      setConnections(data.connections)
    } catch (error) {
      console.error('Failed to fetch network data:', error)
    }
  }

  return (
    <div style={{ height: '80vh' }}>
      <Canvas camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {nodes.map((node) => (
          <Node
            key={node.id}
            position={node.position}
            data={node}
            onClick={() => console.log('Node clicked:', node)}
          />
        ))}
        {connections.map((connection, index) => (
          <line key={index}>
            <bufferGeometry
              attach="geometry"
              {...connection.geometry}
            />
            <lineBasicMaterial
              attach="material"
              color="#ffffff"
              linewidth={1}
              linecap="round"
              linejoin="round"
            />
          </line>
        ))}
      </Canvas>
    </div>
  )
}
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'

const Node = ({ position, data, onClick }) => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={data.isExtreme ? '#ff4444' : '#4444ff'}
        opacity={0.8}
        transparent
      />
      <Text
        position={[0, 0.7, 0]}
        fontSize={0.2}
        color="white">
        {data.username}
      </Text>
    </mesh>
  )
}

export const BinaryMatrixVisualization = () => {
  const [nodes, setNodes] = useState([])
  const [connections, setConnections] = useState([])

  useEffect(() => {
    // Fetch network data
    fetchNetworkData()
  }, [])

  const fetchNetworkData = async () => {
    try {
      const response = await fetch('/api/network/structure')
      const data = await response.json()
      setNodes(data.nodes)
      setConnections(data.connections)
    } catch (error) {
      console.error('Failed to fetch network data:', error)
    }
  }

  return (
    <div style={{ height: '80vh' }}>
      <Canvas camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {nodes.map((node) => (
          <Node
            key={node.id}
            position={node.position}
            data={node}
            onClick={() => console.log('Node clicked:', node)}
          />
        ))}
        {connections.map((connection, index) => (
          <line key={index}>
            <bufferGeometry
              attach="geometry"
              {...connection.geometry}
            />
            <lineBasicMaterial
              attach="material"
              color="#ffffff"
              linewidth={1}
              linecap="round"
              linejoin="round"
            />
          </line>
        ))}
      </Canvas>
    </div>
  )
}
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'

const Node = ({ position, data, onClick }) => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={data.isExtreme ? '#ff4444' : '#4444ff'}
        opacity={0.8}
        transparent
      />
      <Text
        position={[0, 0.7, 0]}
        fontSize={0.2}
        color="white">
        {data.username}
      </Text>
    </mesh>
  )
}

export const BinaryMatrixVisualization = () => {
  const [nodes, setNodes] = useState([])
  const [connections, setConnections] = useState([])

  useEffect(() => {
    // Fetch network data
    fetchNetworkData()
  }, [])

  const fetchNetworkData = async () => {
    try {
      const response = await fetch('/api/network/structure')
      const data = await response.json()
      setNodes(data.nodes)
      setConnections(data.connections)
    } catch (error) {
      console.error('Failed to fetch network data:', error)
    }
  }

  return (
    <div style={{ height: '80vh' }}>
      <Canvas camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {nodes.map((node) => (
          <Node
            key={node.id}
            position={node.position}
            data={node}
            onClick={() => console.log('Node clicked:', node)}
          />
        ))}
        {connections.map((connection, index) => (
          <line key={index}>
            <bufferGeometry
              attach="geometry"
              {...connection.geometry}
            />
            <lineBasicMaterial
              attach="material"
              color="#ffffff"
              linewidth={1}
              linecap="round"
              linejoin="round"
            />
          </line>
        ))}
      </Canvas>
    </div>
  )
}
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'

const Node = ({ position, data, onClick }) => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={data.isExtreme ? '#ff4444' : '#4444ff'}
        opacity={0.8}
        transparent
      />
      <Text
        position={[0, 0.7, 0]}
        fontSize={0.2}
        color="white">
        {data.username}
      </Text>
    </mesh>
  )
}

export const BinaryMatrixVisualization = () => {
  const [nodes, setNodes] = useState([])
  const [connections, setConnections] = useState([])

  useEffect(() => {
    // Fetch network data
    fetchNetworkData()
  }, [])

  const fetchNetworkData = async () => {
    try {
      const response = await fetch('/api/network/structure')
      const data = await response.json()
      setNodes(data.nodes)
      setConnections(data.connections)
    } catch (error) {
      console.error('Failed to fetch network data:', error)
    }
  }

  return (
    <div style={{ height: '80vh' }}>
      <Canvas camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {nodes.map((node) => (
          <Node
            key={node.id}
            position={node.position}
            data={node}
            onClick={() => console.log('Node clicked:', node)}
          />
        ))}
        {connections.map((connection, index) => (
          <line key={index}>
            <bufferGeometry
              attach="geometry"
              {...connection.geometry}
            />
            <lineBasicMaterial
              attach="material"
              color="#ffffff"
              linewidth={1}
              linecap="round"
              linejoin="round"
            />
          </line>
        ))}
      </Canvas>
    </div>
  )
}
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'

const Node = ({ position, data, onClick }) => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={data.isExtreme ? '#ff4444' : '#4444ff'}
        opacity={0.8}
        transparent
      />
      <Text
        position={[0, 0.7, 0]}
        fontSize={0.2}
        color="white">
        {data.username}
      </Text>
    </mesh>
  )
}

export const BinaryMatrixVisualization = () => {
  const [nodes, setNodes] = useState([])
  const [connections, setConnections] = useState([])

  useEffect(() => {
    // Fetch network data
    fetchNetworkData()
  }, [])

  const fetchNetworkData = async () => {
    try {
      const response = await fetch('/api/network/structure')
      const data = await response.json()
      setNodes(data.nodes)
      setConnections(data.connections)
    } catch (error) {
      console.error('Failed to fetch network data:', error)
    }
  }

  return (
    <div style={{ height: '80vh' }}>
      <Canvas camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {nodes.map((node) => (
          <Node
            key={node.id}
            position={node.position}
            data={node}
            onClick={() => console.log('Node clicked:', node)}
          />
        ))}
        {connections.map((connection, index) => (
          <line key={index}>
            <bufferGeometry
              attach="geometry"
              {...connection.geometry}
            />
            <lineBasicMaterial
              attach="material"
              color="#ffffff"
              linewidth={1}
              linecap="round"
              linejoin="round"
            />
          </line>
        ))}
      </Canvas>
    </div>
  )
}
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'

const Node = ({ position, data, onClick }) => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={data.isExtreme ? '#ff4444' : '#4444ff'}
        opacity={0.8}
        transparent
      />
      <Text
        position={[0, 0.7, 0]}
        fontSize={0.2}
        color="white">
        {data.username}
      </Text>
    </mesh>
  )
}

export const BinaryMatrixVisualization = () => {
  const [nodes, setNodes] = useState([])
  const [connections, setConnections] = useState([])

  useEffect(() => {
    // Fetch network data
    fetchNetworkData()
  }, [])

  const fetchNetworkData = async () => {
    try {
      const response = await fetch('/api/network/structure')
      const data = await response.json()
      setNodes(data.nodes)
      setConnections(data.connections)
    } catch (error) {
      console.error('Failed to fetch network data:', error)
    }
  }

  return (
    <div style={{ height: '80vh' }}>
      <Canvas camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {nodes.map((node) => (
          <Node
            key={node.id}
            position={node.position}
            data={node}
            onClick={() => console.log('Node clicked:', node)}
          />
        ))}
        {connections.map((connection, index) => (
          <line key={index}>
            <bufferGeometry
              attach="geometry"
              {...connection.geometry}
            />
            <lineBasicMaterial
              attach="material"
              color="#ffffff"
              linewidth={1}
              linecap="round"
              linejoin="round"
            />
          </line>
        ))}
      </Canvas>
    </div>
  )
}
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'

const Node = ({ position, data, onClick }) => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={data.isExtreme ? '#ff4444' : '#4444ff'}
        opacity={0.8}
        transparent
      />
      <Text
        position={[0, 0.7, 0]}
        fontSize={0.2}
        color="white">
        {data.username}
      </Text>
    </mesh>
  )
}

export const BinaryMatrixVisualization = () => {
  const [nodes, setNodes] = useState([])
  const [connections, setConnections] = useState([])

  useEffect(() => {
    // Fetch network data
    fetchNetworkData()
  }, [])

  const fetchNetworkData = async () => {
    try {
      const response = await fetch('/api/network/structure')
      const data = await response.json()
      setNodes(data.nodes)
      setConnections(data.connections)
    } catch (error) {
      console.error('Failed to fetch network data:', error)
    }
  }

  return (
    <div style={{ height: '80vh' }}>
      <Canvas camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {nodes.map((node) => (
          <Node
            key={node.id}
            position={node.position}
            data={node}
            onClick={() => console.log('Node clicked:', node)}
          />
        ))}
        {connections.map((connection, index) => (
          <line key={index}>
            <bufferGeometry
              attach="geometry"
              {...connection.geometry}
            />
            <lineBasicMaterial
              attach="material"
              color="#ffffff"
              linewidth={1}
              linecap="round"
              linejoin="round"
            />
          </line>
        ))}
      </Canvas>
    </div>
  )
}
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'

const Node = ({ position, data, onClick }) => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={data.isExtreme ? '#ff4444' : '#4444ff'}
        opacity={0.8}
        transparent
      />
      <Text
        position={[0, 0.7, 0]}
        fontSize={0.2}
        color="white">
        {data.username}
      </Text>
    </mesh>
  )
}

export const BinaryMatrixVisualization = () => {
  const [nodes, setNodes] = useState([])
  const [connections, setConnections] = useState([])

  useEffect(() => {
    // Fetch network data
    fetchNetworkData()
  }, [])

  const fetchNetworkData = async () => {
    try {
      const response = await fetch('/api/network/structure')
      const data = await response.json()
      setNodes(data.nodes)
      setConnections(data.connections)
    } catch (error) {
      console.error('Failed to fetch network data:', error)
    }
  }

  return (
    <div style={{ height: '80vh' }}>
      <Canvas camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {nodes.map((node) => (
          <Node
            key={node.id}
            position={node.position}
            data={node}
            onClick={() => console.log('Node clicked:', node)}
          />
        ))}
        {connections.map((connection, index) => (
          <line key={index}>
            <bufferGeometry
              attach="geometry"
              {...connection.geometry}
            />
            <lineBasicMaterial
              attach="material"
              color="#ffffff"
              linewidth={1}
              linecap="round"
              linejoin="round"
            />
          </line>
        ))}
      </Canvas>
    </div>
  )
}
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'

const Node = ({ position, data, onClick }) => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={data.isExtreme ? '#ff4444' : '#4444ff'}
        opacity={0.8}
        transparent
      />
      <Text
        position={[0, 0.7, 0]}
        fontSize={0.2}
        color="white">
        {data.username}
      </Text>
    </mesh>
  )
}

export const BinaryMatrixVisualization = () => {
  const [nodes, setNodes] = useState([])
  const [connections, setConnections] = useState([])

  useEffect(() => {
    // Fetch network data
    fetchNetworkData()
  }, [])

  const fetchNetworkData = async () => {
    try {
      const response = await fetch('/api/network/structure')
      const data = await response.json()
      setNodes(data.nodes)
      setConnections(data.connections)
    } catch (error) {
      console.error('Failed to fetch network data:', error)
    }
  }

  return (
    <div style={{ height: '80vh' }}>
      <Canvas camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {nodes.map((node) => (
          <Node
            key={node.id}
            position={node.position}
            data={node}
            onClick={() => console.log('Node clicked:', node)}
          />
        ))}
        {connections.map((connection, index) => (
          <line key={index}>
            <bufferGeometry
              attach="geometry"
              {...connection.geometry}
            />
            <lineBasicMaterial
              attach="material"
              color="#ffffff"
              linewidth={1}
              linecap="round"
              linejoin="round"
            />
          </line>
        ))}
      </Canvas>
    </div>
  )
}
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'

const Node = ({ position, data, onClick }) => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={data.isExtreme ? '#ff4444' : '#4444ff'}
        opacity={0.8}
        transparent
      />
      <Text
        position={[0, 0.7, 0]}
        fontSize={0.2}
        color="white">
        {data.username}
      </Text>
    </mesh>
  )
}

export const BinaryMatrixVisualization = () => {
  const [nodes, setNodes] = useState([])
  const [connections, setConnections] = useState([])

  useEffect(() => {
    // Fetch network data
    fetchNetworkData()
  }, [])

  const fetchNetworkData = async () => {
    try {
      const response = await fetch('/api/network/structure')
      const data = await response.json()
      setNodes(data.nodes)
      setConnections(data.connections)
    } catch (error) {
      console.error('Failed to fetch network data:', error)
    }
  }

  return (
    <div style={{ height: '80vh' }}>
      <Canvas camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {nodes.map((node) => (
          <Node
            key={node.id}
            position={node.position}
            data={node}
            onClick={() => console.log('Node clicked:', node)}
          />
        ))}
        {connections.map((connection, index) => (
          <line key={index}>
            <bufferGeometry
              attach="geometry"
              {...connection.geometry}
            />
            <lineBasicMaterial
              attach="material"
              color="#ffffff"
              linewidth={1}
              linecap="round"
              linejoin="round"
            />
          </line>
        ))}
      </Canvas>
    </div>
  )
}
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'

const Node = ({ position, data, onClick }) => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={data.isExtreme ? '#ff4444' : '#4444ff'}
        opacity={0.8}
        transparent
      />
      <Text
        position={[0, 0.7, 0]}
        fontSize={0.2}
        color="white">
        {data.username}
      </Text>
    </mesh>
  )
}

export const BinaryMatrixVisualization = () => {
  const [nodes, setNodes] = useState([])
  const [connections, setConnections] = useState([])

  useEffect(() => {
    // Fetch network data
    fetchNetworkData()
  }, [])

  const fetchNetworkData = async () => {
    try {
      const response = await fetch('/api/network/structure')
      const data = await response.json()
      setNodes(data.nodes)
      setConnections(data.connections)
    } catch (error) {
      console.error('Failed to fetch network data:', error)
    }
  }

  return (
    <div style={{ height: '80vh' }}>
      <Canvas camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {nodes.map((node) => (
          <Node
            key={node.id}
            position={node.position}
            data={node}
            onClick={() => console.log('Node clicked:', node)}
          />
        ))}
        {connections.map((connection, index) => (
          <line key={index}>
            <bufferGeometry
              attach="geometry"
              {...connection.geometry}
            />
            <lineBasicMaterial
              attach="material"
              color="#ffffff"
              linewidth={1}
              linecap="round"
              linejoin="round"
            />
          </line>
        ))}
      </Canvas>
    </div>
  )
}
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'

const Node = ({ position, data, onClick }) => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={data.isExtreme ? '#ff4444' : '#4444ff'}
        opacity={0.8}
        transparent
      />
      <Text
        position={[0, 0.7, 0]}
        fontSize={0.2}
        color="white">
        {data.username}
      </Text>
    </mesh>
  )
}

export const BinaryMatrixVisualization = () => {
  const [nodes, setNodes] = useState([])
  const [connections, setConnections] = useState([])

  useEffect(() => {
    // Fetch network data
    fetchNetworkData()
  }, [])

  const fetchNetworkData = async () => {
    try {
      const response = await fetch('/api/network/structure')
      const data = await response.json()
      setNodes(data.nodes)
      setConnections(data.connections)
    } catch (error) {
      console.error('Failed to fetch network data:', error)
    }
  }

  return (
    <div style={{ height: '80vh' }}>
      <Canvas camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {nodes.map((node) => (
          <Node
            key={node.id}
            position={node.position}
            data={node}
            onClick={() => console.log('Node clicked:', node)}
          />
        ))}
        {connections.map((connection, index) => (
          <line key={index}>
            <bufferGeometry
              attach="geometry"
              {...connection.geometry}
            />
            <lineBasicMaterial
              attach="material"
              color="#ffffff"
              linewidth={1}
              linecap="round"
              linejoin="round"
            />
          </line>
        ))}
      </Canvas>
    </div>
  )
}
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'

const Node = ({ position, data, onClick }) => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={data.isExtreme ? '#ff4444' : '#4444ff'}
        opacity={0.8}
        transparent
      />
      <Text
        position={[0, 0.7, 0]}
        fontSize={0.2}
        color="white">
        {data.username}
      </Text>
    </mesh>
  )
}

export const BinaryMatrixVisualization = () => {
  const [nodes, setNodes] = useState([])
  const [connections, setConnections] = useState([])

  useEffect(() => {
    // Fetch network data
    fetchNetworkData()
  }, [])

  const fetchNetworkData = async () => {
    try {
      const response = await fetch('/api/network/structure')
      const data = await response.json()
      setNodes(data.nodes)
      setConnections(data.connections)
    } catch (error) {
      console.error('Failed to fetch network data:', error)
    }
  }

  return (
    <div style={{ height: '80vh' }}>
      <Canvas camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {nodes.map((node) => (
          <Node
            key={node.id}
            position={node.position}
            data={node}
            onClick={() => console.log('Node clicked:', node)}
          />
        ))}
        {connections.map((connection, index) => (
          <line key={index}>
            <bufferGeometry
              attach="geometry"
              {...connection.geometry}
            />
            <lineBasicMaterial
              attach="material"
              color="#ffffff"
              linewidth={1}
              linecap="round"
              linejoin="round"
            />
          </line>
        ))}
      </Canvas>
    </div>
  )
}
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'

const Node = ({ position, data, onClick }) => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={data.isExtreme ? '#ff4444' : '#4444ff'}
        opacity={0.8}
        transparent
      />
      <Text
        position={[0, 0.7, 0]}
        fontSize={0.2}
        color="white">
        {data.username}
      </Text>
    </mesh>
  )
}

export const BinaryMatrixVisualization = () => {
  const [nodes, setNodes] = useState([])
  const [connections, setConnections] = useState([])

  useEffect(() => {
    // Fetch network data
    fetchNetworkData()
  }, [])

  const fetchNetworkData = async () => {
    try {
      const response = await fetch('/api/network/structure')
      const data = await response.json()
      setNodes(data.nodes)
      setConnections(data.connections)
    } catch (error) {
      console.error('Failed to fetch network data:', error)
    }
  }

  return (
    <div style={{ height: '80vh' }}>
      <Canvas camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {nodes.map((node) => (
          <Node
            key={node.id}
            position={node.position}
            data={node}
            onClick={() => console.log('Node clicked:', node)}
          />
        ))}
        {connections.map((connection, index) => (
          <line key={index}>
            <bufferGeometry
              attach="geometry"
              {...connection.geometry}
            />
            <lineBasicMaterial
              attach="material"
              color="#ffffff"
              linewidth={1}
              linecap="round"
              linejoin="round"
            />
          </line>
        ))}
      </Canvas>
    </div>
  )
}
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'

const Node = ({ position, data, onClick }) => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={data.isExtreme ? '#ff4444' : '#4444ff'}
        opacity={0.8}
        transparent
      />
      <Text
        position={[0, 0.7, 0]}
        fontSize={0.2}
        color="white">
        {data.username}
      </Text>
    </mesh>
  )
}

export const BinaryMatrixVisualization = () => {
  const [nodes, setNodes] = useState([])
  const [connections, setConnections] = useState([])

  useEffect(() => {
    // Fetch network data
    fetchNetworkData()
  }, [])

  const fetchNetworkData = async () => {
    try {
      const response = await fetch('/api/network/structure')
      const data = await response.json()
      setNodes(data.nodes)
      setConnections(data.connections)
    } catch (error) {
      console.error('Failed to fetch network data:', error)
    }
  }

  return (
    <div style={{ height: '80vh' }}>
      <Canvas camera={{ position: