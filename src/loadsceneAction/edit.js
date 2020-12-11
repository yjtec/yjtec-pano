import { Component } from "react";
import {ItemBox,Help} from '@/components/';
import {Switch,Checkbox} from 'antd';
import styles from './style.less';
import {helpShow} from '@/utils/help';

const actionData = [
  {title:'无特效切换',type:1},
  {title:'淡入淡出',type:2},
  {title:'放大当前场景/交叉淡化',type:3},
  {title:'黑色背景过度',type:4},
  {title:'白色背景过度',type:5},
  {title:'幻灯片动画',type:6},
  {title:'展开动画',type:7},
]

class LoadsceneAction extends Component {
  state = {
    type:1,
    keepView:1
  }

  componentDidMount(){
    const { data } = this.props;
    this.setState({
      type:data && data.type ? data.type : 1,
      keepView:data && data.keepView ? data.keepView : 0,
    })
  }

  selectAction = (value) => {
    this.setState({
      type: value
    },()=>{
      this.runChenge()
    });
  }

  setKeepView = (e) => {
    this.setState({
      keepView: e.target.checked ? 1 : 0
    },()=>{this.runChenge()})
  }

  runChenge = () => {
    this.props.onChange(this.state);
  }
  render () {
    const {type,keepView} = this.state;
    const helpShowFlag = false;
    return(
      <div>
        <ItemBox>
          <div className={styles.title}>
            <span style={{float:'left'}}>场景切换动画</span>
            {helpShow && helpShowFlag && 
              (
                <div style={{float:'left', width:'18px', height:'18px', position:'relative',marginLeft:'5px'}}>
                  <Help style={{fontSize:'14px',color:'#999999',float:'left'}} />
                </div>
              )
            }
            <div style={{clear:'both'}}></div>
          </div>
          
          {actionData.map(item => {
            return (
              <div className={styles.itemBox} key={item.type} onClick={()=>this.selectAction(item.type)}>
                <Switch size="small" checked={item.type == type ? true : false} style={{float:'right',marginTop:'8px'}} />
                {item.title}
              </div>
            )
          })}
        </ItemBox>
        <ItemBox>
          <div className={styles.title} style={{marginTop:'10px'}}>
            <span className={styles.checkboxC}>
              <Checkbox checked={keepView == 1 ? true : false} onChange={this.setKeepView} className={styles.checkbox}></Checkbox>
            </span>
            切换场景时保持视角
          </div>
        </ItemBox>
      </div>
    );
  }
}
export default LoadsceneAction;