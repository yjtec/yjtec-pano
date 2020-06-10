import { Component } from "react";
import {ItemBox,Right,Content,Help} from '@/components/';
import {Button,Message} from 'antd';
import style from './style.less';
import {helpShow} from '@/utils/help';
import ItemImg from '../components/ItemImg';
import {SliderSingle} from '@/components/Form';

class PromptEdit extends Component {
  state = {
    pc_img:'',
    app_img:'',
    time:5
  }

  componentDidMount(){
    const { data } = this.props;
    this.setState({
      pc_img:data.pc_img ? data.pc_img : '',
      app_img:data.app_img ? data.app_img : '',
      time:data.time ? data.time : 5
    })
  }

  pcSelectMedia = (arr) => {
    this.setState({
      pc_img:arr.join()
    },()=>{
      this.save()
    })
  }
  appSelectMedia = (arr) => {
    this.setState({
      app_img:arr.join()
    },()=>{
      this.save()
    })
  }
  displayTime = (value) => {
    this.setState({
      time: value
    },()=>{this.save()})
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
    const {pc_img,app_img,time} = this.state;
    return(
      <div>
        <ItemBox>
         <div className={style.title}>
            <span style={{float:'left'}}>PC端</span>
            {helpShow && 
              (
                <div style={{float:'left', width:'18px', height:'18px', position:'relative',marginLeft:'5px'}}>
                  <Help style={{fontSize:'14px',color:'#999999',float:'left'}} />
                </div>
              )
            }
            <div style={{clear:'both'}}></div>
          </div>
          <ItemImg 
            url={pc_img}
            onChange={this.pcSelectMedia}
            onDel={this.pcDel}
          />
          <div className={style.mb10}></div>
        </ItemBox>
        <ItemBox>
          <div className={style.mb10}></div>
          <div className={style.title}>
            <span style={{float:'left'}}>移动端</span>
            {helpShow && 
              (
                <div style={{float:'left', width:'18px', height:'18px', position:'relative',marginLeft:'5px'}}>
                  <Help style={{fontSize:'14px',color:'#999999',float:'left'}} />
                </div>
              )
            }
            <div style={{clear:'both'}}></div>
          </div>
          <ItemImg 
            url={app_img}
            onChange={this.appSelectMedia}
            onDel={this.appDel}
          />
          <div className={style.mb10}></div>
        </ItemBox>
        <ItemBox>
          <div className={style.mb10}></div>
          <div className={style.title}>
            显示时间(S)
          </div>
          <div className={style.sliderDiv}>
            <SliderSingle
              defaultValue= {time}
              max= {10}
              min= {0}
              step= {1}
              onChange={value => this.displayTime(value)}
            />
          </div>
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