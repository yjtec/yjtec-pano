import React from 'react';

import {ItemBox,Right,Content,Help} from '@/components/';
import {Button,Layout} from 'antd';
import {Slider} from '@/components/Form/';
import View from './pano';
import styles from './style.less';
import {helpShow} from '@/utils/help';

import Modal from '@/components/ApplyToScene';

export default class ViewEdit extends React.Component{

  state = {
    selectSceneVisible:false,
  }

  handleView = (k,v) => {
    this.props.editView(k,v);
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
    const { selectSceneVisible } = this.state;
    const { viewdata,flag,categoryArr,scenesArr } = this.props;
    return(
      <div style={{height:"inherit"}}>
        <div style={{position:'absolute','left':'50%',marginLeft:'-196px',marginTop:'100px',top:'50%'}}>
          <Button type="primary" onClick={this.props.setView}>把当前视角设置为默认视角</Button>
        </div>
        <Right>
          <ItemBox>
            <div style={{marginBottom:'10px'}}>
              <span style={{float:'left'}}>当前初始视角</span>
              {helpShow && 
                (
                  <div style={{float:'left', width:'18px', height:'18px', position:'relative',marginLeft:'5px'}}>
                    <Help link={'view'} style={{fontSize:'14px',color:'#999999',float:'left'}} />
                  </div>
                )
              }
              <div style={{clear:'both'}}></div>
            </div>
            { flag && <View />}
          </ItemBox>
          <ItemBox>
            <p>视角(FOV)范围设置</p>
            <Slider 
              onChange={(value)=>this.handleView('fov',value)}
              min={1}
              max={179}
              label={['最近','初始','最远']}
              defaultValue={[
                Number(viewdata.fovmin),
                Number(viewdata.fov),
                Number(viewdata.fovmax)
              ]}
              ref={ref => this.fref = ref}
            />
          </ItemBox>
          <ItemBox>
            <p>垂直视角限制</p>
            <Slider 
              onChange={(value)=>this.handleView('v',value)}
              min={-90}
              max={90}
              defaultValue={[
                Number(viewdata.vlookatmin),
                Number(viewdata.vlookatmax)
              ]}
              label={['最低','最高']}
            />
          </ItemBox>
          <ItemBox>
            <p>水平视角限制</p>
            <Slider 
              onChange={(value)=>this.handleView('h',value)}
              min={-180}
              max={180}
              defaultValue={[
                Number(viewdata.hlookatmin),
                Number(viewdata.hlookatmax)
              ]}
              label={['最低','最高']}
            />
          </ItemBox>
          <ItemBox>
            <div className={styles.title} style={{margin:'10px 0',lineHeight:'22px'}}>
              <span className={styles.checkboxC}>
                <Button onClick={()=>this.appliedToScene()} style={{padding:'0 5px',height:'auto',background:'none',fontSize:'12px',color:'#fff',borderColor: '#008aff'}}>
                  选择场景
                </Button>
              </span>
              <span style={{float:'left'}}>应用到：</span>
              <div style={{clear:'both'}}></div>
            </div>
          </ItemBox>
          <ItemBox >
            <div style={{textAlign:'center'}}>
            <Button type="primary" onClick={this.props.reset}>恢复默认设置</Button>
            </div>
          </ItemBox>
        </Right>

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