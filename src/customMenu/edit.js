import React from "react";
import { Component } from "react";
import { ItemBox, Content, Help } from '@/components/';
import {Tabs,Row,Col,message} from 'antd';
import styles from './style.less';
import { helpShow } from '@/utils/help';
import {Button} from '@/components/Form';
import Temp1 from '../assets/images/temp1.jpg';

import MenuBtn from './menuBtn';
import MenuGroup from './menuGroup';

const { TabPane } = Tabs;
const createType = [
  {key:1,type:'button',title:'按钮'},
  {key:2,type:'group',title:'分组'}
]
export default class CustomMenuEdit extends React.Component {
  state = {
    create:false,
    activeKey: 1,
    panes:[],
    ui_data:[]
  };

  componentDidMount() {
    const {data} = this.props;
    if (JSON.stringify(data) == '{}' || !data) return;
    this.setPanes(data);
  }
  componentDidUpdate(prevProps, prevState) {
    const {data} = this.props;
    if (JSON.stringify(prevProps.data) != JSON.stringify(data)) {
      if (data) {
        this.setPanes(data);
      }
    }
  }

  setPanes = data => {
    let panes = [];
    data.map(item=>{
      panes.push({title:item.type == 'button' ? '按钮' : '分组',key:item.index,content:{}, })
    })
    this.setState({
      ...this.state ,
      panes,
      ui_data:data
    });
  }

  setCreate = () => {
    this.setState({
      create: true
    });
  }

  closeCreate = () => {
    this.setState({
      create: false
    });
  }

  add = (type) => {
    const paneItem = createType.find(item=>item.type == type);
    const { panes,activeKey,ui_data } = this.state;
    
    const newActiveKey = this.state.panes.length + 1;
    panes.push({ 
      title: paneItem.title, 
      content: {}, 
      key: newActiveKey.toString() 
    });
    ui_data.push({ 
      index:newActiveKey.toString(),
      type:type,
      data:''
    });
    this.setState({ 
      panes, 
      activeKey:newActiveKey,
      ui_data:ui_data
    });
    this.closeCreate()
  }

  switchActiveKey = activeKey => {
    this.setState({ activeKey });
  }

  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    let panes = this.state.panes.filter(pane => pane.key !== targetKey)
    let new_panes = panes.map((item,i)=>{
      return {
        ...item,
        key: (i + 1).toString()
      }
    });
    let ui_data = this.state.ui_data.filter(item => item.index !== targetKey)
    let new_ui_data = ui_data.map((item,i)=>{
      return {
        ...item,
        index: (i + 1).toString()
      }
    });
    if (new_panes.length && activeKey == targetKey) {
      if (lastIndex >= 0) {
        activeKey = new_panes[lastIndex].key;
      } else {
        activeKey = new_panes[0].key;
      }
    }else{
      activeKey = (new_panes && JSON.stringify(new_panes) != '[]') ? new_panes[0].key : 1;
    }
    this.setPanes(new_ui_data)
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  editBtn = data => {
    let new_ui_data = [];

    if (this.state.ui_data.some(item=>item.index == data.index)) {
      this.state.ui_data.map(item=>{
        if (item.index == data.index) {
          new_ui_data.push(data);
        }else{
          new_ui_data.push(item);
        }
      })
    }else{
      new_ui_data = this.state.ui_data.concat(data);
    }

    this.setState({
      ...this.state,
      ui_data:new_ui_data
    });
  }

  save = () => {
    this.props.onChange(this.state.ui_data);
    console.log(this.state.ui_data)
    message.success('菜单已保存');
  }

  render() {
    const {create,panes,ui_data} = this.state;
    let panes_data = [];
    panes.map(i=>{
      ui_data.map(j=>{
        if (i.key === j.index) {
          panes_data.push({
            ...i,
            content:{
              ...j
            }
          })
        }
      })
    })

    return (
      <div>
        <ItemBox>
          <div style={{padding:'10px 0'}}>
            {helpShow && 
              (
                <div style={{float:'right', width:'32px', height:'32px', position:'relative'}}>
                  <Help link={'custom_menu'} style={{fontSize:'24px',color:'#999999',float:'left'}} />
                </div>
              )
            }
            <div style={{width:helpShow ? '80%' : '100%',float:'left',position:'relative'}}>
              <Button title='创建' disabled={panes.length >= 3 ? true : false} style={{backgroundColor:'#008aff',color:'#fff',borderColor:'#008aff'}} onClick={()=> this.setCreate()}/>
              <div className={styles.createBtn} style={{position:'absolute',display:create ? 'block' : 'none'}}>
                {
                  createType.map(item=>(
                    <p key={item.key} onClick={()=>this.add(item.type)}>{item.title}</p>
                  ))
                }
              </div>
            </div>
            <div style={{clear:'both'}}></div>
            <div className={styles.tips}>
              注: 可添加3个按钮或分组, 每个分组最多可添加5个子按钮
            </div>
          </div>
        </ItemBox>
        <div className={styles.content}>
          {panes_data.length > 0 && <Tabs
            hideAdd
            onChange={this.switchActiveKey}
            activeKey={ this.state.activeKey.toString()}
            type="editable-card"
            onEdit={this.onEdit}
          >
            {panes_data.map(pane => {
              return(
                <TabPane tab={pane.title} key={pane.key}>
                  {pane.type == 'button' ? 
                    <MenuBtn showIcon={true} index={pane.content.index} type={pane.content.type} data={pane.content.data} onChange={this.editBtn} /> : 
                    <MenuGroup index={pane.content.index} type={pane.content.type} data={pane.content.data} onChange={this.editBtn}/>
                  }
                </TabPane>
              )
            })}
          </Tabs>}
        </div>

        <div style={{position:'absolute',bottom:'0',zIndex:'99',width:'100%',background:'#494949'}}>
          <div className={styles.lineDefaultBottom}></div>
          <ItemBox>
            <Row style={{margin:'10px -5px'}}>
              <Col span={24} style={{padding:'0 5px'}}>
                <Button title="完成" onClick={()=>this.save()}/>
              </Col>
            </Row>
          </ItemBox>
        </div>
      </div>
    );
  }
}
