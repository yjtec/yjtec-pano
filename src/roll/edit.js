import React from 'react';
import { ItemBox,TextCss } from '@/components/';
import { Input,Button } from 'antd';
import Modal from '@/components/AllScene';
import Container from './container';
import style from './style.less';
const defaultData = {
  height:'30',
  bgcolor:'#000000',
  bgalpha:'0.6',
  speed: '50',
  interval_time:'1',
}
const defaultCssData = {
  fontFamily:'微软雅黑',
  fontSize:'12px',
  color:{
    r:255,
    g:255,
    b:255,
    a:1
  },
  fontWeight:'normal',
  fontStyle:'none',
  textDecoration:'none',
  textAlign:'center',
  lineHeight:'20px',
  textIndent:'0px',
  letterSpacing:'0px'
}
export default class Text extends React.Component{
  constructor(props) {
    super(props);
    const {scenes,data} = props;
    this.state = {
      selectSceneVisible:false,
      categoryArr:scenes ? scenes.category : [],
      scenesArr:scenes ? scenes.scenes : [],

      text: data ? data.text : '',
      css:(data && data.css) ? data.css : defaultCssData,
      height: (data && data.height) ? data.height : defaultData.height,
      bgcolor: (data && data.bgcolor) ? data.bgcolor : defaultData.bgcolor,
      bgalpha: (data && data.bgalpha) ? data.bgalpha : defaultData.bgalpha,
      speed: (data && data.speed) ? data.speed : defaultData.speed,
      interval_time: (data && data.interval_time) ? data.interval_time : defaultData.interval_time,
    }
  }

  componentDidUpdate(prevProps){
    if(JSON.stringify(prevProps.data) !== JSON.stringify(this.props.data)){
      if (this.props.data) {
        const {data} = this.props;
        this.setState({
          text:data.text,
          css:(data && data.css) ? data.css : defaultCssData,
          height: (data && data.height) ? data.height : defaultData.height,
          bgcolor: (data && data.bgcolor) ? data.bgcolor : defaultData.bgcolor,
          bgalpha: (data && data.bgalpha) ? data.bgalpha : defaultData.bgalpha,
          speed: (data && data.speed) ? data.speed : defaultData.speed,
          interval_time: (data && data.interval_time) ? data.interval_time : defaultData.interval_time,
        })
      }
    }
  }
  
  textValue = (e) => {
    this.setState({
      text:e.target.value
    },()=>{
      this.runChange();
    })
  }

  text=(re)=>{
    let newCss = '';
    if (re.colorRgba) {
      newCss = {
        ...re,
        color:re.colorRgba
      }
    }else{
      newCss = {
        ...re
      }
    }
    delete newCss.colorRgba;
    this.setState({
      css:newCss
    },()=>{
      this.runChange();
    })
  }

  container=(re)=>{
    this.setState({
      height: re.height,
      bgcolor: re.bgcolor,
      bgalpha: re.bgalpha,
      speed: re.speed,
      interval_time: re.interval_time,
    },()=>{
      this.runChange();
    })
  }

  runChange = () => {
    const {text,css,height,bgcolor,bgalpha,speed,interval_time} = this.state;
    this.props.onChange(
      {
        text:text,
        height:height,
        bgcolor:bgcolor,
        bgalpha:bgalpha,
        speed:speed,
        interval_time:interval_time,
        css:css
      }
    )
  }

  appliedToScene=()=>{
    this.setState({
      selectSceneVisible: true
    })
  }
  onCancelAppliedToScene=()=>{
    this.setState({
      selectSceneVisible: false
    })
  }
  setAllScene=(data,sceneIds)=>{
    this.props.onSetAll(data,sceneIds)
  }
  render(){
    const {text,css,height,bgcolor,bgalpha,speed,interval_time,selectSceneVisible,categoryArr,scenesArr} = this.state;
    const containerData={
      height: height,
      bgcolor: bgcolor,
      bgalpha: bgalpha,
      speed: speed,
      interval_time: interval_time
    }
    return(
      <div>
        <ItemBox>
          <div className={style.title} style={{margin:'0 0 10px 0',lineHeight:'22px'}}>
            <span className={style.checkboxC}>
              <Button onClick={()=>this.appliedToScene()} style={{padding:'0 5px',height:'auto',background:'none',fontSize:'12px',color:'#fff',borderColor: '#008aff'}}>
                应用到
              </Button>
            </span>
            滚动字幕
          </div>
          <div className={style.setupInput}>
            <Input.TextArea value={text} autosize={{minRows:3,maxRows:3}} placeholder='请输入文字信息' style={{borderRadius:3}} onChange={this.textValue}/>
          </div>
        </ItemBox>
        <Container data={containerData} onChange={this.container}/>
        <TextCss data={css} onChange={this.text}/>

        <Modal
          visible={selectSceneVisible}
          title='选择场景'
          onCancel={this.onCancelAppliedToScene}
          categoryArr={categoryArr}
          scenesArr={scenesArr}
          data={''}
          onOk={this.setAllScene}
        >
        </Modal>
      </div>
    )
  }
}