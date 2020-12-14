import React from 'react';
import {Button} from '@/components/Form';
import styles from './style.less';
import {mediaImgConfig} from '@/utils/oss.config';
import Media from '@/components/MediaModal';

export default class icon extends React.Component {
  state = {
    userMediaVisible:false,
    url:''
  }

  componentDidUpdate(prevProps, prevState) {
    const {url} = this.props;
    if(prevProps.url != url){
      if (url) {
        this.setState({
          url: url 
        });
      }
    }
  }

  //打开素材库选择窗口
  openMediaModal = () => {
    this.setState({
      userMediaVisible:true
    })
  }
  //关闭素材库选择窗口
  closeMediaModal = () => {
    this.setState({
      userMediaVisible:false
    })
  }
  //选择素材返回值
  selectMedia = (arr) => {
    this.setState({
      url:arr[0].path.path
    },()=>this.save());
    this.closeMediaModal();
  }

  save = () => {
    const {url} = this.state;
    this.props.onChange(url)
  }

  render() {
    const {userMediaVisible,url} = this.state;
    return (
      <div className={styles.menu_icon}>
        <img src={url ? mediaImgConfig(url,'img') : ''} alt='图标'/>
        <span style={{marginLeft:'10px',color: 'rgba(255,255,255,0.45)'}}>
          建议尺寸<br/>100X100
        </span>
        <div className={styles.menu_icon_btn} onClick={()=>this.openMediaModal()}>
          编辑图标
        </div>
        <div style={{clear:'both'}}></div>

        <Media
          title='图片素材库'
          mediaType={1}
          tabType={1}
          multipleChoices={false}
          width='900px'
          visible={userMediaVisible}
          onChange={this.selectMedia}
          onCancel={this.closeMediaModal}
        />
      </div>
    );
  }
}
