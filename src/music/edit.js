import { Component } from "react";
import {ItemBox,Right,Content,Help} from '@/components/';
import {Button,Select} from '@/components/Form';
import {Checkbox,Row,Col,Drawer,Icon} from 'antd';
import style from './style.less';

import UserMedia from '@/components/MediaModal/UserMedia';

import Modal from '@/components/AllScene';

import {Obj} from 'yjtec-support';
import {helpShow} from '@/utils/help';

const defaultData = {
  media: false,
  musicUrl:'',
  musicTitle:'上传音乐格式为MP3',
  loop:0
}
class Music extends Component {
  state={
    userMediaVisible: false,
    musicUrl:'',
    musicTitle:'上传音乐格式为MP3',
    loop:0,
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

  runChange=()=>{
    const {musicUrl,musicTitle,loop,defaultPlay} = this.state;
    this.props.onChange({
      musicUrl: musicUrl,
      musicTitle: musicTitle,
      loop: loop,
      defaultPlay: defaultPlay
    })
  }

  render(){
    const {musicUrl,musicTitle,loop,defaultPlay,sceneListVisible,categoryArr,scenesArr,userMediaVisible} = this.state;

    return(
      <ItemBox>
        <div className={style.title}>
          <span className={style.checkboxC} onClick={()=>this.del()}>
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
        <div className={style.musicBox}>
          <Row>
            <Col span={8}>
              <div className={style.musicIcon}>
                {musicUrl ? <Icon type="customer-service" /> : <Icon type="plus" />}
              </div>
            </Col>
            <Col span={16}>
              <div className={style.musicRight}>
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
        <div className={style.title} style={{marginTop:10}}>
          <span className={style.checkboxC}>
            <Checkbox checked={loop == 0 ? true : false} onChange={this.onChange} className={style.checkbox}>是否循环</Checkbox>
          </span>
          循环播放
        </div>

        <div className={style.title} style={{marginTop:10}}>
          <span className={style.checkboxC}>
            <Checkbox checked={defaultPlay} onChange={this.handlePlay} className={style.checkbox}>是否播放</Checkbox>
          </span>
          默认播放
        </div>

        <div className={style.title} style={{margin:'10px 0 0 0',lineHeight:'22px'}}>
          <span className={style.checkboxC}>
            <Button onClick={()=>this.appliedToScene()} style={{padding:'0 5px',height:'auto',background:'none',fontSize:'12px'}} title="选择场景"/>
          </span>
          应用到:
        </div>
        <Modal
          visible={sceneListVisible}
          title='选择场景'
          onCancel={this.onCancelAppliedToScene}
          categoryArr={categoryArr}
          scenesArr={scenesArr}
          data={{musicUrl:musicUrl,musicTitle:musicTitle,loop:loop,defaultPlay:defaultPlay}}
          onOk={this.setAllScene}
        >
        </Modal>

        <UserMedia
          title='音乐素材库'
          mediaType='2'
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