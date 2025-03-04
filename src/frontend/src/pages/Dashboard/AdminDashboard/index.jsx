import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { useSelector } from 'react-redux';

// Components
import CRMIntegration from './CRMIntegration';
import RewardsManagement from './RewardsManagement';
import CommissionManagement from './CommissionManagement';
import FeatureManager from './FeatureManager';
import SponsorManagement from './SponsorManagement';

// Charts and Analytics
import { Line, Bar } from 'react-chartjs-2';

// Styles
import './AdminDashboard.scss';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('crm');
  const { user } = useSelector(state => state.auth);

  // Analytics data
  const analyticsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'crm':
        return <CRMIntegration />;
      case 'rewards':
        return <RewardsManagement />;
      case 'commission':
        return <CommissionManagement />;
      case 'features':
        return <FeatureManager />;
      case 'sponsors':
        return <SponsorManagement />;
      default:
        return <CRMIntegration />;
    }
  };

  return (
    <Container fluid className="admin-dashboard">
      <Row className="mb-4">
        <Col lg={12}>
          <h1>Welcome, {user?.name || 'Admin'}</h1>
          <p>Here's your admin dashboard overview</p>
        </Col>
      </Row>

      <Row>
        <Col lg={8}>
          <Card>
            <CardBody>
              <h4 className="card-title mb-4">Real-Time Analytics</h4>
              <Line data={analyticsData} />
            </CardBody>
          </Card>
        </Col>

        <Col lg={4}>
          <Card>
            <CardBody>
              <h4 className="card-title mb-4">Quick Stats</h4>
              {/* Add quick stats components */}
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col lg={12}>
          <Card>
            <CardBody>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="card-title">Management Tools</h4>
                <div className="btn-group">
                  <button
                    className={`btn ${activeTab === 'crm' ? 'btn-primary' : 'btn-light'}`}
                    onClick={() => setActiveTab('crm')}
                  >
                    CRM
                  </button>
                  <button
                    className={`btn ${activeTab === 'rewards' ? 'btn-primary' : 'btn-light'}`}
                    onClick={() => setActiveTab('rewards')}
                  >
                    Rewards
                  </button>
                  <button
                    className={`btn ${activeTab === 'commission' ? 'btn-primary' : 'btn-light'}`}
                    onClick={() => setActiveTab('commission')}
                  >
                    Commission
                  </button>
                  <button
                    className={`btn ${activeTab === 'features' ? 'btn-primary' : 'btn-light'}`}
                    onClick={() => setActiveTab('features')}
                  >
                    Features
                  </button>
                  <button
                    className={`btn ${activeTab === 'sponsors' ? 'btn-primary' : 'btn-light'}`}
                    onClick={() => setActiveTab('sponsors')}
                  >
                    Sponsors
                  </button>
                </div>
              </div>
              {renderContent()}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;