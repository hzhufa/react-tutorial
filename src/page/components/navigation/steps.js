import { Steps,Icon,message,Button,Popover   } from 'antd';
import {Component} from 'react';

const Step=Steps.Step;
const steps = [{
  title: 'First',
  content: 'First-content',
}, {
  title: 'Second',
  content: 'Second-content',
}, {
  title: 'Last',
  content: 'Last-content',
}];
const customDot = (dot, { status, index }) => (
  <Popover content={<span>step {index} status: {status}</span>}>
    {dot}
  </Popover>
);
class Navigation_Steps  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <div>
        <div>1.迷你版</div>
        <Steps size="small" current={0}>
          <Steps.Step title="Finished" />
          <Steps.Step title="In Progress" />
          <Steps.Step title="Waiting" />
        </Steps>

        <br/>
        <br/>
        <br/>
        <div>2.带图标的步骤条</div>
        <div>通过设置 Steps.Step 的 icon 属性，可以启用自定义图标。</div>
        <Steps>
          <Step status="finish" title="Login" icon={<Icon type="user" />} />
          <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
          <Step status="process" title="Pay" icon={<Icon type="loading" />} />
          <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
        </Steps>

        <br/>
        <br/>
        <br/>
        <div>3.步骤切换</div>
        <div>通常配合内容及按钮使用，表示一个流程的处理进度</div>
        <div>
          <Steps current={current}>
            {steps.map(item => <Step key={item.title} title={item.title} />)}
          </Steps>
          <div style={{height:'200px',border:'1px solid #AAAAAA',backgroundColor:"#EEEEEE"}}>{steps[current].content}</div>
          <div className="steps-action">
            {
              current < steps.length - 1
              && <Button type="primary" onClick={() => this.next()}>Next</Button>
            }
            {
              current === steps.length - 1
              && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
            }
            {
              current > 0
              && (
                <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                  Previous
                </Button>
              )
            }
          </div>
        </div>

        <br/>
        <br/>
        <br/>
        <div>4.简单的竖直方向的步骤条</div>
        <Steps direction="vertical" current={1}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>

        <br/>
        <br/>
        <br/>
        <div>5.简单的竖直方向的小型步骤条。</div>
        <Steps direction="vertical" size="small" current={1}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>

        <br/>
        <br/>
        <br/>
        <div>6.步骤运行错误</div>
        <div>使用 Steps 的 status 属性来指定当前步骤的状态</div>
        <Steps current={1} status="error">
          <Step title="Finished" description="This is a description" />
          <Step title="In Process" description="This is a description" />
          <Step title="Waiting" description="This is a description" />
        </Steps>

        <br/>
        <br/>
        <br/>
        <div>7.点状步骤条</div>
        <div>包含步骤点的进度条</div>
        <Steps progressDot current={1}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>

        <br/>
        <br/>
        <br/>
        <div>8.自定义点状步骤条</div>
        <div>为点状步骤条增加自定义展示</div>
        <Steps current={2} progressDot={customDot}>
          <Step title="Finished" description="You can hover on the dot." />
          <Step title="In Progress" description="You can hover on the dot." />
          <Step title="Waiting" description="You can hover on the dot." />
          <Step title="Waiting" description="You can hover on the dot." />
        </Steps>
      </div>
    );
  }
}

export default Navigation_Steps;
