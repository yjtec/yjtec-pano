import { Component } from "react";
import {ItemBox,Right,Content} from '@/components/';
import {Button,Select} from '@/components/Form';
import {Checkbox,Row,Col,Drawer,Icon} from 'antd';
import style from './style.less';

import UploadMusic from '@/components/Media';

import Modal from '@/components/AllScene';

import {Obj} from 'yjtec-support';

const defaultData = {
  media: false,
  musicUrl:'',
  musicTitle:'上传音乐格式为MP3',
  loop:0
}
class Music extends Component {
  state={
    media: false,
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
    let categoryArr = scenes.category;
    let scenesArr = scenes.scenes;

    this.setState({
      ...defaultData,...data,
      categoryArr: categoryArr,
      scenesArr: scenesArr
    })
  }

  componentDidUpdate(prevProps) {
    if(!Obj.isEqual(prevProps.data,this.props.data)){
      this.setState({
        ...defaultData,...this.props.data
      })
    }
  }

  media = () => {  //选择用户的素材
    this.setState({
      media: true
    })
  }

  onCancel = (url,name) => {
    if (url == undefined) {
      this.setState({
        media: false,
      })
    }else{
      this.setState({
        media: false,
        musicUrl:url,
        musicTitle:name
      },()=>{
        this.runChange()
      })
    }
  }

  onChange=(e)=>{
    this.setState({
      loop:e.target.checked == true ? 0 : 1
    },()=>{
      this.runChange()
    })
  }
  del=()=>{
    this.setState({
      ...defaultData
    },()=>{
      this.props.onDel()
    })
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

  setAllScene=(url,sceneIds)=>{
    this.props.setAllScene(url,sceneIds)
  }

  handlePlay=(e)=>{
    this.setState({
      defaultPlay:e.target.checked
    },()=>{
      this.runChange();
    })
  }

  render(){
    const {musicUrl,musicTitle,loop,defaultPlay,sceneListVisible,categoryArr,scenesArr} = this.state;

    return(
      <ItemBox>
        <div className={style.title}>
          <span className={style.checkboxC} onClick={()=>this.del()}>
            删除
          </span>
          {this.props.title}
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
                <div onClick={this.media}>
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
        <UploadMusic
          title='音乐'
          mediaType='2'
          visible={this.state.media}
          onCancel={this.onCancel}
          accept='.mp3'
        />
      </ItemBox>
    )
  }
}
export default Music;