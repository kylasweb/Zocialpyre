import React, { useState } from 'react';
import { Row, Col, Card, CardBody, Table, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

const CRMIntegration = () => {
  const [modal, setModal] = useState(false);
  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active', level: 'Gold' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive', level: 'Silver' },
  ]);
  const [newCustomer, setNewCustomer] = useState({ name: '', email: '', status: 'Active', level: 'Bronze' });

  const toggle = () => setModal(!modal);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = customers.length + 1;
    setCustomers(prev => [...prev, { ...newCustomer, id }]);
    setNewCustomer({ name: '', email: '', status: 'Active', level: 'Bronze' });
    toggle();
  };

  return (
    <div className="crm-integration">
      <Row className="mb-4">
        <Col lg={12} className="d-flex justify-content-between align-items-center">
          <h4>Customer Management</h4>
          <Button color="primary" onClick={toggle}>
            Add New Customer
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
                    <th>Email</th>
                    <th>Status</th>
                    <th>Level</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map(customer => (
                    <tr key={customer.id}>
                      <td>{customer.id}</td>
                      <td>{customer.name}</td>
                      <td>{customer.email}</td>
                      <td>
                        <span className={`badge bg-${customer.status === 'Active' ? 'success' : 'danger'}`}>
                          {customer.status}
                        </span>
                      </td>
                      <td>{customer.level}</td>
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
        <ModalHeader toggle={toggle}>Add New Customer</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={newCustomer.name}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={newCustomer.email}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="status">Status</Label>
              <Input
                type="select"
                name="status"
                id="status"
                value={newCustomer.status}
                onChange={handleInputChange}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="level">Level</Label>
              <Input
                type="select"
                name="level"
                id="level"
                value={newCustomer.level}
                onChange={handleInputChange}
              >
                <option value="Bronze">Bronze</option>
                <option value="Silver">Silver</option>
                <option value="Gold">Gold</option>
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

export default CRMIntegration;