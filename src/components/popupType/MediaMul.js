import React from 'react';
import {Button,Input} from 'antd';
import Media from './Media';
import styles from './style.less';
import {Obj,isArray} from 'yjtec-support';
const {TextArea} = Input;
export default class MediaMul extends React.Component{
  state ={
    list:[],
    activeId:0
  }
  componentDidMount(){
    const {data} = this.props;
    if(isArray(data) && data.length > 0){
      this.setState({
        list:data
      })
    }
  }
  componentWillUpdate(nextProps,nextState){
    if(nextState.activeId == 0 && nextState.list.length > 0){
      this.setState({
        activeId:nextState.list[0].id
      })
    }

    if(
      nextState.activeId != 0 && 
      nextState.list.length > 0 &&
      !nextState.list.some(item => item.id == nextState.activeId)
      ){ //如果当前activeID呗删除了
      this.setState({
        activeId:nextState.list[0].id
      })
    }

    //触发改变
    if(
      !Obj.isEqual(nextState.list,this.state.list) && 
      !Obj.isEqual(nextState.list,nextProps.data)
    ){
      const {onChange} = this.props;
      if(onChange) onChange(nextState.list);
    }
  }
  handleChange = list =>{
    this.setState({
      list:list
    })
  }
  handleClick = item => {
    this.setState({
      activeId:item.id
    })
  }
  handleText = e => {
    const {activeId} = this.state;
    const list = this.state.list.map(item => item.id == activeId ? {...item ,text:e.target.value} : item)
    this.setState({list})
  }
  handleSetAllText = () => {
    const {list,activeId} = this.state;
    const [current] = list.filter(item => item.id == activeId);
    const re = list.map(item => ({...item,text:current.text}));
    this.setState({
      list:re
    })
  }
  render(){
    const {list,activeId} = this.state;
    const [current] = list.filter(item => item.id == activeId);
    return(
      <div>
        <Media activeId={activeId} data={list} onChange={this.handleChange} onClick={this.handleClick} />
        <div className={styles.mb10}></div>
        {current && (
          <div>
            <p>
              文字内容
              <a href="javascript:void(0)" style={{float:'right',fontWeight:'bold'}} onClick={this.handleSetAllText}>应用到所有</a>
            </p>
            <div className={styles.textAreaDiv}>
              <TextArea rows={3} maxLength='1000' value={current.text} onChange={this.handleText} placeholder="为图片添加文字描述"  />
            </div>
          </div>
        )}
        
      </div>
    )
  }
}