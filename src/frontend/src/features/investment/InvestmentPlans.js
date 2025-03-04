import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { DataTable, Button } from '../../components/ui';

export const InvestmentPlans = () => {
  const { api } = useAuth();
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    api.get('/investment/plans')
      .then(res => setPlans(res.data))
      .catch(console.error);
  }, []);

  const columns = [
    { header: 'Plan Name', accessor: 'name' },
    { header: 'ROI %', accessor: 'roi' },
    { header: 'Duration', accessor: 'duration' },
    { header: 'Min Investment', accessor: 'min_amount' },
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
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Investment Plans</h3>
        <Button onClick={() => console.log('Add new plan')}>+ New Plan</Button>
      </div>
      <DataTable
        columns={columns}
        data={plans}
        pagination
        pageSize={5}
      />
    </div>
  );
};