import React, { useEffect, useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { ResponsiveNetwork } from '@nivo/network';

const BinaryMatrix = () => {
  const [networkData, setNetworkData] = useState({
    nodes: [],
    links: []
  });

  // Function to generate binary tree data structure
  const generateBinaryTreeData = (levels = 10) => {
    const nodes = [];
    const links = [];
    let nodeId = 0;

    const createNode = (level, position, parentId) => {
      if (level >= levels) return null;

      const node = {
        id: `node-${nodeId}`,
        height: 1,
        size: level === 0 ? 24 : 16,
        color: level === 0 ? '#ff6b6b' : '#4dabf7',
        data: {
          level,
          active: Math.random() > 0.3
        }
      };

      nodes.push(node);

      if (parentId !== null) {
        links.push({
          source: parentId,
          target: node.id,
          distance: 50
        });
      }

      const currentId = node.id;
      nodeId++;

      // Create left and right children
      createNode(level + 1, position * 2, currentId);
      createNode(level + 1, position * 2 + 1, currentId);

      return node;
    };

    createNode(0, 0, null);

    return { nodes, links };
  };

  useEffect(() => {
    // Initialize with static data
    setNetworkData(generateBinaryTreeData());

    // Simulate real-time updates
    const interval = setInterval(() => {
      setNetworkData(generateBinaryTreeData());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Paper sx={{ p: 2, height: '600px' }}>
      <Typography variant="h6" gutterBottom>
        Binary Matrix Network
      </Typography>
      <Box sx={{ height: '90%' }}>
        <ResponsiveNetwork
          data={networkData}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          linkDistance={e => e.distance}
          centeringStrength={0.3}
          repulsivity={6}
          nodeSize={n => n.size}
          activeNodeSize={n => n.size * 1.2}
          nodeColor={n => n.color}
          nodeBorderWidth={1}
          nodeBorderColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
          linkThickness={1}
          linkBlendMode="multiply"
          motionConfig="gentle"
        />
      </Box>
    </Paper>
  );
};

export default BinaryMatrix;