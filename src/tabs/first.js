import React, { Component } from 'react'
import {  UserOutlined ,MenuFoldOutlined,HomeOutlined,TeamOutlined } from '@ant-design/icons';
import {  Layout, Menu } from 'antd';
import 'antd/dist/antd.css'
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Dashboard', '1', <HomeOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
      getItem('Utilisateur', '3'),
      getItem('', '4'),
      
    ]),
    getItem('Todo', 'sub2',<MenuFoldOutlined/>, [getItem('actif', '6'), getItem('inactif', '8'),
    ]),
    getItem('Administrateur', 'sub2',<TeamOutlined/>, [getItem('actif', '6'), getItem('inactif', '8'),
    ]),
];
 class First extends Component {

  render() {
    
    return (
      <div>
        <Layout
      style={{
        minHeight: '100vh',
      }}
    >
        <Sider >
  
        <div style={{ height: 88}}></div>
        
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
           
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          something
        </Footer>
      </Layout>
    </Layout>
  
      </div>
    )
  }
}
export default First




