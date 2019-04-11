import { Breadcrumb, Icon } from 'antd';
import {Component} from 'react';
class Navigation_Breadcrumb  extends Component {
  render() {
    return (
      <div>
        <div>1.基本</div>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
          <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>

        <br/>
        <br/>
        <br/>
        <div>2.带有图标的</div>
        <Breadcrumb>
          <Breadcrumb.Item href="">
            <Icon type="home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <Icon type="user" />
            <span>Application List</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            Application
          </Breadcrumb.Item>
        </Breadcrumb>

        <br/>
        <br/>
        <br/>
        <div>3.分隔符</div>
        <div>使用 separator=">" 可以自定义分隔符。</div>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
          <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>

      </div>
    );
  }
}

export default Navigation_Breadcrumb;
