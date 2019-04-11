import { Pagination } from 'antd';
import {Component} from 'react';
class Navigation_Pagination  extends Component {
  state = {
    current: 3,
  }
  onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  }
  onChange = (pageNumber) =>{
    console.log('Page: ', pageNumber);
  }
  onChange2 = (pageNumber) =>{
    console.log('Page: ', pageNumber);
    this.setState({
      current: pageNumber,
    });
  }
  showTotal = (total) =>{
    return `Total ${total} items`;
  }
  itemRender=(current, type, originalElement) =>{
    if (type === 'prev') {
      return <a>Previous</a>;
    } if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  }
  render() {
    return (
      <div>
        <div>1.基础分页</div>
        <Pagination defaultCurrent={3} total={50} />

        <br/>
        <br/>
        <br/>
        <div>2.改变每页显示条目数</div>
        <Pagination showSizeChanger onShowSizeChange={this.onShowSizeChange} defaultCurrent={3} total={500} />

        <br/>
        <br/>
        <br/>
        <div>3.快速跳转到某一页</div>
        <Pagination showQuickJumper showSizeChanger onShowSizeChange={this.onShowSizeChange} defaultCurrent={2} total={500} onChange={this.onChange} />

        <br/>
        <br/>
        <br/>
        <div>4.迷你版本</div>
        <div>
          <Pagination size="small" total={50} />
          <Pagination size="small" total={50} showSizeChanger showQuickJumper />
          <Pagination size="small" total={50} showTotal={this.showTotal} />
        </div>

        <br/>
        <br/>
        <br/>
        <div>5.简单的翻页</div>
        <Pagination simple defaultCurrent={2} total={50} />

        <br/>
        <br/>
        <br/>
        <div>6.受控制的页码</div>
        <Pagination current={this.state.current} onChange={this.onChange2} total={50} />

        <br/>
        <br/>
        <br/>
        <div>7.通过设置 showTotal 展示总共有多少数据。</div>
        <div>
          <Pagination
            total={85}
            showTotal={total => `总记录数： ${total} `}
            pageSize={20}
            defaultCurrent={1}
          />
          <br />
          <Pagination
            total={85}
            showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
            pageSize={20}
            defaultCurrent={1}
          />
        </div>

        <br/>
        <br/>
        <br/>
        <div>8.修改上一步和下一步为文字链接</div>
        <Pagination total={500} itemRender={this.itemRender} />
      </div>
    );
  }
}

export default Navigation_Pagination;
