import React,{Component} from 'react';
import {isStr} from 'yjtec-support';
import {Input} from '@/components/Form';
import {message} from 'antd';
export default class Phone extends Component{
  
  handleChange = (value) => {
    this.props.onChange(value)
  }

  inputOnBlur = (e) => {
    const str = e.target.value;
    const r = str.match(/(^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$)|(^((\(\d{3}\))|(\d{3}\-))?(1[3456789]\d{9})$)|(^(400)-(\d{3})-(\d{4}$))|(^(400)-(\d{4})-(\d{3}$))|(^(800)-(\d{4})-(\d{3}$))|(^(800)-(\d{3})-(\d{4}$))/);
    if (r == null) {
      message.error('请输入正确的手机或电话号码')
    }else{
      this.handleChange(str)
    }
  }

  render(){
    const {phone} = this.props;
    return (
      <div>
        <div style={{marginBottom:'5px'}}>电话号码</div>
        <Input placeholder="请输入座机/手机号" onChange={value => this.handleChange(value)} value={phone.phone} onBlur={this.inputOnBlur} style={{marginBottom:'5px'}}/>
        <div>例:400-6111-360或0371-56666020或13888889999</div>
      </div>
    )
  }
}