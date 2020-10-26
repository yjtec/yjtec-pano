import { Component } from "react";
import {ItemBox,Right,Content,Help} from '@/components/';
import {Checkbox} from 'antd';
import {SliderSingle} from '@/components/Form';
import style from './style.less';
import {helpShow} from '@/utils/help';
class CruiseEdit extends Component {
  state = {
    open: 0,
    time: 30,
    speed: 5,
    switchScene: 1,
    angle_view: 1
  }

  componentDidMount(){
    const { data } = this.props;
    this.setState({
      open: data.open,
      time: data.time,
      speed: data.speed ? data.speed : 5,
      switchScene: data.switchScene,
      angle_view: data.angle_view ? data.angle_view : 1
    })
  }

  isOpen = (e) => {
    this.setState({
      open: e.target.checked ? 1 : 0
    },()=>{this.runChenge()})
  }
  handleRotateTime = (value) => {
    this.setState({
      time: value
    },()=>{this.runChenge()})
  }
  handleSpeed = (value) => {
    this.setState({
      speed: value
    },()=>{this.runChenge()})
  }
  switchScene = (e) => {
    this.setState({
      switchScene: e.target.checked ? 1 : 0
    },()=>{this.runChenge()})
  }
  angleView = (e) => {
    this.setState({
      angle_view: e.target.checked ? 1 : 0
    },()=>{this.runChenge()})
  }

  runChenge = () => {
    this.props.onChange(this.state);
  }
  render () {
    const {open,time,speed,switchScene,angle_view} = this.state;
    return(
      <div>
        <ItemBox>
          <div className={style.title}>
            <span className={style.checkboxC}>
              <Checkbox checked={open == 1 ? true : false} onChange={this.isOpen} className={style.checkbox}>是否开启</Checkbox>
            </span>
            <span style={{float:'left'}}>自动巡游</span>
            {helpShow && 
              (
                <div style={{float:'left', width:'18px', height:'18px', position:'relative',marginLeft:'5px'}}>
                  <Help style={{fontSize:'14px',color:'#999999',float:'left'}} />
                </div>
              )
            }
            <div style={{clear:'both'}}></div>
          </div>
          <div className={style.mb20}></div>
          <div className={style.title}>
            场景旋转时间(S)
          </div>
          <div className={style.sliderDiv}>
            <SliderSingle
              defaultValue= {time}
              max= {180}
              min= {1}
              step= {1}
              onChange={value => this.handleRotateTime(value)}
            />
          </div>
          <div className={style.mb20}></div>
          <div className={style.title}>
            巡游速度(度/S)
          </div>
          <div className={style.sliderDiv}>
            <SliderSingle
              defaultValue= {speed}
              max= {100}
              min= {1}
              step= {1}
              onChange={value => this.handleSpeed(value)}
            />
          </div>
          <div className={style.mb20}></div>
          <div className={style.title}>
            <span className={style.checkboxC}>
              <Checkbox checked={switchScene == 1 ? true : false} onChange={this.switchScene} className={style.checkbox}></Checkbox>
            </span>
            旋转结束后自动跳转下一个场景
          </div>
          <div className={style.title}>
            <span className={style.checkboxC}>
              <Checkbox checked={angle_view == 1 ? true : false} onChange={this.angleView} className={style.checkbox}></Checkbox>
            </span>
            使用场景视角巡游
          </div>
        </ItemBox>
      </div>
    );
  }
}
export default CruiseEdit;