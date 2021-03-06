import { Component } from "react";
import {ItemBox,Right,Content,Help} from '@/components/';
import {Button,Select,SliderSingle} from '@/components/Form';
import {Checkbox,Row,Col,Drawer,Icon} from 'antd';
import styles from './style.less';

import Media from '@/components/MediaModal';

import Modal from '@/components/ApplyToScene';

import {Obj} from 'yjtec-support';
import {helpShow} from '@/utils/help';

const defaultData = {
  media: false,
  musicUrl:'',
  musicTitle:'上传音乐格式为MP3',
  loop:0,
  volume:100
}
class Music extends Component {
  state={
    userMediaVisible: false,
    musicUrl:'',
    musicTitle:'上传音乐格式为MP3',
    loop:0,
    volume:100,
    defaultPlay:true,
    sceneListVisible:false,
    categoryArr:[],
    scenesArr:[]
  }

  componentDidMount(){
    const {data,scenes} = this.props;
    let categoryArr = scenes.data.category;
    let scenesArr = scenes.data.scenes;

    this.setState({
      ...defaultData,...data,
      categoryArr: categoryArr,
      scenesArr: scenesArr
    })
  }

  componentDidUpdate(prevProps,prevState) {
    const {data,scenes} = this.props;
    let categoryArr = scenes.data.category;
    let scenesArr = scenes.data.scenes;
    if(!Obj.isEqual(prevProps.data,this.props.data)){
      this.setState({
        ...defaultData,...this.props.data
      })
    }
    if (!Obj.isEqual(prevState.categoryArr,categoryArr) || !Obj.isEqual(prevState.scenesArr,scenesArr)) {
      this.setState({
        ...this.state,
        categoryArr:categoryArr,
        scenesArr:scenesArr
      })
    }
  }

  
  //是否循环
  onChange=(e)=>{
    this.setState({
      loop:e.target.checked == true ? 0 : 1
    },()=>{
      this.runChange()
    })
  }
  //删除音乐
  del=()=>{
    this.setState({
      ...defaultData
    },()=>{
      this.props.onDel()
    })
  }

  //应用到所有场景
  appliedToScene=()=>{
    this.setState({
      sceneListVisible: true
    })
  }
  //关闭应用到所有场景
  onCancelAppliedToScene=()=>{
    this.setState({
      sceneListVisible: false
    })
  }
  //设置所有场景
  setAllScene=(url,sceneIds)=>{
    this.props.setAllScene(url,sceneIds)
  }
  //是否默认播放
  handlePlay=(e)=>{
    this.setState({
      defaultPlay:e.target.checked
    },()=>{
      this.runChange();
    })
  }

  //打开素材库选择窗口
  openMediaModal = () => {
    this.setState({
      userMediaVisible:true
    })
  }
  //关闭素材库选择窗口
  closeMediaModal = () => {
    this.setState({
      userMediaVisible:false
    })
  }
  //选择素材返回值
  selectMedia = (arr) => {
    this.setState({
      musicUrl: arr[0].path.path,
      musicTitle: arr[0].name
    },()=>{
      this.runChange();
    });
    this.closeMediaModal();
  }

  //设置音乐音量
  setVolume = value => {
    this.setState({
      volume: value
    },()=>{
      this.runChange();
    });
  }

  runChange=()=>{
    const {musicUrl,musicTitle,loop,defaultPlay,volume} = this.state;
    this.props.onChange({
      musicUrl: musicUrl,
      musicTitle: musicTitle,
      loop: loop,
      defaultPlay: defaultPlay,
      volume:volume
    })
  }

  render(){
    const {musicUrl,musicTitle,loop,defaultPlay,sceneListVisible,categoryArr,scenesArr,userMediaVisible,volume} = this.state;

    return(
      <ItemBox>
        <div className={styles.title}>
          <span className={styles.checkboxC} onClick={()=>this.del()}>
            删除
          </span>
          <span style={{float:'left'}}>{this.props.title}</span>
          {helpShow && 
            (
              <div style={{float:'left', width:'18px', height:'18px',position:'relative',marginLeft:'5px'}}>
                <Help link={'music'} style={{fontSize:'14px',color:'#999999',float:'left'}} />
              </div>
            )
          }
          <div style={{clear:'both'}}></div>
        </div>
        <div className={styles.musicBox}>
          <Row>
            <Col span={8}>
              <div className={styles.musicIcon}>
                {musicUrl ? <Icon type="customer-service" /> : <Icon type="plus" />}
              </div>
            </Col>
            <Col span={16}>
              <div className={styles.musicRight}>
                <p>
                  {musicTitle ? musicTitle : '上传音乐格式为MP3'}
                </p>
                <div onClick={this.openMediaModal}>
                  <Button title='选择音乐' />
                </div>
              </div>
            </Col>
          </Row>
          <div style={{clear:'both'}}></div>
        </div>

        <div className={styles.title} style={{marginTop:10}}>
          设置音量 <i style={{color:'#999999'}}>(仅PC和安卓端有效)</i>
        </div>
        <div className={styles.sliderDiv}>
          <SliderSingle
            defaultValue= {volume}
            max= {100}
            min= {1}
            step= {1}
            onChange={value => this.setVolume(value)}
          />
        </div>

        <div className={styles.title} style={{marginTop:10}}>
          <span className={styles.checkboxC}>
            <Checkbox checked={defaultPlay} onChange={this.handlePlay} className={styles.checkbox}></Checkbox>
          </span>
          默认开启 <i style={{color:'#999999'}}>(进入场景自动播放)</i>
        </div>

        <div className={styles.title} style={{marginTop:10}}>
          <span className={styles.checkboxC}>
            <Checkbox checked={loop == 0 ? true : false} onChange={this.onChange} className={styles.checkbox}></Checkbox>
          </span>
          循环播放 <i style={{color:'#999999'}}>(不勾选则只播放1次)</i>
        </div>

        <div className={styles.title} style={{margin:'10px 0 0 0',lineHeight:'22px'}}>
          <span className={styles.checkboxC}>
            <Button onClick={()=>this.appliedToScene()} style={{padding:'0 5px',height:'auto',background:'none',fontSize:'12px'}} title="选择场景"/>
          </span>
          应用到:
        </div>
        <Modal
          visible={sceneListVisible}
          title='选择场景'
          style={{color:'#000000'}}
          onCancel={this.onCancelAppliedToScene}
          categoryArr={categoryArr}
          scenesArr={scenesArr}
          data={{musicUrl:musicUrl,musicTitle:musicTitle,loop:loop,defaultPlay:defaultPlay,volume:volume}}
          onOk={this.setAllScene}
        >
        </Modal>

        <Media
          title='音乐素材库'
          mediaType={2}
          tabType={1}
          multipleChoices={false}
          width='900px'
          visible={userMediaVisible}
          onChange={this.selectMedia}
          onCancel={this.closeMediaModal}
        />
      </ItemBox>
    )
  }
}
export default Music;