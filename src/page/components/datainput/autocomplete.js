import { AutoComplete,Input,Icon,Button  } from 'antd';
import {Component} from 'react';
import 'antd/dist/antd.css';
import './autocomplete.css';

const Option = AutoComplete.Option;
const { TextArea } = Input;
const OptGroup = AutoComplete.OptGroup;

class DataInput_AutoComplete extends Component {
  state = {
    dataSource: [],
    dataSource2: [],
    result: [],
  }
  onSelect=(value)=>{
    console.log('onSelect', value);
  }
  handleSearch = (value) => {
    this.setState({
      dataSource: !value ? [] : [
        value,
        value + value,
        value + value + value,
      ],
    });
  }

  handleSearch_Option = (value) => {
    let result;
    if (!value || value.indexOf('@') >= 0) {
      result = [];
    } else {
      result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
    }
    this.setState({ result });
  }

  onSelect = (value) =>{
    console.log('onSelect', value);
  }

  handleKeyPress = (ev) => {
    console.log('handleKeyPress', ev);
  }
  renderTitle = (title) =>{
    return (
      <span>
      {title}
        <a
          style={{ float: 'right' }}
          href="https://www.google.com/search?q=antd"
          target="_blank"
          rel="noopener noreferrer"
        >更多
      </a>
    </span>
    );
  }


  getRandomInt_2 = (max, min = 0) =>{
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
  }

  searchResult_2 = (query) =>{
    return (new Array(this.getRandomInt_2(5))).join('.').split('.')
      .map((item, idx) => ({
        query,
        category: `${query}${idx}`,
        count: this.getRandomInt_2(200, 100),
      }));
  }

  renderOption_2 = (item) =>{
    return (
      <Option key={item.category} text={item.category}>
        {item.query} 在
        <a
          href={`https://s.taobao.com/search?q=${item.query}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.category}
        </a>
        区块中
        <span className="global-search-item-count">约 {item.count} 个结果</span>
      </Option>
    );
  }

  handleSearch_2 = (value) => {
    this.setState({
      dataSource2: value ? this.searchResult_2(value) : [],
    });
  }

  render() {
    const { dataSource,dataSource2 } = this.state;

    const { result } = this.state;
    const children = result.map(email => <Option key={email}>{email}</Option>);

    const dataSource_NoUpper = ['Burns Bay Road', 'Downing Street', 'Wall Street'];

    const dataSource_FixClass = [{
      title: '话题',
      children: [{
        title: 'AntDesign',
        count: 10000,
      }, {
        title: 'AntDesign UI',
        count: 10600,
      }],
    }, {
      title: '问题',
      children: [{
        title: 'AntDesign UI 有多好',
        count: 60100,
      }, {
        title: 'AntDesign 是啥',
        count: 30010,
      }],
    }, {
      title: '文章',
      children: [{
        title: 'AntDesign 是一个设计语言',
        count: 100000,
      }],
    }];


    const options = dataSource_FixClass.map(group => (
      <OptGroup
        key={group.title}
        label={this.renderTitle(group.title)}
      >
        {group.children.map(opt => (
          <Option key={opt.title} value={opt.title}>
            {opt.title}
            <span className="certain-search-item-count">{opt.count} 人 关注</span>
          </Option>
        ))}
      </OptGroup>
    )).concat([
      <Option disabled key="all" className="show-all">
        <a
          href="https://www.google.com/search?q=antd"
          target="_blank"
          rel="noopener noreferrer"
        >
          查看所有结果
        </a>
      </Option>,
    ]);


    return (
      <div>
        <div>1.基本使用</div>
        <div>基本使用。通过 dataSource 设置自动完成的数据源</div>
        <AutoComplete
          dataSource={dataSource}
          style={{ width: 200 }}
          onSelect={this.onSelect}
          onSearch={this.handleSearch}
          placeholder="input here"
        />

        <br/>
        <br/>
        <br/>
        <div>2.自定义选项</div>
        <div>也可以直接传 AutoComplete.Option 作为 AutoComplete 的 children，而非使用 dataSource</div>
        <AutoComplete
          style={{ width: 200 }}
          onSearch={this.handleSearch_Option}
          placeholder="input here"
        >
          {children}
        </AutoComplete>

        <br/>
        <br/>
        <br/>
        <div>3.自定义输入组件</div>
        <AutoComplete
          dataSource={dataSource}
          style={{ width: 200 }}
          onSelect={this.onSelect}
          onSearch={this.handleSearch}
        >
        <TextArea
          placeholder="input here"
          className="custom"
          style={{ height: 50 }}
          onKeyPress={this.handleKeyPress}
        />
        </AutoComplete>

        <br/>
        <br/>
        <br/>
        <div>4.不区分大小写</div>
        <AutoComplete
          style={{ width: 200 }}
          dataSource={dataSource_NoUpper}
          placeholder="try to type `b`"
          filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
        />

        <br/>
        <br/>
        <br/>
        <div>5.查询模式 - 确定类目</div>
        <div className="certain-category-search-wrapper">
          <AutoComplete
            className="certain-category-search"
            dropdownClassName="certain-category-search-dropdown"
            dropdownMatchSelectWidth={false}
            dropdownStyle={{ width: 300 }}
            size="large"
            style={{ width: '100%' }}
            dataSource={options}
            placeholder="input here"
            optionLabelProp="value"
          >
            <Input suffix={<Icon type="search" className="certain-category-icon" />} />
          </AutoComplete>
        </div>

        <br/>
        <br/>
        <br/>
        <div>6.查询模式 - 不确定类目</div>
        <div className="global-search-wrapper" style={{ width: 300 }}>
          <AutoComplete
            className="global-search"
            size="large"
            style={{ width: '100%' }}
            dataSource={dataSource2.map(this.renderOption_2)}
            onSelect={this.onSelect}
            onSearch={this.handleSearch_2}
            placeholder="input here"
            optionLabelProp="text"
          >
            <Input
              suffix={(
                <Button className="search-btn" size="large" type="primary">
                  <Icon type="search" />
                </Button>
              )}
            />
          </AutoComplete>
        </div>
      </div>
    );
  }
}

export default DataInput_AutoComplete;
