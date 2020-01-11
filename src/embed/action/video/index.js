import React from 'react';
import VipAuthority from '@/components/VipAuthority';
import Edit from './edit';
import style from '../style.less';

export default class Video extends React.Component{
  constructor(props) {
    super(props);
    const {actionData} = props;
    this.state = {
      videoUrl:(actionData && actionData.videoUrl) ? actionData.videoUrl : '',
      title:(actionData && actionData.title) ? actionData.title : '',
      thumbUrl:(actionData && actionData.thumbUrl) ? actionData.thumbUrl : '',
      loop:(actionData && actionData.loop == 1) ? 1 : 0,
      autoplay:(actionData && actionData.autoplay == 1) ? 1 : 0,
      width:(actionData && actionData.width) ? actionData.width : 300,
      height:(actionData && actionData.height) ? actionData.height : 180,
    }
  }

  componentDidUpdate(prevProps){
    if(JSON.stringify(prevProps.actionData) !== JSON.stringify(this.props.actionData)){
      if (this.props.actionData) {
        const {actionData} = this.props;
        this.setState({
          videoUrl:actionData.videoUrl,
          title:actionData.title,
          thumbUrl:actionData.thumbUrl,
          loop:actionData.loop,
          autoplay:actionData.autoplay,
          width:actionData.width,
          height:actionData.height
        })
      }
    }
  }

  handleVideo = (data) => {
    this.setState({
      ...data
    },()=>{
      this.props.onChange(this.state);
    })
  }

  render(){
    const {is_vip} = this.props;
    return(
      <div>
        {is_vip == 0 && <VipAuthority />}
        {is_vip == 1 && <Edit data={this.state} onChange={this.handleVideo} />}
      </div>
    )
  }
}