import { Component } from 'react';
import {Button,Layout,Checkbox,Row,Col,Drawer,Icon} from 'antd';
import {Help} from '@/components/';
import style from './style.less';
import UploadImg from '@/components/Media';
import {ossImgMedia,ossPano} from '@/utils/oss';
import {Obj} from 'yjtec-support';

import Modal from '@/components/AllScene';
import {helpShow} from '@/utils/help';

class Pic extends Component {
  state={
    sceneListVisible: false,
  }
  delSkyImg=()=>{
    this.props.onDelSkyImg();
  }
  mediaSky=()=>{
    this.props.onSelect();
  }
  onCancel=(url)=>{
    this.props.onCancel(url);
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
        <Row>
          <Col span={24} className={style.mb10}>
            {!Obj.isNull(url) ? 
              <div className={style.defaultImg}>
                <img alt="aa" src={ossImgMedia(url,'media')} className={style.img} />
                <div className={style.delimg} onClick={()=>this.delSkyImg()}>
                  <Icon type="delete" />
                </div>
              </div> 
              : 
              <div className={style.defaultImg}>
                <span>
                  建议大小<br/>500X500
                </span>
              </div>
            }
          </Col>

          <Col span={12}>
            <Button type="primary" onClick={this.mediaSky}>
              选择图片
            </Button>
          </Col>
          <Col span={12} className={style.prompt}>
            建议大小<br/>
            500X500
          </Col>

          <UploadImg
            title='图片'
            mediaType='1'
            visible={visible}
            onCancel={this.onCancel}
            accept='.jpg,.jpeg,.png'
          />
        </Row>

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