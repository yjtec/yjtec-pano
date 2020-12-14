import React from 'react';
import {Modal,Input,Icon} from 'antd';
import BraftEditor from './braftEditor';
import {Obj} from 'yjtec-support';
import UserMedia from '@/components/MediaModal/UserMedia';
import styles from './media.less';
import {mediaImgConfig} from '@/utils/oss.config';
export default class modalEditor extends React.Component {
  state = {
    type:'IMAGE',
    url:[],
    uploadType:1,
    userMediaVisible:false,
    videoVisible:false,
  }

  selectType = (type) => {
    this.setState({
      type: type
    });
  }
  setInput = e => {
    // this.setUrl(e.target.value)
    this.setState({
      url:[e.target.value]
    });
  }
  
  //打开素材库选择窗口
  openMediaModal = () => {
    if (this.state.type != 'IMAGE') {
      this.setState({
        url:[] 
      });
    }
    this.setState({
      type:'IMAGE',
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
    this.setUrl(arr)
    this.closeMediaModal();
  }

  //弹出选择视频
  handleVideoShow = () => {
    if (this.state.type != 'VIDEO') {
      this.setState({
        url:[] 
      });
    }
    this.setState({
      type:'VIDEO',
      videoVisible:true
    })
  }
  //选择视频后的回调
  handleVideoMedia = arr => {
    this.setUrl(arr)
    this.closeVideoMediaModal();
  }
  closeVideoMediaModal = () => {
    this.setState({
      videoVisible:false
    })
  }


  setUploadType = () => {
    this.setState({
      uploadType: this.state.uploadType == 1 ? 2 : 1,
      url:[]
    });
  }
  setUrl = url =>{
    let urlArr = this.state.url;
    url.map(item=>{
      urlArr.push(item.path.url)
    })
    this.setState({
      url: urlArr
    });
  }
  delImg = item => {
    let newUrl = this.state.url.filter(j=> j != item)
    this.setState({
      url: newUrl
    });
  }
  onInsert = () => {
    const {type,url} = this.state;
    let newUrl = [];
    url.map(item=>{
      newUrl.push({type:type,url:item})
    })

    this.props.onChange(newUrl);
    this.closeMedia()
  }

  closeMedia = () => {
    this.setState({
      type:'IMAGE',
      url:[],
      uploadType:1,
      userMediaVisible:false,
      videoVisible:false,
    });
    this.props.onClose()
  }

  render() {
    const {visible} = this.props;
    const {type,url,uploadType,userMediaVisible,videoVisible} = this.state;

    const localResources = (
      <div>
        <div className={styles.media_img}>
          {url.length > 0 && url.map((item,index)=>(
            <div className={styles.img} key={index}>
              <img src={type == 'IMAGE' ? item + '?x-oss-process=image/resize,m_pad,h_200,w_200,color_eeeeee' : item + '?x-oss-process=video/snapshot,t_1000,f_jpg,w_0,h_0,m_fast'} />
              <span className={styles.img_del} onClick={()=>this.delImg(item)}>X</span>
            </div>
          ))}
          <div style={{clear:'both'}}></div>
          {url.length == 0 && <p>暂无资源</p>}
          <span>注：请点击右下方 [插入] 按钮</span>
          
        </div>
        <div className={styles.mediz_type}>
          <span className={`${styles.select}`} onClick={()=>this.openMediaModal()}>添加图片</span>
          <span className={`${styles.select}`} onClick={()=>this.handleVideoShow()}>添加视频</span>
        </div>
      </div>
    )

    const networkResource = (
      <div>
        <div className={styles.media_input}>
          <Input value={url} placeholder="请填写网络媒体连接" onChange={this.setInput} />
          <span>注：链接请以https://或http://开头</span>
        </div>
        <div className={styles.mediz_type}>
          <span className={`${type == 'IMAGE' && styles.select}`} onClick={()=>this.selectType('IMAGE')}>图片</span>
          <span className={`${type == 'VIDEO' && styles.select}`} onClick={()=>this.selectType('VIDEO')}>视频</span>
          <span className={`${type == 'EMBED' && styles.select}`} onClick={()=>this.selectType('EMBED')}>嵌入式媒体</span>
        </div>
      </div>
    )


    return (
      <div>
        <Modal
          title="媒体库"
          centered
          width={600}
          visible={visible}
          destroyOnClose={true}
          maskClosable={false}
          closable={false}
          okText={'插入所选资源'}
          onOk={() => this.onInsert()}
          onCancel={() => this.closeMedia()}
          className={styles.media_modal}
        >
          {uploadType == 1 ? localResources : networkResource}
          <div className={styles.upload_btn}>
            <span onClick={()=>this.setUploadType()}>{uploadType == 1 ? '添加网络资源' : '添加本地资源'}</span>
          </div>
        </Modal>

        <Media
          title='图片素材库'
          mediaType={1}
          tabType={1}
          multipleChoices={true}
          width='900px'
          visible={userMediaVisible}
          onChange={this.selectMedia}
          onCancel={this.closeMediaModal}
        />

        <Media
          title='视频素材库'
          mediaType={3}
          tabType={1}
          multipleChoices={true}
          width='900px'
          visible={videoVisible}
          onChange={this.handleVideoMedia}
          onCancel={this.closeVideoMediaModal}
        />
      </div>
    );
  }
}