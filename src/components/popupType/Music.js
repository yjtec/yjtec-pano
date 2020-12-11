import React from "react";
import {ItemBox,Right,Content} from '@/components/';
import {Button,Select} from '@/components/Form';
import {Checkbox,Row,Col,Drawer,Icon} from 'antd';
import styles from './style.less';

import UserMedia from '@/components/MediaModal/UserMedia';

import {Obj} from 'yjtec-support';

const defaultData = {
  media: false,
  musicUrl:'',
  musicTitle:'上传音乐格式为MP3',
  loop:0
}
export default class Music extends React.Component{
  state={
    userMediaVisible: false,
    musicUrl:'',
    musicTitle:'上传音乐格式为MP3',
    loop:0
  }

  componentDidMount(){
    const {data} = this.props;

    this.setState({
      ...defaultData,...data
    })
  }

  componentDidUpdate(prevProps) {
    if(!Obj.isEqual(prevProps.data,this.props.data)){
      this.setState({
        ...defaultData,...this.props.data
      })
    }
  }

  //打开选择素材
  openMediaModal = () => {  //选择用户的素材
    this.setState({
      userMediaVisible: true
    })
  }
  //选择素材
  selectImg = (arr) => {
    this.setState({
      media: false,
      musicUrl:arr[0].path.path,
      musicTitle:arr[0].name
    },()=>{
      this.runChange();
    })
    this.closeMediaModal();
  }
  //关闭素材选择
  closeMediaModal = () => {
    this.setState({
      userMediaVisible:false
    })
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
      this.runChange()
    })
  }

  runChange=()=>{
    this.props.onChange({
      musicUrl:this.state.musicUrl,
      musicTitle:this.state.musicTitle,
      loop:this.state.loop
    })
  }

  render(){
    const {musicUrl,musicTitle,loop,userMediaVisible} = this.state;
    return(
      <div>
        <div className={styles.title}>
          <span className={styles.checkboxC} onClick={()=>this.del()}>
            删除
          </span>
          选择音乐
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

        <UserMedia
          title='图片素材库'
          mediaType='2'
          multipleChoices={false}
          width='900px'
          visible={userMediaVisible}
          onChange={this.selectImg}
          onCancel={this.closeMediaModal}
        />
      </div>
    )
  }
}