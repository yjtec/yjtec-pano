import React from 'react';
import {connect} from 'dva';
import {Icon,Input,Checkbox,Modal,message,Tooltip} from 'antd';
import {Button} from '@/components/Form';
import HotspotRings from '@/components/Upload/HotspotRings';
import {Model3dView,Help} from '@/components/';
import {getImgWH} from '@/utils/utils';
import {Obj} from 'yjtec-support';
import styles from './ringsStyle.less';
import {formatUrl} from '@/utils/utils';
import {mediaImgConfig} from '@/utils/oss.config'

import Media from '@/components/MediaModal';
import {helpShow} from '@/utils/help';

@connect(({ loading,model3d }) => ({
  loading:loading,
  model3d:model3d
}))
export default class Model extends React.Component {
  state = {
    title:'',
    describe:'',
    jumpUrlTitle:'',
    jumpUrl:'',
    jumpType:1,
    userMediaVisible: false,
    model_id:'',
    model_thumb:'',
    modelData: ''
  }

  componentDidMount(){
    let {data} = this.props;
    this.setState({
      ...data
    })

    if (data && data.model_id) {
      this.getModel3dInfo(data.model_id);
    }
  }

  componentDidUpdate(prevProps) {
    if(!Obj.isEqual(prevProps.data,this.props.data)){
      let {data} = this.props;
      if (data) {
        this.setState({
          ...this.props.data
        })
        if (data.model_id && data.model_id != prevProps.data.model_id) {
          this.getModel3dInfo(data.model_id);
        }
      }
    }
  }

  //获取模型数据
  getModel3dInfo = id => {
    const {dispatch} = this.props;
    dispatch({
      type:'model3d/getInfo',
      payload:{
        id:id
      },
      callback:(res)=>{
        this.setState({
          modelData:res 
        });
      }
    })
  }

  //打开选择素材
  openMediaModal = () => {  //选择用户的素材
    this.setState({
      userMediaVisible: true
    })
  }
  //选择素材
  selectModel = (arr) => {
    this.setState({
      model_id:arr[0].id,
      model_thumb:arr[0].thumb.path
    },()=>{
      this.runOnChange();
      this.getModel3dInfo(arr[0].id);
    })
    this.closeMediaModal();
  }
  //关闭素材选择
  closeMediaModal = () => {
    this.setState({
      userMediaVisible:false
    })
  }

  delimg = () => {
    this.setState({
      model_id:'',
      model_thumb:''
    },()=>{
      this.runOnChange();
    })
  }

  editTitle = (e) => {
    this.setState({
      title: e.target.value
    },()=>{
      this.runOnChange()
    })
  }

  editDesc = (e) => {
    this.setState({
      describe: e.target.value
    },()=>{
      this.runOnChange()
    })
  }

  setJumpType = (e) => {
    this.setState({
      jumpType: e.target.checked == true ? 1 : 0
    },()=>{
      this.runOnChange()
    })
  }

  setJumpUrlTitle = (e) => {
    this.setState({
      jumpUrlTitle: e.target.value
    },()=>{
      this.runOnChange()
    })
  }

  setJumpUrl = (e) => {
    let value = e.target.value;
    this.setState({
      jumpUrl:value
    },()=>{
      this.runOnChange()
    })
  }
  formatJumpUrl = (e) => {
    let value = formatUrl(e.target.value);
    this.setState({
      jumpUrl:value
    },()=>{
      this.runOnChange()
    })
  }

  runOnChange = () => {
    const {title,describe,jumpUrlTitle,jumpUrl,jumpType,model_id,model_thumb} = this.state;
    let data = {
      title:title,
      describe:describe,
      jumpUrlTitle:jumpUrlTitle,
      jumpUrl:jumpUrl,
      jumpType:jumpType,
      model_id:model_id,
      model_thumb:model_thumb
    }
    this.props.onChange(data);
  }

  render() {
    const {imgUrl,imgType,imgNumber,title,describe,jumpType,jumpUrlTitle,jumpUrl,userMediaVisible,model_id,model_thumb,modelData} = this.state;
    const text = (
      <div className={styles.tips}>
        上传要求：仅支持zip压缩包，压缩包需小于30MB;<br/>
        模型格式：仅支持obj、fbx模型格式，面数控制在50w以下;<br/>
        贴图要求：支持jpg、png贴图，数量小于16张，请尽量控制分辨率在2048以下;<br/>
        封面要求：文件中需包含thumb.jpg或thumb.png文件。
      </div>
    )
    return (
      <div>
        <div className={styles.ringsTitle}>
          <div className={styles.uploadButton}>
            <Button type="primary" size="small" title='选择模型' onClick={()=>this.openMediaModal()} />
          </div>
          
          <span style={{float:'left'}}>
            模型文件
          </span>
          {helpShow && 
            (
              <Tooltip placement="topRight" title={text}>
                <div style={{ width:'16px', height:'16px', position:'relative',float:'left',margin:'4px 0 0 4px',cursor:'pointer'}}>
                  <Icon type="question-circle" style={{fontSize:'16px',color:'#999999',float:'left'}} />
                </div>
              </Tooltip>
            )
          }
          <div style={{clear:'both'}}></div>
        </div>
        
        {
          model_id != '' 
          &&
          <div className={styles.ringsC} style={{height:'200px'}}><Model3dView data={modelData} /></div>
        }
        
        <div className={styles.title} style={{marginTop:10}}>
          模型标题
        </div>
        <div className={styles.ringsDesc}>
          <Input maxLength={20} value={title} placeholder='模型标题' onChange={this.editTitle} style={{borderRadius:3}} />
        </div>
        <div className={styles.title} style={{marginTop:10}}>
          描述内容
        </div>
        <div className={styles.ringsDesc}>
          <Input.TextArea autosize={{minRows:3,maxRows:4}} maxLength={150} value={describe} placeholder='描述内容' onChange={this.editDesc} style={{borderRadius:3}} />
        </div>
        <div className={styles.title} style={{marginTop:10}}>
          <span className={styles.checkboxC}>
            <Checkbox checked={jumpType == 1 ? true : false} onChange={this.setJumpType} className={styles.checkbox}>新窗口打开</Checkbox>
          </span>
          更多内容
        </div>
        <div className={styles.ringsJumpUrl}>
          <Input placeholder='按钮标题' value={jumpUrlTitle} onChange={this.setJumpUrlTitle} style={{marginBottom:'5px'}}/>
          <Input placeholder='填写链接地址' value={jumpUrl} onBlur={this.formatJumpUrl}  onChange={this.setJumpUrl} />
        </div>

        <Media
          title='3D模型素材库'
          mediaType={5}
          tabType={1}
          multipleChoices={false}
          width='900px'
          visible={userMediaVisible}
          onChange={this.selectModel}
          onCancel={this.closeMediaModal}
        />
      </div>
    );
  }
}