import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Card, Layout } from 'antd';
import Header from 'components/Header';
import Menu from 'components/Menu';

const { Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        theme="light"
        width={250}
        trigger={null}
        collapsed={collapsed}
        style={{
          top: 64,
          position: 'fixed',
          zIndex: 1,
          height: '100%',
          overflowY: 'scroll',
        }}
      >
        <Menu />
      </Sider>
      <Layout>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            // marginLeft: collapsed ? 80 : 225,
            marginLeft: 250,
            padding: 10,
            transition: '.3s',
          }}
        >
          <Card size="small">
            <Outlet />
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
