import { Row, Col } from 'antd';
import {Component} from "react";
class Layout_Grid extends Component {

  render() {
    const colClass={
      border:'1px solid #000000',
    }
    const colClassWithBg={
      border:'1px solid #000000',
      background: '#00A0E9'
    }
    const gutterBoxClass ={
      background: '#00A0E9'
    }
    return (
      <div>
        <div>1.基础栅格</div>
        <div>从堆叠到水平排列。

          使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。</div>
        <div>
          <Row>
            <Col span={12} style={colClass}>col-12</Col>
            <Col span={12} style={colClass}>col-12</Col>
          </Row>
          <Row>
            <Col span={8} style={colClass}>col-8</Col>
            <Col span={8} style={colClass}>col-8</Col>
            <Col span={8} style={colClass}>col-8</Col>
          </Row>
          <Row>
            <Col span={6} style={colClass}>col-6</Col>
            <Col span={6} style={colClass}>col-6</Col>
            <Col span={6} style={colClass}>col-6</Col>
            <Col span={6} style={colClass}>col-6</Col>
          </Row>
        </div>
        <br/>
        <br/>
        <br/>
        <div>2.区块间隔</div>
        <div>栅格常常需要和间隔进行配合，你可以使用 Row 的 gutter 属性，我们推荐使用 (16+8n)px 作为栅格间隔。(n 是自然数)</div>
        <div className="gutter-example">
          <Row gutter={16}>
            <Col style={colClass} span={6}>
              <div style={gutterBoxClass}>col-6</div>
            </Col>
            <Col style={colClass} span={6}>
              <div style={gutterBoxClass}>col-6</div>
            </Col>
            <Col style={colClass} span={6}>
              <div style={gutterBoxClass}>col-6</div>
            </Col>
            <Col style={colClass} span={6}>
              <div style={gutterBoxClass}>col-6</div>
            </Col>
          </Row>
        </div>
        <br/>
        <br/>
        <br/>
        <div>3.左右偏移</div>
        <div>列偏移。使用 offset 可以将列向右侧偏。</div>
        <div>
          <Row>
            <Col style={colClass} span={8}><div style={gutterBoxClass}>col-8</div></Col>
            <Col style={colClass} span={8} offset={8}><div style={gutterBoxClass}>col-8</div></Col>
          </Row>
          <Row>
            <Col style={colClass} span={6} offset={6}><div style={gutterBoxClass}>col-6 col-offset-6</div></Col>
            <Col style={colClass} span={6} offset={6}><div style={gutterBoxClass}>col-6 col-offset-6</div></Col>
          </Row>
          <Row>
            <Col style={colClass} span={12} offset={6}><div style={gutterBoxClass}>col-12 col-offset-6</div></Col>
          </Row>
        </div>
        <br/>
        <br/>
        <br/>
        <div>4.栅格排序</div>
        <div>列排序。<br/>

          通过使用 push 和 pull 类就可以很容易的改变列（column）的顺序。
          <br/>
          push 向右推进相应列
          <br/>
          pull 向左推进相应列
        </div>
        <div>
          <Row>
            <Col style={colClass} span={18} push={6}><div style={gutterBoxClass}>col-18 col-push-6</div></Col>
            <Col style={colClass} span={6} pull={18}><div style={gutterBoxClass}>col-6 col-pull-18</div></Col>
          </Row>
        </div>
        <br/>
        <br/>
        <br/>
        <div>5.Flex 布局</div>
        <div>使用 row-flex 定义 flex 布局，其子元素根据不同的值 start,center,end,space-between,space-around，分别定义其在父节点里面的排版方式。</div>
        <div>
          <p>sub-element align left</p>
          <Row type="flex" justify="start">
            <Col style={colClassWithBg} span={4}>col-4</Col>
            <Col style={colClassWithBg} span={4}>col-4</Col>
            <Col style={colClassWithBg} span={4}>col-4</Col>
            <Col style={colClassWithBg} span={4}>col-4</Col>
          </Row>

          <p>sub-element align center</p>
          <Row type="flex" justify="center">
            <Col style={colClassWithBg} span={4}>col-4</Col>
            <Col style={colClassWithBg} span={4}>col-4</Col>
            <Col style={colClassWithBg} span={4}>col-4</Col>
            <Col style={colClassWithBg} span={4}>col-4</Col>
          </Row>

          <p>sub-element align right</p>
          <Row type="flex" justify="end">
            <Col style={colClassWithBg} span={4}>col-4</Col>
            <Col style={colClassWithBg} span={4}>col-4</Col>
            <Col style={colClassWithBg} span={4}>col-4</Col>
            <Col style={colClassWithBg} span={4}>col-4</Col>
          </Row>

          <p>sub-element monospaced arrangement</p>
          <Row type="flex" justify="space-between">
            <Col style={colClassWithBg} span={4}>col-4</Col>
            <Col style={colClassWithBg} span={4}>col-4</Col>
            <Col style={colClassWithBg} span={4}>col-4</Col>
            <Col style={colClassWithBg} span={4}>col-4</Col>
          </Row>

          <p>sub-element align full</p>
          <Row type="flex" justify="space-around">
            <Col style={colClassWithBg} span={4}>col-4</Col>
            <Col style={colClassWithBg} span={4}>col-4</Col>
            <Col style={colClassWithBg} span={4}>col-4</Col>
            <Col style={colClassWithBg} span={4}>col-4</Col>
          </Row>
        </div>
      </div>
    )
  }
}
export default Layout_Grid;
