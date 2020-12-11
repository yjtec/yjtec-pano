import React,{Fragment} from 'react';
import {InputNumber,Button} from 'antd';
import IconFont from '@/components/IconFont';
import styles from './style.less';
import LangTap from '@/utils/langTap';
import {schoolUrl} from '@/utils/url.config';
import {helpShow} from '@/utils/help';

const defaultData = {
  ath:0,  //左右
  atv:0,  //上下
  rx:0,
  ry:0,
  rz:0,
  scale:0.99,
  edit_type:1
}

function moveOperator (k,operator,num){
  if (operator == 'plus') {
    return (k * 10 + num * 10)/10
  }else{
    let newData = {};
    return (k * 10 - num * 10)/10
  }
}

export default class FineTuning extends React.Component{
  constructor(props) {
    super(props);
    const { data } = props;
    this.state = {
      ath:data ? data.ath : defaultData.ath,
      atv:data ? data.atv : defaultData.atv,
      rx:data ? data.rx : defaultData.rx,
      ry:data ? data.ry : defaultData.ry,
      rz:data ? data.rz : defaultData.rz,
      scale:data ? data.rscalez : defaultData.scale,
      edit_type:data ? data.edit_type : defaultData.edit_type,
    }
  }

  componentDidUpdate(prevProps){
    if(JSON.stringify(prevProps) !== JSON.stringify(this.props)){
      if (this.props.data) {
        const {data} = this.props;

        this.setState({
          ath:data.ath,
          atv:data.atv,
          rx:data.rx,
          ry:data.ry,
          rz:data.rz,
          scale:data.scale,
          edit_type:data.edit_type ? data.edit_type : 1,
        },()=>{
          this.runChange();
        })
      }
    }
  }

  //上下左右移动hotspot
  moveHotspot = (type) => {
    const {atv,ath,scale} = this.state;
    let newData = {};
    if (type == 'top') {
      newData = {atv:moveOperator(atv,'reduce',0.1)}
    }
    if (type == 'bottom') {
      newData = {atv:moveOperator(atv,'plus',0.1)}
    }
    if (type == 'right') {
      newData = {ath:moveOperator(ath,'plus',0.1)}
    }
    if (type == 'left') {
      newData = {ath:moveOperator(ath,'reduce',0.1)}
    }
    this.setState({
      ...newData
    },()=> {
      this.runChange();
    })
  }
  //设置rx左右旋转left为'+' right为'-'
  //设置ry左右旋转top为'+' bottom为'-'
  //设置rz平面旋转clockwise为'+' anticlockwise为'-'
  setRy = (type,direction) => {
    const {rx,ry,rz} = this.state;
    let newData = {};
    if (type == 'rx') {
      if (direction == 1) {
        newData = {rx:moveOperator(rx,'plus',0.5)}
      }else{
        newData = {rx:moveOperator(rx,'reduce',0.5)}
      }
    }
    if (type == 'ry') {
      if (direction == 1) {
        newData = {ry:moveOperator(ry,'reduce',0.5)}
      }else{
        newData = {ry:moveOperator(ry,'plus',0.5)}
      }
    }
    if (type == 'rz') {
      if (direction == 1) {
        newData = {rz:moveOperator(rz,'plus',0.5)}
      }else{
        newData = {rz:moveOperator(rz,'reduce',0.5)}
      }
    }
    this.setState({
      ...newData
    },()=> {
      this.runChange();
    })
  }

  setScale = (direction) => {
    const {scale} = this.state;
    let newData = {};
    if (direction == 1) {
      newData = {scale:moveOperator(scale,'plus',0.005)}
    }else{
      newData = {scale:moveOperator(scale,'reduce',0.005)}
    }
    this.setState({
      ...newData
    },()=> {
      this.runChange();
    })
  }

  reset = () => {
    const data = this.state;
    let newData = {
      ...data,
      rx:defaultData.rx,
      ry:defaultData.ry,
      rz:defaultData.rz,
      scale:defaultData.scale,
    }
    this.props.onChange(newData)
  }
  

  renderDirection = () => {
    const direction = [
      {label:'上',icon:'icon-xiangshang',type:'top',position:1},
      {label:'右',icon:'icon-xiangyou',type:'right',position:0},
      {label:'下',icon:'icon-xiangxia',type:'bottom',position:0},
      {label:'左',icon:'icon-xiangzuo',type:'left',position:1}
    ];
    return direction.map((item,index)=>{
      const className = styles[item.type];
      const Move = LangTap(
        <IconFont type={item.icon} className={styles.directionIcon} />,
        ()=>{
          this.moveHotspot(item.type);
        },100
      )
      return (
        <div key={item.type} className={className}  >
          {item.position ? (
            <Fragment>
              <span>
                {item.label}
              </span>
              <Move />
            </Fragment>
          ) : (
            <Fragment>
              <Move />
              <span>
                {item.label}
              </span>
            </Fragment>
          )}
          
        </div>
      )
    })
  }

  renderRotate = () => {
    const rotate = [
      {icon:'icon-zuozhuan',type:'ry',operator:2},
      {icon:'icon-youzhuan',type:'ry',operator:1},
      {icon:'icon-shangfanzhuan',type:'rx',operator:2},
      {icon:'icon-xiafanzhuan',type:'rx',operator:1},
      {icon:'icon-zuoxuanzhuan',type:'rz',operator:1},
      {icon:'icon-youxuanzhuan',type:'rz',operator:2},
    ];
    return rotate.map((item,index)=>{
      const Rotate = LangTap(
        <IconFont type={item.icon} className={styles.rotateIcon} />,
        ()=>{
          this.setRy(item.type,item.operator);
        },100
      );
      return (
        <li key={index}>
          <Rotate />
        </li>
      )
    })
  }

  renderBlooming = () => {
    const blooming = [
      {label:'放大',icon:'icon-fangda',operator:1},
      {label:'缩小',icon:'icon-suoxiao',operator:2},
    ];
    return blooming.map((item,index)=>{
      const Blooming = LangTap(
        <IconFont type={item.icon} className={styles.bloomingIcon} />,
        ()=>{
          this.setScale(item.operator);
        },100
      );
      return (
        <li key={index}>
          <Blooming />
          <span>{item.label}</span>
        </li>
      )
    })
  }

  editCoordinate = (type,e) => {
    switch(type) {
      case 'rx':
        this.setState({
          rx: e 
        },()=>{
          this.runChange()
        });
        break;
      case 'ry':
        this.setState({
          ry: e
        },()=>{
          this.runChange()
        });
        break;
      case 'rz':
        this.setState({
          rz: e
        },()=>{
          this.runChange()
        });
        break;
      case 'scale':
        this.setState({
          scale: e
        },()=>{
          this.runChange()
        });
        break;
      default:
        return;
    }
  }

  switch = (value) => {
    this.setState({
      scale:value == 1 ? 0.99 : 31.5,
      edit_type: value
    },()=>{
      this.runChange();
    });
  }

  runChange = () => {
    this.props.onChange(this.state)
  }

  render(){
    const { rx, ry, rz ,scale, edit_type } = this.state;
    const trim = (
      <div>
        <div className={`${styles.box} ${styles.bg}`}>
          <div className={styles.boxTitle}>
            平 移
          </div>
          <div className={styles.directionC}>
            {this.renderDirection()}
          </div>
        </div>
        <div className={styles.spacing}></div>
        <div className={`${styles.box} ${styles.bg}`}>
          <div className={styles.boxTitle}>
            旋 转
          </div>
          <div className={styles.rotateC}>
            <ul>
              {this.renderRotate()}
              <div style={{clear:'both'}}></div>
            </ul>
          </div>
        </div>
        <div className={styles.spacing}></div>
        <div className={`${styles.box} ${styles.bg}`}>
          <div className={styles.boxTitle}>
            缩 放
          </div>
          <div className={styles.bloomingC}>
            <ul>
              {this.renderBlooming()}
              <div style={{clear:'both'}}></div>
            </ul>
          </div>
        </div>
      </div>
    );

    const align = (
      <div className={`${styles.align} ${styles.bg}`}>
        <div className={`${styles.item}`}>
          <span>水平视场(HFOV)</span>
          <div className={styles.inputDiv}>
            <InputNumber min={1} max={300} value={scale} placeholder='请输入坐标值' onChange={(e)=>this.editCoordinate('scale',e)} />
          </div>
        </div>
        <div className={`${styles.item}`}>
          <span>X轴(Yaw)</span>
          <div className={styles.inputDiv}>
            <InputNumber min={-360} max={360} value={rx} placeholder='请输入坐标值' onChange={(e)=>this.editCoordinate('rx',e)} />
          </div>
        </div>
        <div className={`${styles.item}`}>
          <span>Y轴(Pitch)</span>
          <div className={styles.inputDiv}>
            <InputNumber min={-360} max={360} value={ry} placeholder='请输入坐标值' onChange={(e)=>this.editCoordinate('ry',e)} />
          </div>
        </div>
        <div className={`${styles.item}`}>
          <span>Z轴(Roll)</span>
          <div className={styles.inputDiv}>
            <InputNumber min={-360} max={360} value={rz} placeholder='请输入坐标值' onChange={(e)=>this.editCoordinate('rz',e)} />
          </div>
        </div>
        <div className={styles.help}>
          <Button type="primary" style={{width: 'calc(100% - 30px)'}} onClick={()=>this.props.alignment(this.state)}>对齐</Button>
        </div>
        <div className={styles.help} style={{display:helpShow ? 'block' : 'none'}} onClick={()=>{window.open(schoolUrl + '/article/detail/177');}}>
          使用教程
        </div>
      </div>
    );
    return(
      <div>
        <div className={styles.edit} style={{display:(this.props.visible == true && this.props.embedType != 1) ? 'block' : 'none'}}>
          <div className={`${styles.fine_tuning_title} ${styles.bg}`}>
            {this.props.embedType == 4 ? (
              <div>
                <span className={`${edit_type == 1 && styles.seleased}`} style={{width:'50%'}} onClick={()=>this.switch(1)}>细节调整</span>
                <span className={`${edit_type == 2 && styles.seleased}`} style={{width:'50%'}} onClick={()=>this.switch(2)}>位置对齐</span>
              </div>
            ) : (
              <span className={`${edit_type == 1 && styles.seleased}`}>细节调整</span>
            )}
            
          </div>
          <div className={styles.spacing}></div>
          {this.props.embedType == 4 && edit_type == 2 && align}
          {(this.props.embedType == 2 || this.props.embedType == 3) && trim}
          {this.props.embedType == 4 && edit_type == 1 && trim}
          <div className={styles.spacing}></div>
          <div className={`${styles.box} ${styles.bg}`} style={{position:'absolute', bottom:'0'}}>
            <div className={styles.boxTitle} onClick={()=>this.reset()}>
              重 置
            </div>
          </div>
        </div>
      </div>
    )
  }
}