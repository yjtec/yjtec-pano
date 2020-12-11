import { Component } from "react";
import {ItemBox,Right,Content,Help} from '@/components/';
import {SliderSingle,Color} from '@/components/Form';
import {Select,Button,Message,Checkbox} from 'antd';
import styles from './style.less';
import {helpShow} from '@/utils/help';

import {mediaImgConfig} from '@/utils/oss.config';
import ItemImg from '../components/ItemImg';

const optionData = [
  {id:1,value:1,label:'自动进入'},
  {id:2,value:2,label:'点击进入'},
]
const Option = Select.Option;
class PromptEdit extends Component {
  state = {
    pc_img:'',
    app_img:'',
    type:1,
    time:5,
    bg_color:{r:0,g:0,b:0,a:0.65},
    bg_img:'',
    repeat:1
  }

  componentDidMount(){
    const { data } = this.props;
    this.setState({
      pc_img:data.pc_img ? data.pc_img : '',
      app_img:data.app_img ? data.app_img : '',
      type:data.type ? data.type : 1,
      time:data.time ? data.time : 5,
      bg_color:data.bg_color ? data.bg_color : {r:0,g:0,b:0,a:0.65},
      bg_img:data.bg_img ? data.bg_img : '',
      repeat:data.repeat ? data.repeat : 1
    })
  }

  handleImg = (type,arr) => {
    switch(type){
      case 'pc_img':
        this.setState({
          pc_img:arr[0].path.path
        },()=>{this.save()});
        break;
      case 'app_img':
        this.setState({
          app_img:arr[0].path.path
        },()=>{this.save()});
        break;
      case 'bg_img':
        this.setState({
          bg_img:arr[0].path.path
        },()=>{this.save()});
        break;
      default:
        Message.warning('类型错误！');
    }
  }

  handleDel = type => {
    switch(type){
      case 'pc_img':
        this.setState({
          pc_img:''
        },()=>{this.save()});
        break;
      case 'app_img':
        this.setState({
          app_img:''
        },()=>{this.save()});
        break;
      case 'bg_img':
        this.setState({
          bg_img:''
        },()=>{this.save()});
        break;
      default:
        Message.warning('类型错误！');
    }
  }

  handleEntryMode = value =>{
    this.setState({
      type:value
    },()=>{this.save()})
  }
  handleTime = value => {
    this.setState({
      time: value
    },()=>{this.save()})
  }
  handleBgColor=(e)=>{
    this.setState({
      bg_color:{
        r:e.rgb.r,
        g:e.rgb.g,
        b:e.rgb.b,
        a:e.rgb.a
      },
    },()=>{this.save()})
  }
  setRepeat = (e) => {
    this.setState({
      repeat: e.target.checked ? 1 : 0
    },()=>{this.save()})
  }

  save = () => {
    this.props.onChange(this.state);
    // Message.success('保存成功');
  }

  render () {
    const {pc_img,app_img,type,time,bg_color,bg_img,repeat} = this.state;
    return(
      <div>
        <ItemBox>
         <div className={styles.title}>
            <span style={{float:'left'}}>PC端</span>
            {helpShow &&
              (
                <div style={{float:'left', width:'18px', height:'18px', position:'relative',marginLeft:'5px'}}>
                  <Help link={'page_cover'} style={{fontSize:'14px',color:'#999999',float:'left'}} />
                </div>
              )
            }
            <div style={{clear:'both'}}></div>
          </div>
          <ItemImg 
            url={pc_img ? mediaImgConfig(pc_img,'img') : ''}
            imgSize='500X500'
            onChange={arr=>this.handleImg('pc_img',arr)}
            onDel={() => this.handleDel('pc_img')}
          />
          <div className={styles.mb10}></div>
        </ItemBox>
        <ItemBox>
          <div className={styles.mb10}></div>
          <div className={styles.title}>
            <span style={{float:'left'}}>移动端</span>
            {helpShow &&
              (
                <div style={{float:'left', width:'18px', height:'18px', position:'relative',marginLeft:'5px'}}>
                  <Help link={'page_cover'} style={{fontSize:'14px',color:'#999999',float:'left'}} />
                </div>
              )
            }
            <div style={{clear:'both'}}></div>
          </div>
          <ItemImg 
            url={app_img ? mediaImgConfig(app_img,'img') : ''}
            imgSize='300X300'
            onChange={arr => this.handleImg('app_img',arr)}
            onDel={() => this.handleDel('app_img')}
          />
          <div className={styles.mb10}></div>
        </ItemBox>

        <ItemBox>
          <div className={styles.mb10}></div>
          <div className={styles.title}>
            <span style={{float:'left'}}>进入方式</span>
            <div style={{clear:'both'}}></div>
          </div>
          <div className={styles.selectDiv}>
            <Select placeholder="选择进入方式" name="imageurl" value={type} style={{width:'100%'}} onChange={this.handleEntryMode}>
              {optionData.map((item,index)=> (
                <Option key={index} value={item.value}>{item.label}</Option>
              ))}
            </Select>
          </div>
          <div className={styles.mb10}></div>
          {
            type == 1 && (
              <div>
                <div className={styles.title}>
                  <span style={{float:'left'}}>停留时长</span>
                  <div style={{clear:'both'}}></div>
                </div>
                <div className={styles.sliderDiv}>
                  <SliderSingle
                    defaultValue= {time}
                    max= {60}
                    min= {1}
                    step= {1}
                    onChange={value => this.handleTime(value)}
                  />
                </div>
                <div className={styles.mb10}></div>
              </div>
            )
          }
        </ItemBox>
        <ItemBox>
          <div className={styles.mb10}></div>
          <div className={styles.title}>
            <span style={{float:'left'}}>背景色设置</span>
            <div style={{clear:'both'}}></div>
          </div>
          <Color color={bg_color} onChange={this.handleBgColor}/>
          <div className={styles.mb10}></div>
          <div className={styles.title}>
            <span className={styles.checkboxC}>
              <Checkbox checked={repeat == 1 ? true : false} onChange={this.setRepeat} className={styles.checkbox}>背景平铺</Checkbox>
            </span>
            <span style={{float:'left'}}>背景图设置</span>
            <div style={{clear:'both'}}></div>
          </div>
          <ItemImg 
            url={bg_img ? mediaImgConfig(bg_img,'img') : ''}
            imgSize='100X100'
            onChange={arr => this.handleImg('bg_img',arr)}
            onDel={() => this.handleDel('bg_img')}
          />
          <div className={styles.mb10}></div>
        </ItemBox>
      </div>
    );
  }
}
export default PromptEdit;