import React, { Component } from 'react'
import {  UserOutlined ,FormOutlined ,HomeOutlined,TeamOutlined } from '@ant-design/icons';
import {  Layout, Menu } from 'antd';
import { Link, Route } from 'react-router-dom';
import 'antd/dist/antd.css'
import { listMenu } from './listMenu';
import { Redirect } from 'react-router-dom';
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
  getItem('Dashboard', '', <HomeOutlined />),
  getItem('User', 'user',<UserOutlined />, [getItem('actif', 'actif-user'), getItem('inactif', 'inactif-user'),
      
    ]),
    getItem('Todo', 'todo',<FormOutlined />, [getItem('achieved', 'achieved-todo'), getItem('unachieved', 'unachieved-todo'),
  ]),
   
    getItem('Administrateur', 'admin',<TeamOutlined/>, [getItem('actif', 'actif-admin'), getItem('inactif', 'inactif-admin'),
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
        
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} onClick={e=>{
          if(e.key === "") {
            return window.location.href ="/first";
          }
          return window.location.href ="/first/"+e.key;
        }}/>
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
           {listMenu.map(e=>(
                <Route exact path={e.path} key={e.path} component={e.component}/>
                
                
              ))}   
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
