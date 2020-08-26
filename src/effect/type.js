import React from 'react';
import {Select} from 'antd';

const Option = Select.Option;
class Type extends React.Component{
  
  render() {
    const {value, effectList} = this.props;
    return (
      <div>
        <Select value={value} name='imageurl' placeholder="请选择特效" style={{width:'100%'}} onChange={this.props.onChange}>
          {effectList.map((item,index)=> (
            <Option key={index} value={item.value}>{item.label}</Option>
          ))}
          <Option value="sunlight" >太阳光</Option>
          <Option value="custom" >自定义</Option>
        </Select>
      </div>
    );
  }
}
export default Type;