import React from "react";
import { Component } from "react";
import { ItemBox, Right, Content, Help } from '@/components/';
import {Select,Switch} from 'antd';
import style from './style.less';
import { helpShow } from '@/utils/help';
import { SliderSingle, Button } from '@/components/Form';

var optionData = [
  {id: 1,value: 1,label: '场景嵌入式'} 
  // {id:2,value:2,label:'弹幕式'},
];
var Option = Select.Option;
export default class CommentEdit extends React.Component {
  
  state = {
    state:true,
    content_state:true,
    type:1
  }

  commentState = e =>{
    this.setState({
      state: e
    },()=>{this.save()})
  }

  commentContent = e => {
    this.setState({
      content_state: e
    },()=>{this.save()})
  }

  handleEntryMode = value =>{
    this.setState({
      type:value
    },()=>{this.save()})
  }

  save = () => {
    this.props.onChange(this.state);
  }

  render() {
    const {state,content_state,type} = this.state;
    return (
      <div>
        <ItemBox>
          <div className={style.title}>
            <span className={style.checkboxC}>
              <Switch size="small" checked={state} onClick={(e)=>this.commentState(e)}/>
            </span>
            说一说功能
            <div style={{clear:'both'}}></div>
            <div className={style.tips}>
              注：关闭后所有人将不能对作品发表说一说，项目内以前的说一说将不再显示
            </div>
          </div>

          <div className={style.title} style={{marginTop: '20px'}}>
            <span className={style.checkboxC}>
              <Switch size="small" checked={content_state} onClick={(e)=>this.commentContent(e)}/>
            </span>
            说一说内容
            <div style={{clear:'both'}}></div>
            <div className={style.tips}>
              注：关闭该功能后，浏览作品时说一说内容默认隐藏
            </div>
          </div>

          <div className={style.title} style={{marginTop: '20px'}}>
            说一说展示类型
            <div style={{clear:'both'}}></div>
            <div className={style.selectDiv} style={{marginTop: '10px'}}>
              <Select placeholder="选择展示方式" name="imageurl" value={type} style={{width:'100%'}} onChange={this.handleEntryMode}>
                {optionData.map((item,index)=> (
                  <Option key={index} value={item.value}>{item.label}</Option>
                ))}
              </Select>
            </div>
          </div>
        </ItemBox>
      </div>
    );
  }
}
