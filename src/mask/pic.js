import { Component } from 'react';
import {Button,Layout,Checkbox,Row,Col,Drawer,Icon,Switch} from 'antd';
import {Help} from '@/components/';
import styles from './style.less';

import {mediaImgConfig} from '@/utils/oss.config';
import ItemImg from '../components/ItemImg';

import {Obj} from 'yjtec-support';

import Modal from '@/components/ApplyToScene';
import {helpShow} from '@/utils/help';
import {SliderSingle} from '@/components/Form';

const defaultData = {
  scale:1,
  distorted:false
}

class Pic extends Component {
  state={
    sceneListVisible: false,
  }

  componentDidMount() {
    const {data} = this.props;
    if (data) {
      this.setState({
        url:data.url ? data.url : '',
        scale:data.scale ? data.scale : defaultData.scale,
        distorted:data.distorted ? data.distorted : defaultData.distorted
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const {data} = this.props;
    if(JSON.stringify(prevProps.data) != JSON.stringify(data)){
      if (data) {
        this.setState({
          url:data.url ? data.url : '',
          scale:data.scale ? data.scale : defaultData.scale,
          distorted:data.distorted ? data.distorted : defaultData.distorted
        });
      }else{
        this.setState({
          url:'',
          scale:defaultData.scale,
          distorted:defaultData.distorted
        });
      }
    }
  }

  setScale = value => {
    this.setState({
      scale: value
    },()=>{this.save()})
  }
  selectImg = arr => {
    this.setState({
      url: arr[0].path.path 
    },()=>this.save())
  }
  setDistorted = e => {
    this.setState({
      distorted: e.target.checked
    },()=>this.save());
  }
  delImg=()=>{
    this.setState({
      url: '',
      scale: defaultData.scale,
      distorted: defaultData.distorted
    },()=>this.save());
  }
  save=()=>{
    const {url,scale,distorted} = this.state
    this.props.onEdit({
      url,
      scale:scale,
      distorted
    });
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
    const {title,visible,categoryArr,scenesArr} = this.props;
    const {sceneListVisible,url,scale,distorted} = this.state;
    return(
      <div>
        <div className={styles.title} style={{margin:'10px 0 10px 0',lineHeight:'22px'}}>
          <span className={styles.checkboxC}>
            <Button onClick={()=>this.appliedToScene()} style={{padding:'0 5px',height:'auto',background:'none',fontSize:'12px',color:'#fff',borderColor: '#008aff'}}>
              应用到
            </Button>
          </span>
          <span style={{float:'left'}}>{title}</span>
          {helpShow && 
            (
              <div style={{float:'left', width:'20px', height:'20px',position:'relative',marginLeft:'5px'}}>
                <Help link={'mask'} style={{fontSize:'14px',color:'#999999',float:'left'}} />
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

        {url && 
          <div>
            <div className={styles.title} style={{marginBottom:'4px',marginTop:'10px'}}>
              调整大小(倍)
            </div>
            <div className={styles.sliderDiv}>
              <SliderSingle
                defaultValue= {scale}
                max= {1.5}
                min= {0.2}
                step= {0.01}
                onChange={value => this.setScale(value)}
              />
            </div>

            <div className={styles.title}>
              <span className={styles.checkboxC}>
                <Checkbox checked={distorted} onChange={this.setDistorted} className={styles.checkbox}></Checkbox>
              </span>
              <span style={{float:'left'}}>跟随全景转动</span>
              <div style={{clear:'both'}}></div>
            </div>
          </div>
        }
        


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