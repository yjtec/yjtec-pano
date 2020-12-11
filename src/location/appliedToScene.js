import React from 'react';
import { ItemBox,TextCss,Help } from '@/components/';
import { Button } from 'antd';
import Modal from '@/components/ApplyToScene';
import styles from './style.less';
import {Obj} from 'yjtec-support';

export default class Text extends React.Component{
  constructor(props) {
    super(props);
    const {scenes} = props;
    this.state = {
      selectSceneVisible:false,
      categoryArr:scenes ? scenes.data.category : [],
      scenesArr:scenes ? scenes.data.scenes : [],
    }
  }

  componentDidUpdate(prevProps,prevState){
    const {scenes} = this.props;
    
    if (scenes && scenes.data && scenes.data.scenes){
      if (!Obj.isEqual(prevState.categoryArr,scenes.data.category) || !Obj.isEqual(prevState.scenesArr,scenes.data.scenes)) {
        this.setState({
          ...this.state,
          categoryArr:scenes.data.category,
          scenesArr:scenes.data.scenes
        })
      }
    }
  }

  appliedToScene=()=>{
    this.setState({
      selectSceneVisible: true
    })
  }
  onCancelAppliedToScene=()=>{
    this.setState({
      selectSceneVisible: false
    })
  }
  setAllScene=(data,sceneIds)=>{
    this.props.onSetAll(data,sceneIds)
  }
  render(){
    const {selectSceneVisible,categoryArr,scenesArr} = this.state;
    return(
      <div>
        <Button onClick={()=>this.appliedToScene()} style={{padding:'0 5px',height:'auto',background:'none',fontSize:'12px',color:'#fff',borderColor: '#008aff'}}>
          应用到
        </Button>
        <Modal
          visible={selectSceneVisible}
          title='选择场景'
          onCancel={this.onCancelAppliedToScene}
          categoryArr={categoryArr}
          scenesArr={scenesArr}
          data={''}
          onOk={this.setAllScene}
        >
        </Modal>
      </div>
    )
  }
}