import { Component } from "react";
import {ItemBox,Help} from '@/components/';
import {Switch,message} from 'antd';
import styles from './style.less';
import {helpShow} from '@/utils/help';
import {mediaImgConfig} from '@/utils/oss.config';
import ItemImg from '../components/ItemImg';

class LoadingEdit extends Component {
  state = {
    state:false,
    url:''
  }

  componentDidMount(){
    const { data } = this.props;
    this.setState({
      ...data
    })
  }

  loadingState = e => {
    this.setState({
      state: e
    },()=>{this.save()});
  }

  selectImg=(arr)=>{
    this.setState({
      url: arr[0].path.path
    },()=>{this.save()});
  }

  delImg=()=>{
    this.setState({
      url: '' 
    },()=>{this.save()});
  }
  
  save = () => {
    this.props.onChange(this.state);
  }

  render () {
    const {url,state} = this.state;
    return(
      <div>
        <ItemBox>
          <div className={styles.title}>
            <span className={styles.checkboxC}>
              <Switch size="small" checked={state} onClick={(e)=>this.loadingState(e)}/>
            </span>
            加载动画
            <div style={{clear:'both'}}></div>
            <div className={styles.tips}>
              注：开启后项目加载动画将使用你自定义的动画
            </div>
          </div>
          {state && <ItemImg 
            url={url ? mediaImgConfig(url,'img') : ''}
            imgSize='100X100'
            onChange={this.selectImg}
            onDel={this.delImg}
          />}
        </ItemBox>
      </div>
    );
  }
}
export default LoadingEdit;