import React from 'react';
import {Input,message} from 'antd';
import {Drawer,ItemBox} from '@/components/';
import {Button} from '@/components/Form';
import style from './style.less';

import {mediaImgConfig} from '@/utils/oss.config';
import ItemImg from '../components/ItemImg';

export default class DetailsEdit extends React.Component {
  state = {
    title:'',
    url:'',
    fov:'',
    ath:'',
    atv:''
  }

  componentDidMount() {
    const {visible,data} = this.props;
    this.setState({
      ...data,
    });
    this.scrollFunc();

    //注册监听事件
    if (document.addEventListener) { //火狐使用DOMMouseScroll绑定
      document.addEventListener('DOMMouseScroll', this.scrollFunc, false);
    }
    //其他浏览器直接绑定滚动事件
    window.onmousewheel = document.onmousewheel = this.scrollFunc;
  }

  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(this.props.data) != JSON.stringify(prevProps.data)) {
      if (this.props.data) {

        const {visible,data} = this.props;
        this.setState({
          ...data,
        });

      }
    }
  }

  scrollFunc = () => {
    const {krpano} = this.props;
    this.setState({
      fov: krpano.get('view.fov')
    },()=>{
      this.saveOne()
    });
  }

  setTitle = (e) => {
    this.setState({
      title: e.target.value
    },()=>{
      this.saveOne()
    });
  }

  delImg=()=>{
    this.setState({
      url: ''
    },()=>{
      this.saveOne()
    });
  }

  selectImg=(arr)=>{
    this.setState({
      url: arr[0].path.path
    },()=>{
      this.saveOne()
    });
  }

  saveOne = () => {
    const {title,url,fov,ath,atv} = this.state;
    const data = {
      title: title,
      url: url,
      fov: fov,
      ath: ath,
      atv: atv
    }
    this.props.saveOne(data)
  }

  save = () => {
    const {title,url,fov,ath,atv} = this.state;
    if (!title) {
      message.warning('请输入标题');
      return;
    }
    const data = {
      title: title,
      url: url,
      fov: fov,
      ath: ath,
      atv: atv
    }
    this.props.saveList(data);
  }

  onCancel = () => {
    this.props.onCloseEdit()
  }

  render() {
    const {title,url,fov} = this.state;
    const {visible} = this.props;
    return (
      <Drawer
        visible={visible}
        title={'细节设置'}
        destroyOnClose={false}
        onCancel={this.onCancel}
      >
        <ItemBox>
          <div className={style.detailsEdit}>
            <div className={style.tips}>
              <p>
                <span>当前视角范围（FOV）: {parseInt(fov)}</span>
                通过放大或缩小全景，设置最终的视角显示范围
              </p>
            </div>
          </div>
        </ItemBox>
        <ItemBox style={{padding:'10px 0'}}>
          <div className={style.itemTitle}>
            标题
          </div>
          <div className={style.inputDiv}>
            <Input placeholder="请输入标题" maxLength={16} value={title} onChange={this.setTitle}/>
          </div>
          <div className={style.mb20}></div>
          <div className={style.itemTitle}>
            封面
          </div>
          <ItemImg 
            url={url ? mediaImgConfig(url,'img') : ''}
            imgSize='200X200'
            onChange={this.selectImg}
            onDel={this.delImg}
          />
        </ItemBox>
        <ItemBox>
          <Button title='保存' onClick={()=> this.save()} style={{margin:'10px 0'}}/>
        </ItemBox>
      </Drawer>
    );
  }
}