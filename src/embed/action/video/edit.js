import React from 'react';
import { Icon,Button,Checkbox } from 'antd';
import {ItemBox} from '@/components/';
import {ossEmbedVideoThumb} from '@/utils/oss';

import UserMedia from '@/components/MediaModal/UserMedia';

import {Obj} from 'yjtec-support';
import style from './style.less';
import { InputNumber } from '@/components/Form';

export default class Edit extends React.Component{
  constructor(props) {
    super(props);
    const {data} = props;
    this.state = {
      videoUrl:(data && data.videoUrl) ? data.videoUrl : '',
      title:(data && data.title) ? data.title : '',
      thumbUrl:(data && data.thumbUrl) ? data.thumbUrl :'',
      loop:(data && data.loop == 1) ? 1 : 0,
      autoplay:(data && data.autoplay == 1) ? 1 : 0,
      imgVisible:false,
      /*width:(data && data.width) ? data.width : 300,
      height:(data && data.height) ? data.height : 180,*/
      videoVisible:false
    }
  }

  componentDidUpdate(prevProps){
    if(JSON.stringify(prevProps.data) !== JSON.stringify(this.props.data)){
      if (this.props.data) {
        const {data} = this.props;
        this.setState({
          videoUrl:data.videoUrl,
          title:data.title,
          thumbUrl:data.thumbUrl,
          loop:data.loop,
          autoplay:data.autoplay,
          /*width:actionData.width,
          height:actionData.height*/
        })
      }
    }
  }

  //弹出选择视频
  handleVideoShow = () => {
    this.setState({
      videoVisible:true
    })
  }
  //选择视频后的回调
  handleVideoMedia = (arr) => {
    if (!Obj.isNull(arr)) {
      this.setState({
        videoUrl:arr[0].path.path,
        title:arr[0].name,
        videoVisible:false
      },()=>{
        this.runChange()
      })
    }else{
      this.setState({
        videoVisible:false
      })
    }
  }
  //弹出选择图片
  handleImgShow = () => {
    this.setState({
      imgVisible:true
    })
  }
  //选择图片后的回调
  handleImgMedia = arr => {
    if (!Obj.isNull(arr)) {
      this.setState({
        thumbUrl:arr[0].path.path,
        imgVisible:false
      },()=>{
        this.runChange()
      })
    }else{
      this.setState({
        imgVisible:false
      })
    }
  }
  //关闭视频素材库选择窗口
  closeVideoMediaModal = () => {
    this.setState({
      videoVisible:false
    })
  }
  //关闭图片素材库选择窗口
  closeImgMediaModal = () => {
    this.setState({
      imgVisible:false
    })
  }
  //删除封页
  delImg = () => {
    this.setState({
      thumbUrl:''
    },()=>{
      this.runChange()
    })
  }
  //是否自动播放
  handlePlay = (e) => {
    this.setState({
      autoplay:e.target.checked == true ? 1 : 0
    },()=>{
      this.runChange()
    })
  }
  //循环播放
  handleLoop = (e) => {
    this.setState({
      loop:e.target.checked == true ? 1 : 0
    },()=>{
      this.runChange()
    })
  }

  runChange = () => {
    const {videoUrl,title,thumbUrl,loop,autoplay,width,height} = this.state;
    this.props.onChange({
      videoUrl:videoUrl,
      title:title,
      thumbUrl:thumbUrl,
      loop:loop,
      autoplay:autoplay,
      width:width,
      height:height
    })
  }

  render(){
    const {videoUrl,title,thumbUrl,loop,autoplay,videoVisible,imgVisible,width,height} = this.state;
    const videoBox = (
      <div className={style.videoList}>
        <Icon type="play-square" className={style.icon}/>
        <p>{title}</p>
      </div>
    )
    const defaultVideoBox = (
      <div className={style.videoList}>
        <span>格式MP4 编码:H.264</span>
        <span>视频限制50M以内</span>
      </div>
    )

    const thumbBox = (
      <div>
        <img alt="url" src={ossEmbedVideoThumb(thumbUrl)} className={style.imgss}/>
        <div className={style.delimg} onClick={()=>this.delImg()}>
          <Icon type="delete" />
        </div>
      </div>
    )

    const defaultThumbBox = (
      <div>
        <div className={style.tips}>
          <p>
            封面请与视频尺寸保持一致
          </p>
        </div>
      </div>
    )

    return(
      <div className={style.box}>
        <ItemBox>
          <div className={style.boxtitle}>
            嵌入视频
            <Button onClick={()=>this.handleVideoShow()} className={style.uploadBtn} type="primary" size="small">选择视频</Button>
          </div>
          {(videoUrl && title) ? videoBox : defaultVideoBox}
        </ItemBox>
        <ItemBox>
          <div className={style.boxtitle} style={{marginTop:'10px'}}>
            移动端封面
            <Button onClick={()=>this.handleImgShow()} className={style.uploadBtn} type="primary" size="small">选择图片</Button>
          </div>
          <div className={style.thumb}>
            {thumbUrl ? thumbBox : defaultThumbBox}
          </div>
          {thumbUrl && <div className={style.notes}>注：封面请与视频尺寸保持一致</div>}
        </ItemBox>

        <ItemBox> 
          <div className={style.title} style={{marginTop:10}}>
            <span className={style.checkboxC}>
              <Checkbox checked={autoplay == 1 ? true : false} onChange={this.handlePlay} className={style.checkbox}></Checkbox>
            </span>
            是否自动播放(PC有效)
          </div>
          <div className={style.title} style={{marginTop:10}}>
            <span className={style.checkboxC}>
              <Checkbox checked={loop == 1 ? true : false} onChange={this.handleLoop} className={style.checkbox}></Checkbox>
            </span>
            是否循环播放
          </div>
        </ItemBox>

        <UserMedia
          title='视频素材库'
          mediaType='3'
          multipleChoices={false}
          width='900px'
          visible={videoVisible}
          onChange={this.handleVideoMedia}
          onCancel={this.closeVideoMediaModal}
        />

        <UserMedia
          title='图片素材库'
          mediaType='1'
          multipleChoices={false}
          width='900px'
          visible={imgVisible}
          onChange={this.handleImgMedia}
          onCancel={this.closeImgMediaModal}
        />

      </div>
    )
  }
}