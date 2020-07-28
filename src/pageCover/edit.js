import { Component } from "react";
import {ItemBox,Right,Content,Help} from '@/components/';
import {Button,Message} from 'antd';
import style from './style.less';
import {helpShow} from '@/utils/help';

import {mediaImgConfig} from '@/utils/oss.config';
import ItemImg from '../components/ItemImg';

class PromptEdit extends Component {
  state = {
    pc_img:'',
    app_img:''
  }

  componentDidMount(){
    const { data } = this.props;
    this.setState({
      pc_img:data.pc_img ? data.pc_img : '',
      app_img:data.app_img ? data.app_img : '',
    })
  }

  pcSelectMedia = (arr) => {
    this.setState({
      pc_img:arr[0].path.path
    },()=>{
      this.save()
    })
  }
  appSelectMedia = (arr) => {
    this.setState({
      app_img:arr[0].path.path
    },()=>{
      this.save()
    })
  }
  pcDel = () => {
    this.setState({
      pc_img:''
    },()=>{
      this.save()
    })
  }
  appDel = () => {
    this.setState({
      app_img:''
    },()=>{
      this.save()
    })
  }
  save = () => {
    this.props.onChange(this.state);
    // Message.success('保存成功');
  }

  render () {
    const {pc_img,app_img} = this.state;
    const helpShowFlag = false;
    return(
      <div>
        <ItemBox>
         <div className={style.title}>
            <span style={{float:'left'}}>PC端</span>
            {helpShow && helpShowFlag &&
              (
                <div style={{float:'left', width:'18px', height:'18px', position:'relative',marginLeft:'5px'}}>
                  <Help style={{fontSize:'14px',color:'#999999',float:'left'}} />
                </div>
              )
            }
            <div style={{clear:'both'}}></div>
          </div>
          <ItemImg 
            url={mediaImgConfig(pc_img,'img')}
            imgSize='1920X1080'
            onChange={this.pcSelectMedia}
            onDel={this.pcDel}
          />
          <div className={style.mb10}></div>
        </ItemBox>
        <ItemBox>
          <div className={style.mb10}></div>
          <div className={style.title}>
            <span style={{float:'left'}}>移动端</span>
            {helpShow && helpShowFlag &&
              (
                <div style={{float:'left', width:'18px', height:'18px', position:'relative',marginLeft:'5px'}}>
                  <Help style={{fontSize:'14px',color:'#999999',float:'left'}} />
                </div>
              )
            }
            <div style={{clear:'both'}}></div>
          </div>
          <ItemImg 
            url={mediaImgConfig(app_img,'img')}
            imgSize='360X640'
            onChange={this.appSelectMedia}
            onDel={this.appDel}
          />
        </ItemBox>
        {/*<ItemBox>
          <Button type="primary" style={{width:'100%',margin:'10px 0'}} onClick={this.save}>
            确定
          </Button>
        </ItemBox>*/}
      </div>
    );
  }
}
export default PromptEdit;