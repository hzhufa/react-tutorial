import { Checkbox,Button,Row, Col  } from 'antd';
import {Component} from 'react';

const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: '苹果', value: 'Apple' },
  { label: '梨子', value: 'Pear' },
  { label: '橙子', value: 'Orange' ,disabled: true },
];
const optionsWithDisabled = [
  { label: '苹果', value: 'Apple' },
  { label: '梨子', value: 'Pear' },
  { label: '橙子', value: 'Orange', disabled: false },
];

const defaultCheckedList = ['Apple', 'Orange'];

class DataInput_CheckBox extends Component {
  state = {
    checked: true,
    disabled: false,
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
  };
  toggleChecked = () => {
    this.setState({ checked: !this.state.checked });
  }

  toggleDisable = () => {
    this.setState({ disabled: !this.state.disabled });
  }
  onChange = (e) =>{
    console.log(`checked = ${e.target.checked}`);
  }

  onChange_3 = (e) => {
    console.log('checked = ', e.target.checked);
    this.setState({
      checked: e.target.checked,
    });
  }

  onChange_4 = (checkedValues) =>{
    console.log('checked = ', checkedValues);
  }

  onChange_5 = (checkedList) => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
      checkAll: checkedList.length === plainOptions.length,
    });
  }

  onCheckAllChange = (e) => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  }

  render() {
    const label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${this.state.disabled ? 'Disabled' : 'Enabled'}`;
    return (
      <div>
        <div>1.基本用法</div>
        <Checkbox onChange={this.onChange}>Checkbox</Checkbox>

        <br/>
        <br/>
        <br/>
        <div>2.不可用</div>
        <div>
          <Checkbox defaultChecked={false} disabled />
          <br />
          <Checkbox defaultChecked disabled />
        </div>

        <br/>
        <br/>
        <br/>
        <div>3.受控的 Checkbox</div>
        <div>
          <p style={{ marginBottom: '20px' }}>
            <Checkbox
              checked={this.state.checked}
              disabled={this.state.disabled}
              onChange={this.onChange_3}
            >
              {label}
            </Checkbox>
          </p>
          <p>
            <Button
              type="primary"
              size="small"
              onClick={this.toggleChecked}
            >
              {!this.state.checked ? 'Check' : 'Uncheck'}
            </Button>
            <Button
              style={{ marginLeft: '10px' }}
              type="primary"
              size="small"
              onClick={this.toggleDisable}
            >
              {!this.state.disabled ? 'Disable' : 'Enable'}
            </Button>
          </p>
        </div>


        <br/>
        <br/>
        <br/>
        <div>4.Checkbox 组</div>
        <div>方便的从数组生成 Checkbox 组</div>
        <div>
          <CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={this.onChange_4} />
          <br /><br />
          <CheckboxGroup options={options} defaultValue={['Pear']} onChange={this.onChange_4} />
          <br /><br />
          <CheckboxGroup options={optionsWithDisabled}  disabled defaultValue={['Apple']} onChange={this.onChange_4} />
        </div>

        <br/>
        <br/>
        <br/>
        <div>5.全选</div>
        <div>在实现全选效果时，你可能会用到 indeterminate 属性。</div>
        <div>
          <div style={{ borderBottom: '1px solid #E9E9E9' }}>
            <Checkbox
              indeterminate={this.state.indeterminate}
              onChange={this.onCheckAllChange}
              checked={this.state.checkAll}
            >
              Check all
            </Checkbox>
          </div>
          <br />
          <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChange_5} />
        </div>

        <br/>
        <br/>
        <br/>
        <div>布局</div>
        <div>Checkbox.Group 内嵌 Checkbox 并与 Grid 组件一起使用，可以实现灵活的布局。</div>
        <Checkbox.Group style={{ width: '100%' }} onChange={this.onChange_4}>
          <Row>
            <Col span={8}><Checkbox value="A">A</Checkbox></Col>
            <Col span={8}><Checkbox value="B">B</Checkbox></Col>
            <Col span={8}><Checkbox value="C">C</Checkbox></Col>
            <Col span={8}><Checkbox value="D">D</Checkbox></Col>
            <Col span={8}><Checkbox value="E">E</Checkbox></Col>
          </Row>
        </Checkbox.Group>
      </div>
    );
  }
}

export default DataInput_CheckBox;
