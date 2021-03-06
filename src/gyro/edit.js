import { Component } from "react";
import {ItemBox,Right,Content,Help} from '@/components/';
import {Checkbox} from 'antd';
import styles from './style.less';
import {helpShow} from '@/utils/help';
import {SliderSingle} from '@/components/Form';

class PromptEdit extends Component {
  state = {
    auto_open:0
  }

  componentDidMount(){
    const { data } = this.props;
    this.setState({
      auto_open:data && data.auto_open ? data.auto_open : 0,
    })
  }

  isOpen = (e) => {
    this.setState({
      auto_open: e.target.checked ? 1 : 0
    },()=>{
      this.save()
    })
  }

  save = () => {
    this.props.onChange(this.state);
  }

  render () {
    const {auto_open} = this.state;
    const helpShowFlag = false;
    return(
      <div>
        <ItemBox>
         <div className={styles.title}>
            <span className={styles.checkboxC}>
              <Checkbox checked={auto_open == 1 ? true : false} onChange={this.isOpen} className={styles.checkbox}></Checkbox>
            </span>
            <span style={{float:'left'}}>开启手机陀螺仪功能</span>
            {helpShow && helpShowFlag && 
              (
                <div style={{float:'left', width:'18px', height:'18px', position:'relative',marginLeft:'5px'}}>
                  <Help style={{fontSize:'14px',color:'#999999',float:'left'}} />
                </div>
              )
            }
            <div style={{clear:'both'}}></div>
            <div className={styles.tigs}>
              注：开启后作品将默认启用陀螺仪功能
            </div>
          </div>
        </ItemBox>
      </div>
    );
  }
}
export default PromptEdit;