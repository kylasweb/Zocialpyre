import React, { useState } from 'react';
import { Row, Col, Card, CardBody, Table, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

const SponsorManagement = () => {
  const [modal, setModal] = useState(false);
  const [sponsors, setSponsors] = useState([
    { 
      id: 1, 
      name: 'John Doe', 
      sponsorId: 'SP001', 
      referralLink: 'https://example.com/ref/SP001',
      downlineCount: 5,
      totalCommission: 1500,
      status: 'Active'
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      sponsorId: 'SP002', 
      referralLink: 'https://example.com/ref/SP002',
      downlineCount: 3,
      totalCommission: 800,
      status: 'Active'
    },
  ]);
  const [newSponsor, setNewSponsor] = useState({
    name: '',
    sponsorId: '',
    referralLink: '',
    downlineCount: 0,
    totalCommission: 0,
    status: 'Active'
  });

  const toggle = () => setModal(!modal);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSponsor(prev => ({ ...prev, [name]: value }));
  };

  const generateSponsorId = () => {
    const nextId = sponsors.length + 1;
    return `SP${String(nextId).padStart(3, '0')}`;
  };

  const generateReferralLink = (sponsorId) => {
    return `https://example.com/ref/${sponsorId}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sponsorId = generateSponsorId();
    const referralLink = generateReferralLink(sponsorId);
    const id = sponsors.length + 1;
    
    setSponsors(prev => [
      ...prev,
      { 
        ...newSponsor,
        id,
        sponsorId,
        referralLink,
        downlineCount: 0,
        totalCommission: 0
      }
    ]);
    
    setNewSponsor({
      name: '',
      sponsorId: '',
      referralLink: '',
      downlineCount: 0,
      totalCommission: 0,
      status: 'Active'
    });
    
    toggle();
  };

  return (
    <div className="sponsor-management">
      <Row className="mb-4">
        <Col lg={12} className="d-flex justify-content-between align-items-center">
          <h4>Sponsor Management</h4>
          <Button color="primary" onClick={toggle}>
            Add New Sponsor
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
                    <th>Sponsor ID</th>
                    <th>Referral Link</th>
                    <th>Downline Count</th>
                    <th>Total Commission</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sponsors.map(sponsor => (
                    <tr key={sponsor.id}>
                      <td>{sponsor.id}</td>
                      <td>{sponsor.name}</td>
                      <td>{sponsor.sponsorId}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="text-truncate" style={{ maxWidth: '200px' }}>
                            {sponsor.referralLink}
                          </span>
                          <Button
                            color="light"
                            size="sm"
                            className="ms-2"
                            onClick={() => navigator.clipboard.writeText(sponsor.referralLink)}
                          >
                            Copy
                          </Button>
                        </div>
                      </td>
                      <td>{sponsor.downlineCount}</td>
                      <td>${sponsor.totalCommission}</td>
                      <td>
                        <span className={`badge bg-${sponsor.status === 'Active' ? 'success' : 'danger'}`}>
                          {sponsor.status}
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
        <ModalHeader toggle={toggle}>Add New Sponsor</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={newSponsor.name}
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
                value={newSponsor.status}
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

export default SponsorManagement;