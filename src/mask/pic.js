import { Component } from 'react';
import {Button,Layout,Checkbox,Row,Col,Drawer,Icon} from 'antd';
import {Help} from '@/components/';
import style from './style.less';

import {mediaImgConfig} from '@/utils/oss.config';
import ItemImg from '../components/ItemImg';

import {Obj} from 'yjtec-support';

import Modal from '@/components/AllScene';
import {helpShow} from '@/utils/help';

class Pic extends Component {
  state={
    sceneListVisible: false,
  }
  delImg=()=>{
    this.props.onDelImg();
  }
  selectImg=(arr)=>{
    this.props.selectImg(arr[0].path.path);
  }
  appliedToScene=()=>{
    this.setState({
      sceneListVisible: true
    })
  }
  onCancelAppliedToScene=()=>{
    this.setState({
      sceneListVisible: false
    })
  }
  setAllScene=(data,sceneIds)=>{
    this.props.apply(data,sceneIds);
  }
  render(){
    const {title,visible,url,categoryArr,scenesArr} = this.props;
    const {sceneListVisible} = this.state;
    return(
      <div>
        <div className={style.title} style={{margin:'10px 0 10px 0',lineHeight:'22px'}}>
          <span className={style.checkboxC}>
            <Button onClick={()=>this.appliedToScene()} style={{padding:'0 5px',height:'auto',background:'none',fontSize:'12px',color:'#fff',borderColor: '#008aff'}}>
              应用到
            </Button>
          </span>
          <span style={{float:'left'}}>{title}</span>
          {helpShow && 
            (
              <div style={{float:'left', width:'20px', height:'20px',position:'relative',marginLeft:'5px'}}>
                <Help style={{fontSize:'14px',color:'#999999',float:'left'}} />
              </div>
            )
          }
          <div style={{clear:'both'}}></div>
        </div>
        <ItemImg 
          url={url ? mediaImgConfig(url,'img') : ''}
          imgSize='500X500'
          onChange={this.selectImg}
          onDel={this.delImg}
        />

        <Modal
          visible={sceneListVisible}
          title='选择场景'
          onCancel={this.onCancelAppliedToScene}
          categoryArr={categoryArr}
          scenesArr={scenesArr}
          data={url}
          onOk={this.setAllScene}
        >
        </Modal>
      </div>
    )
  }
}
export default Pic;