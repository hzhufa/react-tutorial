import { Menu, Dropdown, Icon, Button,message } from 'antd';
import {Component} from 'react';
class Navigation_Dropdown  extends Component {
  state = {
    visible: false,
  };
  handleButtonClick = (e) =>{
    message.info('Click on left button.');
    console.log('click left button', e);
  }

  handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  }


  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
        </Menu.Item>
      </Menu>
    );
    const onClick = ({ key }) => {
      message.info(`Click on item ${key}`);
    };
    const menu_onClick = (
      <Menu onClick={onClick}>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd memu item</Menu.Item>
        <Menu.Item key="3">3rd menu item</Menu.Item>
      </Menu>
    );

    const menu_handleMenuClick = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1"><Icon type="user" />1st menu item</Menu.Item>
        <Menu.Item key="2"><Icon type="user" />2nd menu item</Menu.Item>
        <Menu.Item key="3"><Icon type="user" />3rd item</Menu.Item>
      </Menu>
    );
    const SubMenu = Menu.SubMenu;

    const menu_subMenu = (
      <Menu>
        <Menu.Item>1st menu item</Menu.Item>
        <Menu.Item>2nd menu item</Menu.Item>
        <SubMenu title="sub menu">
          <Menu.Item>3rd menu item</Menu.Item>
          <Menu.Item>4th menu item</Menu.Item>
        </SubMenu>
        <SubMenu title="disabled sub menu" disabled>
          <Menu.Item>5d menu item</Menu.Item>
          <Menu.Item>6th menu item</Menu.Item>
        </SubMenu>
      </Menu>
    );


    return (
      <div>
        <div>1.基本</div>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
            Hover me <Icon type="down" />
          </a>
        </Dropdown>

        <br/>
        <br/>
        <br/>
        <div>2.弹出位置</div>
        <div>支持 6 个弹出位置</div>
        <div>
          <Dropdown overlay={menu} placement="bottomLeft">
            <Button>bottomLeft</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement="bottomCenter">
            <Button>bottomCenter</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement="bottomRight">
            <Button>bottomRight</Button>
          </Dropdown>
          <br />
          <Dropdown overlay={menu} placement="topLeft">
            <Button>topLeft</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement="topCenter">
            <Button>topCenter</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement="topRight">
            <Button>topRight</Button>
          </Dropdown>

          <br/>
          <br/>
          <br/>
          <div>3.触发事件</div>
          <div>点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作</div>
          <Dropdown overlay={menu_onClick}>
            <a className="ant-dropdown-link" href="#">
              Hover me, Click menu item <Icon type="down" />
            </a>
          </Dropdown>
          <br/>
          <br/>
          <br/>
          <div>4.触发方式</div>
          <div>默认是移入触发菜单，可以点击触发</div>
          <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" href="#">
              Click me <Icon type="down" />
            </a>
          </Dropdown>
        </div>
        <br/>
        <br/>
        <br/>
        <div>5.带下拉框的按钮</div>
        <div>左边是按钮，右边是额外的相关功能菜单。</div>
        <div>
          <Dropdown.Button onClick={this.handleButtonClick} overlay={menu_handleMenuClick}>
            Dropdown
          </Dropdown.Button>
          <Dropdown.Button
            onClick={this.handleButtonClick}
            overlay={menu_handleMenuClick}
            disabled
            style={{ marginLeft: 8 }}
          >
            Dropdown
          </Dropdown.Button>
          <Dropdown overlay={menu_handleMenuClick}>
            <Button style={{ marginLeft: 8 }}>
              Button <Icon type="down" />
            </Button>
          </Dropdown>
        </div>
        <br/>
        <br/>
        <br/>
        <div>6.多级菜单</div>
        <div>传入的菜单里有多个层级。</div>
        <Dropdown overlay={menu_subMenu}>
          <a className="ant-dropdown-link" href="#">
            Cascading menu <Icon type="down" />
          </a>
        </Dropdown>
        <br/>
        <br/>
        <br/>
        <div>7.右键菜单</div>
        <div>默认是移入触发菜单，可以点击鼠标右键触发。</div>
        <Dropdown overlay={menu} trigger={['contextMenu']}>
          <span style={{ userSelect: 'none' }}>Right Click on Me</span>
        </Dropdown>
      </div>
    );
  }
}

export default Navigation_Dropdown;
