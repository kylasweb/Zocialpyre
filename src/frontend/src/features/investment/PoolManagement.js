import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { DataTable, Button } from '../../components/ui';

export const PoolManagement = () => {
  const { api } = useAuth();
  const [pools, setPools] = useState([]);

  useEffect(() => {
    api.get('/investment/pools')
      .then(res => setPools(res.data))
      .catch(console.error);
  }, []);

  const columns = [
    { header: 'Pool Name', accessor: 'name' },
    { header: 'Total Assets', accessor: 'total_assets' },
    { header: 'Active Investors', accessor: 'investor_count' },
    { header: 'Status', accessor: 'status' },
    {
      header: 'Actions',
      accessor: 'id',
      cell: (id) => (
        <div className="flex gap-2">
          <Button size="sm" variant="outline">Edit</Button>
          <Button size="sm" variant="danger">Delete</Button>
        </div>
      )
    }
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow mt-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Investment Pools</h3>
        <Button onClick={() => console.log('Create new pool')}>+ New Pool</Button>
      </div>
      <DataTable
        columns={columns}
        data={pools}
        pagination
        pageSize={5}
      />
    </div>
  );
};