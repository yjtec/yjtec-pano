import React,{Component} from 'react';
import style from './style.less';
import {KrEditUrl} from '@/utils/url.config';
export default class ImgroundActive extends Component{
  constructor(props) {
    super(props);
    this.state={
      left:props.left,
      top:props.top,
      rotate:0
    }
  }
  render(){
    const {left,top,rotate} = this.state;
    return (
      <div className={style.active} style={{
        left:`${left-20}px`,
        top:`${top-20}px`,
        transform: `rotate(${rotate}deg)`
      }}>
        <img src={KrEditUrl + 'images/round.png'} width="" />
        <div className={style.center} onMouseDown={this.handleDown} ref={ele => this.dragEle = ele}  />
        <div className={style.pointer} onMouseDown={this.hanldePoinerDown} ref={ele => this.pointerEle = ele}  />
      </div>
    )
  }
}