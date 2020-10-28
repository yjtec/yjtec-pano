import { Component } from "react";
import {ItemBox,Help} from '@/components/';
import {Switch} from 'antd';
import style from './style.less';
import {helpShow} from '@/utils/help';

const actionData = [
  {title:'普通开场',type:1},
  {title:'水平巡游开场',type:2},
  {title:'小行星巡游开场',type:3},
  {title:'小行星开场',type:4},
  {title:'水晶球开场',type:5},
]

class OpenAnimation extends Component {
  state = {
    type:1
  }

  componentDidMount(){
    const { data } = this.props;
    this.setState({
      type:data && data.type ? data.type : 1,
    })
  }

  selectAction = (value) => {
    this.setState({
      type: value
    },()=>{
      this.runChenge()
    });
  }

  runChenge = () => {
    this.props.onChange(this.state);
  }
  render () {
    const {type} = this.state;
    return(
      <div>
        <ItemBox>
          <div className={style.title}>
            <span style={{float:'left'}}>开场动画</span>
            {helpShow && 
              (
                <div style={{float:'left', width:'18px', height:'18px', position:'relative',marginLeft:'5px'}}>
                  <Help link={'open_animation'} style={{fontSize:'14px',color:'#999999',float:'left'}} />
                </div>
              )
            }
            <div style={{clear:'both'}}></div>
          </div>
          
          {actionData.map(item => {
            return (
              <div className={style.itemBox} key={item.type} onClick={()=>this.selectAction(item.type)}>
                <Switch size="small" checked={item.type == type ? true : false} style={{float:'right',marginTop:'8px'}} />
                {item.title}
              </div>
            )
          })}
        </ItemBox>
      </div>
    );
  }
}
export default OpenAnimation;