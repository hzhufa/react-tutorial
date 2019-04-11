import { Layout } from 'antd';
import {Component} from "react";
class Layout_Layout extends Component {
  render() {
    const {
      Header, Footer, Sider, Content,
    } = Layout;
    return(
      <div>
        <div>1.基本结构，上、中、下结构</div>
        <div>典型的页面布局。</div>
        <div>
          <Layout>
            <Header style={{height:'45px',backgroundColor:'#666666'}}>Header</Header>
            <Content style={{height:'330px'}}>Content</Content>
            <Footer style={{height:'30px',backgroundColor:'#666666'}}>Footer</Footer>
          </Layout>

          <br/>
          <hr/>
          <br/>
          <div>2.上、左、中、下结构</div>

          <Layout>
            <Header style={{height:'45px',backgroundColor:'#666666'}}>Header</Header>
            <Layout>
              <Sider style={{height:'330px',backgroundColor:'#AAAAAA'}}>Sider</Sider>
              <Content>Content</Content>
            </Layout>
            <Footer style={{height:'30px',backgroundColor:'#666666'}}>Footer</Footer>
          </Layout>

          <br/>
          <hr/>
          <br/>
          <div>3.上、中、右、下结构</div>
          <Layout>
            <Header style={{height:'45px',backgroundColor:'#666666'}}>Header</Header>
            <Layout>
              <Content>Content</Content>
              <Sider style={{height:'330px',backgroundColor:'#AAAAAA'}}>Sider</Sider>
            </Layout>
            <Footer style={{height:'30px',backgroundColor:'#666666'}}>Footer</Footer>
          </Layout>

          <br/>
          <hr/>
          <br/>
          <div>4.左、上、中、下结构</div>

          <Layout>
            <Sider style={{height:'330px',backgroundColor:'#AAAAAA'}}>Sider</Sider>
            <Layout>
              <Header style={{height:'45px',backgroundColor:'#666666'}}>Header</Header>
              <Content>Content</Content>
              <Footer style={{height:'30px',backgroundColor:'#666666'}}>Footer</Footer>
            </Layout>
          </Layout>
        </div>
      </div>

    )
  }
}

export default Layout_Layout;
