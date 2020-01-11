import React from 'react';
import { Icon,Button,Checkbox } from 'antd';
import {ItemBox} from '@/components/';
import {ossImgMedia} from '@/utils/oss';
import Media from '@/components/Media';
import {Obj} from 'yjtec-support';
import style from './style.less';
import { InputNumber } from '@/components/Form';

export default class Edit extends React.Component{
  constructor(props) {
    super(props);
    const {videoUrl,title,thumbUrl,loop,autoplay,width,height} = props;
    this.state = {
      videoUrl:videoUrl ? videoUrl : '',
      title:title ? title : '',
      thumbUrl:thumbUrl ? thumbUrl :'',
      loop:loop ? loop : 1,
      autoplay:autoplay ? autoplay : 1,
      imgVisible:false,
      width:width ? width : 300,
      height:height ? height : 180,
      videoVisible:false
    }
  }

  //弹出选择视频
  handleVideoShow = () => {
    this.setState({
      videoVisible:true
    })
  }
  //选择视频后的回调
  handleVideoMedia = (url,name) => {
    if (!Obj.isNull(url)) {
      this.setState({
        videoUrl:url,
        title:name,
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
  handleImgMedia = url => {
    if (!Obj.isNull(url)) {
      this.setState({
        thumbUrl:url,
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
      autoplay:e.target.checked ? 1 : 0
    },()=>{
      this.runChange()
    })
  }
  //循环播放
  handleLoop = (e) => {
    this.setState({
      loop:e.target.checked ? 1 : 0
    },()=>{
      this.runChange()
    })
  }
  //修改宽
  handleW = (value) => {
    this.setState({
      width: value
    },()=>{
      this.runChange();
    })
  }
  //修改高
  handleH = (value) => {
    this.setState({
      height: value
    },()=>{
      this.runChange();
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
        <img alt="url" src={ossImgMedia(thumbUrl,'media')} className={style.imgss}/>
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
          <div className={style.boxtitle}>
            视频宽高
          </div>
          <div style={{marginBottom:'10px'}}>
            <InputNumber
              inputNumberValue= {width}
              max= {1000}
              min= {1}
              name={'宽'}
              onChange={value => this.handleW(value)}
            />
          </div>
          <div>
            <InputNumber
              inputNumberValue= {height}
              max= {1000}
              min= {1}
              name={'高'}
              onChange={value => this.handleH(value)}
            />
          </div>
        </ItemBox>
        <ItemBox> 
          <div className={style.title} style={{marginTop:10}}>
            <span className={style.checkboxC}>
              <Checkbox checked={autoplay == 1 ? true : false} onChange={this.handlePlay} className={style.checkbox}>是否</Checkbox>
            </span>
            自动播放(PC有效)
          </div>
          <div className={style.title} style={{marginTop:10}}>
            <span className={style.checkboxC}>
              <Checkbox checked={loop == 1 ? true : false} onChange={this.handleLoop} className={style.checkbox}>是否</Checkbox>
            </span>
            循环播放
          </div>
        </ItemBox>
        <Media 
          title='视频'
          visible={videoVisible} 
          onCancel={this.handleVideoMedia}
          mediaType='3'
          accept='.mp4'
        />
        <Media 
          title='图片'
          visible={imgVisible} 
          onCancel={this.handleImgMedia}
          mediaType='1'
          accept='.jpg,.jpeg,.png'
        />
      </div>
    )
  }
}