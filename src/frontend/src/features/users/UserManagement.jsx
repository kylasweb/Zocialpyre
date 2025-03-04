import { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { toast } from 'react-hot-toast'

export const UserManagement = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedUsers, setSelectedUsers] = useState([])

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'sponsorId', headerName: 'Sponsor ID', width: 130 },
    { field: 'username', headerName: 'Username', width: 130 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'role', headerName: 'Role', width: 130 },
    { field: 'status', headerName: 'Status', width: 130 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <div className="flex gap-2">
          <button onClick={() => handleEdit(params.row)}>Edit</button>
          <button onClick={() => handleSuspend(params.row.id)}>Suspend</button>
        </div>
      ),
    },
  ]

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/admin/users')
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      toast.error('Failed to fetch users')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">User Management</h2>
        <div className="flex gap-2">
          <button className="btn-primary">Add User</button>
          <button className="btn-secondary">Export Data</button>
        </div>
      </div>

      <DataGrid
        rows={users}
        columns={columns}
        pageSize={10}
        loading={loading}
        checkboxSelection
        onSelectionModelChange={(newSelection) => {
          setSelectedUsers(newSelection)
        }}
      />
    </div>
  )
}