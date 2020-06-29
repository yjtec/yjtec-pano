import { Component } from 'react';
import {Button,Row,Col,Icon} from 'antd';
import {Help} from '@/components/';
import style from './style.less';
import {Obj} from 'yjtec-support';
import UserMedia from '@/components/MediaModal/UserMedia';
import {helpShow} from '@/utils/help';
import {mediaImgConfig} from '@/utils/oss.config';

class ItemImg extends Component {
  state={
    userMediaVisible: false,
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
    this.props.onChange(arr);
    this.closeMediaModal();
  }
  //删除图片
  del = () => {
    this.props.onDel();
  }

  render(){
    const {url,imgSize} = this.props;
    const {userMediaVisible} = this.state;
    return(
      <div>
        <Row>
          <Col span={24} className={style.mb10}>
            {!Obj.isNull(url) ? 
              <div className={style.defaultImg}>
                <img alt="封面图" src={mediaImgConfig(url,'img')} className={style.img} />
                <div className={style.delimg} onClick={()=>this.del()}>
                  <Icon type="delete" />
                </div>
              </div> 
              : 
              <div className={style.defaultImg}>
                <span>
                  建议大小<br/>{imgSize}
                </span>
              </div>
            }
          </Col>
          <Col span={12}>
            <Button type="primary" onClick={()=>this.openMediaModal()}>
              选择图片
            </Button>
          </Col>
          <Col span={12} className={style.prompt}>
            建议大小<br/>
            {imgSize}
          </Col>
        </Row>
        <UserMedia
          title='图片素材库'
          mediaType='1'
          multipleChoices={false}
          width='900px'
          visible={userMediaVisible}
          onChange={this.selectMedia}
          onCancel={this.closeMediaModal}
        />
      </div>
    )
  }
}
export default ItemImg;