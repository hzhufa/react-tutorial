import { Cascader } from 'antd';
import {Component} from 'react';

const options_ProvinceCity = [{
  value: 'zhejiang',
  label: '浙江',
  children: [{
    value: 'hangzhou',
    label: '杭州',
    children: [{
      value: 'xihu',
      label: '西湖',
    }, {
      value: 'xiasha',
      label: '下沙',
      disabled: true,
    }],
  }],
}, {
  value: 'jiangsu',
  label: '江苏',
  children: [{
    value: 'nanjing',
    label: '南京',
    children: [{
      value: 'zhonghuamen',
      label: '中华门',
    }],
  }],
}];

const options_ProvinceCity_Disabled = [{
  value: 'zhejiang',
  label: '浙江',
  children: [{
    value: 'hangzhou',
    label: '杭州',
    children: [{
      value: 'xihu',
      label: '西湖',
    }],
  }],
}, {
  value: 'jiangsu',
  label: '江苏',
  disabled: true,
  children: [{
    value: 'nanjing',
    label: '南京',
    children: [{
      value: 'zhonghuamen',
      label: '中华门',
    }],
  }],
}];

const options_ProvinceCity_PostCode = [{
  value: 'zhejiang',
  label: '浙江',
  children: [{
    value: 'hangzhou',
    label: '杭州',
    children: [{
      value: 'xihu',
      label: '西湖',
      code:752100
    }],
  }],
}, {
  value: 'jiangsu',
  label: '江苏',
  children: [{
    value: 'nanjing',
    label: '南京',
    children: [{
      value: 'zhonghuamen',
      label: '中华门',
      code: 453400
    }],
  }],
}];

const options_Province = [{
  value: 'zhejiang',
  label: '浙江',
  isLeaf: false,
}, {
  value: 'jiangsu',
  label: '江苏',
  isLeaf: false,
}];

const options_CustomField = [{
  code: 'zhejiang',
  name: 'Zhejiang',
  items: [{
    code: 'hangzhou',
    name: 'Hangzhou',
    items: [{
      code: 'xihu',
      name: 'West Lake',
    }],
  }],
}, {
  code: 'jiangsu',
  name: 'Jiangsu',
  items: [{
    code: 'nanjing',
    name: 'Nanjing',
    items: [{
      code: 'zhonghuamen',
      name: 'Zhong Hua Men',
    }],
  }],
}];

class DataInput_Cascader extends Component {
  state = {
    text: '未选择',
    options_Province
  };

  onChange = (value) =>{
    console.log(value);
  }

  onChange_2 = (value, selectedOptions) => {
    this.setState({
      text: selectedOptions.map(o => o.label).join(', '),
    });
  }
  displayRender = (label) =>{
    return label[label.length - 1];
  }

  handleAreaClick_7 = (e, label, option) =>{
    console.log('clicked', label, option);
    e.stopPropagation();
  }
  displayRender_7 = (labels, selectedOptions) => labels.map((label, i) => {
    const option = selectedOptions[i];
    if (i === labels.length - 1) {
      return (
        <span key={option.value}>
        {label} (<a onClick={e => this.handleAreaClick_7(e, label, option)}>{option.code}</a>)
      </span>
      );
    }
    return <span key={option.value}>{label} / </span>;
  });

  filter = (inputValue, path) =>{
    return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
  }


  loadData = (selectedOptions) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;

    // load options lazily
    setTimeout(() => {
      targetOption.loading = false;
      targetOption.children = [{
        label: `${targetOption.label} Dynamic 1`,
        value: 'dynamic1',
      }, {
        label: `${targetOption.label} Dynamic 2`,
        value: 'dynamic2',
      }];
      this.setState({
        options: [...this.state.options_Province],
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <div>1.基本</div>
        <div>省市区级联</div>
        <Cascader options={options_ProvinceCity} onChange={this.onChange} placeholder="Please select" />

        <br/>
        <br/>
        <br/>
        <div>2.自定义显示</div>
        <div>切换按钮和结果分开</div>
        <span>
        {this.state.text}
          &nbsp;
          <Cascader options={options_ProvinceCity} onChange={this.onChange_2}>
            <a href="#">选择景点</a>
          </Cascader>
        </span>

        <br/>
        <br/>
        <br/>
        <div>3.移入展开</div>
        <div>通过移入展开下级菜单，点击完成选择</div>
        <Cascader
          options={options_ProvinceCity}
          expandTrigger="hover"
          displayRender={this.displayRender}
          onChange={this.onChange}
        />

        <br/>
        <br/>
        <br/>
        <div>4.禁用选项</div>
        <div>通过指定 options 里的 disabled 字段。</div>
        <Cascader options={options_ProvinceCity_Disabled} onChange={this.onChange} />

        <br/>
        <br/>
        <br/>
        <div>5.选择即改变</div>
        <div>这种交互允许只选中父级选项</div>
        <Cascader options={options_ProvinceCity} onChange={this.onChange} changeOnSelect />

        <br/>
        <br/>
        <br/>
        <div>6.大小</div>
        <div>不同大小的级联选择器</div>
        <div>
          <Cascader size="large" options={options_ProvinceCity} onChange={this.onChange} /><br /><br />
          <Cascader options={options_ProvinceCity} onChange={this.onChange} /><br /><br />
          <Cascader size="small" options={options_ProvinceCity} onChange={this.onChange} /><br /><br />
        </div>

        <br/>
        <br/>
        <br/>
        <div>7.自定义已选项</div>
        <div>例如给最后一项加上邮编链接</div>
        <Cascader
          options={options_ProvinceCity_PostCode}
          defaultValue={['zhejiang', 'hangzhou', 'xihu']}
          displayRender={this.displayRender_7}
          style={{ width: '230px' }}
        />

        <br/>
        <br/>
        <br/>
        <div>8.搜索</div>
        <div>可以直接搜索选项并选择</div>
        <Cascader
          options={options_ProvinceCity}
          onChange={this.onChange}
          placeholder="Please select"
          showSearch={this.filter}
        />

        <br/>
        <br/>
        <br/>
        <div>9.动态加载选项</div>
        <div>使用 loadData 实现动态加载选项</div>
        <div>注意：loadData 与 showSearch 无法一起使用。</div>
        <Cascader
          options={this.state.options_Province}
          loadData={this.loadData}
          onChange={this.onChange}
          changeOnSelect
        />

        <br/>
        <br/>
        <br/>
        <div>10.自定义字段名</div>
        <Cascader fieldNames={{ label: 'name', value: 'code', children: 'items' }}
                  options={options_CustomField} onChange={this.onChange} placeholder="Please select" />
      </div>
    );
  }
}

export default DataInput_Cascader;
