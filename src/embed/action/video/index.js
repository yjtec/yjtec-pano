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
      loop:(actionData && actionData.loop) ? actionData.loop : 1,
      autoplay:(actionData && actionData.autoplay) ? actionData.autoplay : 1
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
          autoplay:actionData.autoplay
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
        {is_vip == 1 && <Edit {...this.state} onChange={this.handleVideo} />}
      </div>
    )
  }
}