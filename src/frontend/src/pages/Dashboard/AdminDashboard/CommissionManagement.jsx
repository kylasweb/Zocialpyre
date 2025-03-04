import React, { useState } from 'react';
import { Row, Col, Card, CardBody, Table, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

const CommissionManagement = () => {
  const [modal, setModal] = useState(false);
  const [commissions, setCommissions] = useState([
    { id: 1, name: 'Direct Referral', percentage: 10, level: 1, status: 'Active' },
    { id: 2, name: 'Binary Bonus', percentage: 5, level: 2, status: 'Active' },
    { id: 3, name: 'Leadership Bonus', percentage: 3, level: 3, status: 'Active' }
  ]);
  const [newCommission, setNewCommission] = useState({ name: '', percentage: 0, level: 1, status: 'Active' });

  const toggle = () => setModal(!modal);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCommission(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = commissions.length + 1;
    setCommissions(prev => [...prev, { ...newCommission, id }]);
    setNewCommission({ name: '', percentage: 0, level: 1, status: 'Active' });
    toggle();
  };

  return (
    <div className="commission-management">
      <Row className="mb-4">
        <Col lg={12} className="d-flex justify-content-between align-items-center">
          <h4>Commission Management</h4>
          <Button color="primary" onClick={toggle}>
            Add New Commission
          </Button>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Card>
            <CardBody>
              <Table responsive className="mb-0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Percentage</th>
                    <th>Level</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {commissions.map(commission => (
                    <tr key={commission.id}>
                      <td>{commission.id}</td>
                      <td>{commission.name}</td>
                      <td>{commission.percentage}%</td>
                      <td>{commission.level}</td>
                      <td>
                        <span className={`badge bg-${commission.status === 'Active' ? 'success' : 'danger'}`}>
                          {commission.status}
                        </span>
                      </td>
                      <td>
                        <Button color="info" size="sm" className="me-2">
                          Edit
                        </Button>
                        <Button color="danger" size="sm">
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add New Commission</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={newCommission.name}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="percentage">Percentage</Label>
              <Input
                type="number"
                name="percentage"
                id="percentage"
                value={newCommission.percentage}
                onChange={handleInputChange}
                required
                min="0"
                max="100"
              />
            </FormGroup>
            <FormGroup>
              <Label for="level">Level</Label>
              <Input
                type="number"
                name="level"
                id="level"
                value={newCommission.level}
                onChange={handleInputChange}
                required
                min="1"
                max="10"
              />
            </FormGroup>
            <FormGroup>
              <Label for="status">Status</Label>
              <Input
                type="select"
                name="status"
                id="status"
                value={newCommission.status}
                onChange={handleInputChange}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Input>
            </FormGroup>
            <Button color="primary" type="submit">
              Submit
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CommissionManagement;