import 'antd/dist/antd.css';
import { Component } from 'react';
import { Button, Radio, Icon, Dropdown, Menu} from 'antd';
//add by hzhufa on 2019-04-11  测试
class Common_Button extends Component {
  state = {
    size: 'large',
    loading: false,
    iconLoading: false,
  };


  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }
  enterLoading = () => {
    this.setState({ loading: true });
  }

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  }
  handleMenuClick= (e) =>{
    console.log('click', e);
  }



  render() {
    const size = this.state.size;
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2nd item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
      </Menu>
    );
    const ButtonGroup = Button.Group;
    return(
      <div>
        <div>1.按钮类型</div>
        <div>按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次</div>
        <div>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
        </div>

        <br/>
        <br/>
        <br/>
        <div>2.图标按钮</div>
        <div>当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。

          如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 icon 属性。</div>
        <div>
          <Button type="primary" shape="circle" icon="search" />
          <Button type="primary" icon="search">Search</Button>
          <Button shape="circle" icon="search" />
          <Button icon="search">Search</Button>
          <br />
          <Button shape="circle" icon="search" />
          <Button icon="search">Search</Button>
          <Button type="dashed" shape="circle" icon="search" />
          <Button type="dashed" icon="search">Search</Button>
        </div>

        <br/>
        <br/>
        <br/>
        <div>3.按钮尺寸</div>
        <div>按钮有大、中、小三种尺寸。

          通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。</div>
        <div>
          <Radio.Group value={size} onChange={this.handleSizeChange}>
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
          </Radio.Group>
          <br /><br />
          <Button type="primary" size={size}>Primary</Button>
          <Button size={size}>Normal</Button>
          <Button type="dashed" size={size}>Dashed</Button>
          <Button type="danger" size={size}>Danger</Button>
          <br />
          <Button type="primary" shape="circle" icon="download" size={size} />
          <Button type="primary" shape="round" icon="download" size={size}>Download</Button>
          <Button type="primary" icon="download" size={size}>Download</Button>
          <br />
          <Button.Group size={size}>
            <Button type="primary">
              <Icon type="left" />Backward
            </Button>
            <Button type="primary">
              Forward<Icon type="right" />
            </Button>
          </Button.Group>
        </div>

        <br/>
        <br/>
        <br/>
        <div>4.不可用状态</div>
        <div>添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。</div>
        <div>
          <Button type="primary">Primary</Button>
          <Button type="primary" disabled>Primary(disabled)</Button>
          <br />
          <Button>Default</Button>
          <Button disabled>Default(disabled)</Button>
          <br />
          <Button type="dashed">Dashed</Button>
          <Button type="dashed" disabled>Dashed(disabled)</Button>
          <div style={{ padding: '8px 8px 0 8px', background: 'rgb(190, 200, 200)' }}>
            <Button ghost>Ghost</Button>
            <Button ghost disabled>Ghost(disabled)</Button>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div>5.加载中状态</div>
        <div>添加 loading 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。</div>
        <span>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <br />
        <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
          Click me!
        </Button>
        <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
          Click me!
        </Button>
        <br />
        <Button shape="circle" loading />
        <Button type="primary" shape="circle" loading />
        </span>

        <br/>
        <br/>
        <br/>
        <div>6.多个按钮组合</div>
        <div>按钮组合使用时，推荐使用1个主操作 + n 个次操作，3个以上操作时把更多操作放到 Dropdown.Button 中组合使用。</div>
        <div>
          <Button type="primary">primary</Button>
          <Button>secondary</Button>
          <Dropdown overlay={menu}>
            <Button>
              Actions <Icon type="down" />
            </Button>
          </Dropdown>
        </div>

        <br/>
        <br/>
        <br/>
        <div>7.幽灵按钮</div>
        <div>幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。</div>
        <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
          <Button type="primary" ghost>Primary</Button>
          <Button ghost>Default</Button>
          <Button type="dashed" ghost>Dashed</Button>
          <Button type="danger" ghost>danger</Button>
        </div>

        <br/>
        <br/>
        <br/>
        <div>8.按钮组合</div>
        <div>可以将多个 Button 放入 Button.Group 的容器中。

          通过设置 size 为 large small 分别把按钮组合设为大、小尺寸。若不设置 size，则尺寸为中。</div>
        <div>
          <h4>Basic</h4>
          <ButtonGroup>
            <Button>Cancel</Button>
            <Button>OK</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button disabled>L</Button>
            <Button disabled>M</Button>
            <Button disabled>R</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>L</Button>
            <Button>M</Button>
            <Button>R</Button>
          </ButtonGroup>

          <h4>With Icon</h4>
          <ButtonGroup>
            <Button type="primary">
              <Icon type="left" />Go back
            </Button>
            <Button type="primary">
              Go forward<Icon type="right" />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button type="primary" icon="cloud" />
            <Button type="primary" icon="cloud-download" />
          </ButtonGroup>
        </div>
        <br/>
        <br/>
        <br/>
        <div>9.block 按钮</div>
        <div>block属性将使按钮适合其父宽度。</div>
        <div>
          <Button type="primary" block>Primary</Button>
          <Button block>Default</Button>
          <Button type="dashed" block>Dashed</Button>
          <Button type="danger" block>danger</Button>
        </div>

        <br/>
        <br/>
        <br/>
      </div>


    )
  }
}
export default Common_Button;
