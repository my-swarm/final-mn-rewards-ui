import React from 'react';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo">
          <img src="/logo.svg" alt="Logo" />
        </div>
      </Header>
      <Content></Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
