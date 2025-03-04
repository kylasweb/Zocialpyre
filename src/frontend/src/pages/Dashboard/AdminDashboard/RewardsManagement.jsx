import React, { useState } from 'react';
import { Row, Col, Card, CardBody, Table, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

const RewardsManagement = () => {
  const [modal, setModal] = useState(false);
  const [rewards, setRewards] = useState([
    { id: 1, name: 'Early Bird', description: 'First 100 signups', points: 500, status: 'Active' },
    { id: 2, name: 'Team Builder', description: 'Build a team of 10', points: 1000, status: 'Active' },
  ]);
  const [newReward, setNewReward] = useState({ name: '', description: '', points: 0, status: 'Active' });

  const toggle = () => setModal(!modal);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReward(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = rewards.length + 1;
    setRewards(prev => [...prev, { ...newReward, id }]);
    setNewReward({ name: '', description: '', points: 0, status: 'Active' });
    toggle();
  };

  return (
    <div className="rewards-management">
      <Row className="mb-4">
        <Col lg={12} className="d-flex justify-content-between align-items-center">
          <h4>Rewards Management</h4>
          <Button color="primary" onClick={toggle}>
            Add New Reward
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
                    <th>Points</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {rewards.map(reward => (
                    <tr key={reward.id}>
                      <td>{reward.id}</td>
                      <td>{reward.name}</td>
                      <td>{reward.description}</td>
                      <td>{reward.points}</td>
                      <td>
                        <span className={`badge bg-${reward.status === 'Active' ? 'success' : 'danger'}`}>
                          {reward.status}
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
        <ModalHeader toggle={toggle}>Add New Reward</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={newReward.name}
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
                value={newReward.description}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="points">Points</Label>
              <Input
                type="number"
                name="points"
                id="points"
                value={newReward.points}
                onChange={handleInputChange}
                required
                min="0"
              />
            </FormGroup>
            <FormGroup>
              <Label for="status">Status</Label>
              <Input
                type="select"
                name="status"
                id="status"
                value={newReward.status}
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

export default RewardsManagement;