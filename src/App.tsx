import React from 'react';
import { Col, Layout, Row } from 'antd';
import { Collect, Info, InfoXdai, InfoGuide } from './components';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <Row>
          <Col span={12}>
            <div className="logo">
              <img src="/logo.svg" alt="Logo" />
            </div>
          </Col>
          <Col span={12} style={{ textAlign: 'right', color: '#fff', fontSize: '1.125rem' }}>
            Masternode Rewards
          </Col>
        </Row>
      </Header>
      <Content>
        <Row>
          <Col span={24} lg={{ span: 12, offset: 6 }} xxl={{ span: 8, offset: 8 }}>
            <Collect />
          </Col>
        </Row>
        <Row gutter={32}>
          <Col span={24} lg={{ span: 8 }}>
            <Info />
          </Col>
          <Col span={24} lg={{ span: 8 }}>
            <InfoXdai />
          </Col>
          <Col span={24} lg={{ span: 8 }}>
            <InfoGuide />
          </Col>
        </Row>
      </Content>
      <Footer>
        <div style={{ textAlign: 'center' }}>Created by Swarm Network 2021.</div>
      </Footer>
    </Layout>
  );
}

export default App;
