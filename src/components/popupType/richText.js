import React from 'react';
import {connect} from 'dva';
import {Icon,Input,Checkbox,Modal,message,Tooltip,Skeleton} from 'antd';
import {Button} from '@/components/Form';
import {Obj} from 'yjtec-support';
import styles from './richText.less';
import {formatUrl} from '@/utils/utils';
import {mediaImgConfig} from '@/utils/oss.config';
import { v4 as uuidv4 } from "uuid";
import VipAuthority from "@/components/VipAuthority";

import {Editor} from 'yjtec-pano';
@connect(({ global }) => ({
  global,
}))
export default class RichText extends React.Component {
  state = {
    title:'',
    describe:'',
    jumpUrlTitle:'',
    jumpUrl:'',
    jumpType:1,
    editorVisible: false,
    htmlContent:'',
    richTextId:'',
    uuid:''
  }

  componentDidMount(){
    let {data} = this.props;
    this.setState({
      ...data,
      richTextId: data.richTextId ? data.richTextId : '',
      uuid: data.uuid ? data.uuid : uuidv4()
    })
  }

  componentDidUpdate(prevProps) {
    if(!Obj.isEqual(prevProps.data,this.props.data)){
      let {data} = this.props;
      if (data) {
        this.setState({
          ...data,
          richTextId: data.richTextId ? data.richTextId : '',
          uuid: data.uuid ? data.uuid : uuidv4()
        })
      }
    }
  }

  //打开文章编辑框
  openMediaModal = () => {  //选择用户的素材
    this.setState({
      editorVisible: true
    })
  }
  //关闭文章编辑框
  closeMediaModal = () => {
    this.setState({
      editorVisible:false
    })
  }

  setHtmlContent = data => {
    this.setState({
      htmlContent: data
    },()=>{
      this.closeMediaModal();
      this.runOnChange()
    });
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
    const {title,describe,jumpUrlTitle,jumpUrl,jumpType,htmlContent,richTextId,uuid} = this.state;
    let data = {
      title:title,
      describe:describe,
      jumpUrlTitle:jumpUrlTitle,
      jumpUrl:jumpUrl,
      jumpType:jumpType,
      htmlContent:htmlContent,
      richTextId:richTextId,
      uuid:uuid
    }
    this.props.onChange(data);
  }

  render() {
    const {imgUrl,imgType,imgNumber,title,describe,jumpType,jumpUrlTitle,jumpUrl,editorVisible,htmlContent} = this.state;
    const isVip = this.props.global.data.info.is_vip;
    return (
      <div>
        {isVip == 0 ? (
          <VipAuthority></VipAuthority>
        ) : (
          <div>
            <div className={styles.title}>
              <div className={styles.uploadButton}>
                <Button type="primary" size="small" title='编辑文章' onClick={()=>this.openMediaModal()} />
              </div>
              
              <span style={{float:'left'}}>
                文章内容
              </span>
              <div style={{clear:'both'}}></div>
            </div>
            
            <div className={styles.desc} onClick={()=>this.openMediaModal()}>
              {htmlContent != '<p></p>' && htmlContent != '' ? <Skeleton active="true" /> : <span>暂无内容</span>}
            </div>
            <div className={styles.title} style={{marginTop:10}}>
              <span className={styles.checkboxC}>
                <Checkbox checked={jumpType == 1 ? true : false} onChange={this.setJumpType} className={styles.checkbox}>新窗口打开</Checkbox>
              </span>
              更多内容
            </div>
            <div className={styles.jumpUrl}>
              <Input placeholder='按钮标题' value={jumpUrlTitle} onChange={this.setJumpUrlTitle} style={{marginBottom:'5px'}}/>
              <Input placeholder='填写链接地址' value={jumpUrl} onBlur={this.formatJumpUrl}  onChange={this.setJumpUrl} />
            </div>
            <Editor
              visible={editorVisible}
              data={htmlContent}
              onChange={this.setHtmlContent}
              onClose={this.closeMediaModal}
            />
          </div>
        )}
      </div>
    );
  }
}