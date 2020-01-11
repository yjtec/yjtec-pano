import React from 'react';
import {ItemBox} from '@/components/';
import Animate from './animate';
import style from '../style.less';

export default class Sequence extends React.Component{
  constructor(props) {
    super(props);
    const {actionData} = props;
    this.state = {
      url:(actionData && actionData.url) ? actionData.url : '',
      playTime:(actionData && actionData.playTime) ? actionData.playTime : {total:1,time:1,pertime:1},
    }
  }

  componentDidUpdate(prevProps){
    if(JSON.stringify(prevProps.actionData) !== JSON.stringify(this.props.actionData)){
      if (this.props.actionData) {
        const {actionData} = this.props;
        this.setState({
          url:actionData.url,
          playTime:actionData.playTime
        })
      }
    }
  }

  handleAnimate = ({url,playTime}) => {
    const {total,time,pertime} = playTime;
    this.setState({
      url:url,
      playTime:{total,time,pertime}
    },()=>{
      this.props.onChange(this.state);
    })
  }

  render(){
    return(
      <div>
        <ItemBox>
          <div className={style.title}>
            序列图
          </div>
          <Animate {...this.state} onChange={this.handleAnimate} />
        </ItemBox>
      </div>
    )
  }
}