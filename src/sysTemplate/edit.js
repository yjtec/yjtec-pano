import React from "react";
import { Component } from "react";
import { ItemBox, Content, Help } from '@/components/';
import {Switch} from 'antd';
import styles from './style.less';
import { helpShow } from '@/utils/help';
import Temp1 from '../assets/images/temp1.jpg';

const tempList = [
  {key:1,type:1,title:'系统模板',img:Temp1,url:'',dec:'系统模板可自定义界面UI'},
  // {key:2,type:2,title:'系统模板',img:Temp1,url:'',dec:'系统模板可自定义界面UI'},
]
export default class SysTempEdit extends React.Component {
  
  state = {
    type:1
  }

  componentDidMount() {
    const {data} = this.props;
    this.setState({
      ...data 
    });
  }

  setType = (e) => {
    this.setState({
      type: e
    },()=>this.save());
  }

  save = () => {
    this.props.onChange(this.state);
  }

  render() {
    const {type} = this.state;
    return (
      <div>
        <ItemBox>
          {
            tempList.map(item=>{
              return (
                <div key={item.key} style={{marginBottom:'20px'}}>
                  <div className={styles.title} onClick={()=>this.setType(item.type)}>
                    <span className={styles.checkboxC}>
                      <Switch size="small" checked={type == item.type ? true : false}/>
                    </span>
                    {item.title}
                    <div style={{clear:'both'}}></div>
                  </div>
                  <div className={styles.tempListC}>
                    <div className={styles.tempListImg}>
                      <img src={item.img} alt={item.title}/>
                    </div>
                    <div className={styles.tips}>
                      {item.dec}
                    </div>
                  </div>
                </div>
              )
            })
          }
        </ItemBox>
      </div>
    );
  }
}
