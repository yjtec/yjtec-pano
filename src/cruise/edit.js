import { Component } from "react";
import {ItemBox,Right,Content} from '@/components/';
import {Checkbox} from 'antd';
import {SliderSingle} from '@/components/Form';
import style from './style.less';

class CruiseEdit extends Component {
  state = {
    open: 0,
    time: 30,
    switchScene: 1
  }

  componentDidMount(){
    const { data } = this.props;
    this.setState({
      open: data.open,
      time: data.time,
      switchScene: data.switchScene
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
  switchScene = (e) => {
    this.setState({
      switchScene: e.target.checked ? 1 : 0
    },()=>{this.runChenge()})
  }

  runChenge = () => {
    this.props.onChange(this.state);
  }
  render () {
    const {open,time,switchScene} = this.state;
    return(
      <div>
        <ItemBox>
          <div className={style.title}>
            <span className={style.checkboxC}>
              <Checkbox checked={open == 1 ? true : false} onChange={this.isOpen} className={style.checkbox}>是否开启</Checkbox>
            </span>
            自动巡游
          </div>
          <div className={style.mb20}></div>
          <div className={style.title}>
            场景旋转时间(S)
          </div>
          <div className={style.sliderDiv}>
            <SliderSingle
              defaultValue= {time}
              max= {180}
              min= {30}
              step= {30}
              onChange={value => this.handleRotateTime(value)}
            />
          </div>
          <div className={style.mb20}></div>
          <div className={style.title}>
            <span className={style.checkboxC}>
              <Checkbox checked={switchScene == 1 ? true : false} onChange={this.switchScene} className={style.checkbox}></Checkbox>
            </span>
            旋转结束后自动跳转下一个场景
          </div>
        </ItemBox>
      </div>
    );
  }
}
export default CruiseEdit;