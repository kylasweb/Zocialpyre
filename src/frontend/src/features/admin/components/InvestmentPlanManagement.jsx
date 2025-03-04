import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { Add, Edit, Delete } from '@mui/icons-material';

const mockPlans = [
  {
    id: 1,
    name: 'Starter Plan',
    minInvestment: 100,
    maxInvestment: 1000,
    duration: 30,
    roi: 10,
    referralBonus: 5,
  },
  {
    id: 2,
    name: 'Growth Plan',
    minInvestment: 1000,
    maxInvestment: 5000,
    duration: 60,
    roi: 15,
    referralBonus: 7,
  },
];

export const InvestmentPlanManagement = () => {
  const [plans, setPlans] = useState(mockPlans);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingPlan, setEditingPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    minInvestment: '',
    maxInvestment: '',
    duration: '',
    roi: '',
    referralBonus: '',
  });

  const handleOpenDialog = (plan = null) => {
    if (plan) {
      setEditingPlan(plan);
      setFormData(plan);
    } else {
      setEditingPlan(null);
      setFormData({
        name: '',
        minInvestment: '',
        maxInvestment: '',
        duration: '',
        roi: '',
        referralBonus: '',
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingPlan(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (editingPlan) {
      setPlans(plans.map((p) => (p.id === editingPlan.id ? { ...formData, id: p.id } : p)));
    } else {
      setPlans([...plans, { ...formData, id: plans.length + 1 }]);
    }
    handleCloseDialog();
  };

  const handleDelete = (id) => {
    setPlans(plans.filter((plan) => plan.id !== id));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h5">Investment Plans</Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => handleOpenDialog()}
        >
          Add New Plan
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Plan Name</TableCell>
              <TableCell align="right">Min Investment</TableCell>
              <TableCell align="right">Max Investment</TableCell>
              <TableCell align="right">Duration (Days)</TableCell>
              <TableCell align="right">ROI (%)</TableCell>
              <TableCell align="right">Referral Bonus (%)</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {plans.map((plan) => (
              <TableRow key={plan.id}>
                <TableCell>{plan.name}</TableCell>
                <TableCell align="right">${plan.minInvestment}</TableCell>
                <TableCell align="right">${plan.maxInvestment}</TableCell>
                <TableCell align="right">{plan.duration}</TableCell>
                <TableCell align="right">{plan.roi}%</TableCell>
                <TableCell align="right">{plan.referralBonus}%</TableCell>
                <TableCell align="center">
                  <IconButton
                    color="primary"
                    onClick={() => handleOpenDialog(plan)}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => handleDelete(plan.id)}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingPlan ? 'Edit Investment Plan' : 'Add New Investment Plan'}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Plan Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Minimum Investment"
                name="minInvestment"
                type="number"
                value={formData.minInvestment}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Maximum Investment"
                name="maxInvestment"
                type="number"
                value={formData.maxInvestment}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Duration (Days)"
                name="duration"
                type="number"
                value={formData.duration}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="ROI (%)"
                name="roi"
                type="number"
                value={formData.roi}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Referral Bonus (%)"
                name="referralBonus"
                type="number"
                value={formData.referralBonus}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>
            {editingPlan ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};