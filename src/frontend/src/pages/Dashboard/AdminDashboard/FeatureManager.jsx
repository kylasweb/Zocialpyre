import React, { useState } from 'react';
import { Row, Col, Card, CardBody, Table, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

const FeatureManager = () => {
  const [modal, setModal] = useState(false);
  const [features, setFeatures] = useState([
    { id: 1, name: 'Binary Matrix', description: 'Enable binary matrix structure', status: 'Active', module: 'Core' },
    { id: 2, name: 'Rewards System', description: 'Enable rewards and achievements', status: 'Active', module: 'Rewards' },
    { id: 3, name: 'Commission System', description: 'Enable commission calculations', status: 'Active', module: 'Finance' },
    { id: 4, name: 'Gamification', description: 'Enable gamification features', status: 'Active', module: 'Engagement' }
  ]);
  const [newFeature, setNewFeature] = useState({ name: '', description: '', status: 'Active', module: 'Core' });

  const toggle = () => setModal(!modal);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFeature(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = features.length + 1;
    setFeatures(prev => [...prev, { ...newFeature, id }]);
    setNewFeature({ name: '', description: '', status: 'Active', module: 'Core' });
    toggle();
  };

  const handleToggleStatus = (id) => {
    setFeatures(prev =>
      prev.map(feature =>
        feature.id === id
          ? { ...feature, status: feature.status === 'Active' ? 'Inactive' : 'Active' }
          : feature
      )
    );
  };

  return (
    <div className="feature-manager">
      <Row className="mb-4">
        <Col lg={12} className="d-flex justify-content-between align-items-center">
          <h4>Feature Manager</h4>
          <Button color="primary" onClick={toggle}>
            Add New Feature
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
                    <th>Description</th>
                    <th>Module</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map(feature => (
                    <tr key={feature.id}>
                      <td>{feature.id}</td>
                      <td>{feature.name}</td>
                      <td>{feature.description}</td>
                      <td>{feature.module}</td>
                      <td>
                        <span className={`badge bg-${feature.status === 'Active' ? 'success' : 'danger'}`}>
                          {feature.status}
                        </span>
                      </td>
                      <td>
                        <Button
                          color={feature.status === 'Active' ? 'warning' : 'success'}
                          size="sm"
                          className="me-2"
                          onClick={() => handleToggleStatus(feature.id)}
                        >
                          {feature.status === 'Active' ? 'Disable' : 'Enable'}
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
        <ModalHeader toggle={toggle}>Add New Feature</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={newFeature.name}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="textarea"
                name="description"
                id="description"
                value={newFeature.description}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="module">Module</Label>
              <Input
                type="select"
                name="module"
                id="module"
                value={newFeature.module}
                onChange={handleInputChange}
              >
                <option value="Core">Core</option>
                <option value="Rewards">Rewards</option>
                <option value="Finance">Finance</option>
                <option value="Engagement">Engagement</option>
                <option value="Other">Other</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="status">Status</Label>
              <Input
                type="select"
                name="status"
                id="status"
                value={newFeature.status}
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

export default FeatureManager;