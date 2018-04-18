import React from 'react'
import {Layout, Menu, Breadcrumb, Icon} from 'antd'
import {withRouter,Link} from 'react-router-dom'
import './index.less'
const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu
class Container extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      collapsed: false,
      breadcrumb:''
    }
  }

  componentDidMount(){
    // let after = this.props.location.pathname.slice(1)
    this.setState({
      breadcrumb:'治娱治乐第一品牌'
    }) 
  }
 



  onCollapse = (collapsed) => {
    this.setState({collapsed})
  }

  render () {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Link to="/main/livedata">
                <Icon type="pie-chart" />
                <span>直播数据</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/main/liveroom">
                <Icon type="desktop" />
                <span>直播频道</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="team" /><span>用户管理</span></span>}
            >
              <Menu.Item key="3">
                <Link to="/main/userlist">
                  <span>用户列表</span>
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="user" /><span>个人中心</span></span>}
            >
              <Menu.Item key="4">
                <Link to="/main/personcenter">
                  <span>个人信息</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/login">
                  <span>退出登录</span>
                </Link>
              </Menu.Item>
            </SubMenu>
            {/* <Menu.Item key="5">
              <Icon type="file" />
              <span>你的反馈</span>
            </Menu.Item> */}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>{this.state.breadcrumb}</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            治娱直播 ©2018 Created by ZCDC
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(Container)