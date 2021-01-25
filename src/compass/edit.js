import React from 'react';
import {Input,message,Button} from 'antd';
import {Drawer,ItemBox} from '@/components/';
// import {Button} from '@/components/Form';
import styles from './style.less';
import ring from '../assets/images/compass_ring.png';
import plate from '../assets/images/compass_plate.png';
import pointer from '../assets/images/compass_pointer.png';

import {mediaImgConfig} from '@/utils/oss.config';
import ItemImg from '../components/ItemImg';

import Modal from '@/components/ApplyToScene';
import {helpShow} from '@/utils/help';


export default class CompassEdit extends React.Component {
  state = {
    angle:0,
    currentAngle:0,
    sceneListVisible: false,
  }

  componentDidMount() {
    const {data,krpano} = this.props;
    this.setState({
      angle:data && data.angle ? data.angle : 0
    });

    krpano.set('events.onviewchanged',()=>{
      this.scrollFunc()
    });
    this.scrollFunc()
  }

  componentDidUpdate(prevProps, prevState) {
    const {data,krpano} = this.props;
    if (JSON.stringify(data) != JSON.stringify(prevProps.data)) {
      if (data) {
        this.setState({
          angle:data.angle ? data.angle : 0
        });
      }
    }

    krpano.set('events.onviewchanged',()=>{
      this.scrollFunc()
    });
  }

  scrollFunc = () => {
    const {krpano} = this.props;
    const currentAngle = Number(krpano.get('view.hlookat'));
    let newAngle = 0;
    if (-360 <= currentAngle && currentAngle <= 360) {
      if (currentAngle >= 0) {
        newAngle = currentAngle;
      }else{
        newAngle = 360 + currentAngle;
      }
    }else if (currentAngle > 360) {
      newAngle = parseInt(currentAngle % 360)
    }else{
      newAngle = 360 + parseInt(currentAngle % 360)
    }
    this.setState({
      currentAngle: parseInt(newAngle)
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
  
  save = () => {
    this.setState({
      angle: this.state.currentAngle
    },()=>this.props.onSave({angle:this.state.currentAngle}));
  }

  setAllScene=(data,sceneIds)=>{
    this.props.apply(data,sceneIds);
  }

  render() {
    const {angle,currentAngle,sceneListVisible} = this.state;
    const {visible,categoryArr,scenesArr} = this.props;
    const helpShow = false;

    return (
      <div>
        <ItemBox>
          <div className={styles.title} style={{margin:'10px 0 10px 0',lineHeight:'22px'}}>
            <span className={styles.checkboxC}>
              <Button onClick={()=>this.appliedToScene()} style={{padding:'0 5px',height:'auto',background:'none',fontSize:'12px',color:'#fff',borderColor: '#008aff'}}>
                应用到
              </Button>
            </span>
            <span style={{float:'left',lineHeight:'22px'}}>指南针</span>
            {helpShow && 
              (
                <div style={{float:'left', width:'20px', height:'20px',position:'relative',marginLeft:'5px'}}>
                  <Help link={'compass'} style={{fontSize:'14px',color:'#999999',float:'left'}} />
                </div>
              )
            }
            <div style={{clear:'both'}}></div>
          </div>
          <div className={styles.compassEdit}>
            <div className={styles.tips}>
              <p>
                <span>正北角度偏移量（度）： {parseInt(currentAngle)}</span>
                注：请旋转场景视角到正北角度，以获得当前场景的正北角度偏移量
              </p>
            </div>
          </div>
        </ItemBox>
        <ItemBox>
          <div className={styles.compass}>
            <img src={ring} alt='plate' className={styles.ring} />
            <img src={plate} alt='plate' className={styles.plate} />
            <img src={pointer} alt='pointer' className={styles.pointer} style={{transform: 'translate(-50%, -50%)' + 'rotate(' + (currentAngle - angle) + 'deg)'}} />
          </div>
        </ItemBox>
        <ItemBox>
          <Button type='primary' onClick={()=> this.save()} style={{margin:'10px 0 0 0',width:'100%'}}>
            应用当前角度为正北方向
          </Button>
          <div className={styles.tips}>
              <p>
                注：编辑后将自动开始指南针功能，如需关闭请前往《基础设置》
              </p>
            </div>
        </ItemBox>

        <Modal
          visible={sceneListVisible}
          title='选择场景'
          onCancel={this.onCancelAppliedToScene}
          categoryArr={categoryArr}
          scenesArr={scenesArr}
          data={{angle:angle}}
          onOk={this.setAllScene}
        >
        </Modal>
      </div>
    );
  }
}