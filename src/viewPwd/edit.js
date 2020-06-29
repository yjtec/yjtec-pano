import { Component } from "react";
import {ItemBox,Help} from '@/components/';
import {Input} from 'antd';
import style from './style.less';
import {helpShow} from '@/utils/help';

class LoadsceneAction extends Component {
  state = {
    view_pwd:'',
    tipsVisible:false
  }

  componentDidMount(){
    const { data } = this.props;
    this.setState({
      view_pwd:data ? data.view_pwd : '',
    })
  }

  setViewPwd = (e) => {
    const reg = /^\w+$/;
    if(reg.test(e.target.value)){
      this.setState({
        view_pwd: e.target.value,
        tipsVisible: false
      },()=>{
        this.runChenge()
      });
    }else{
      this.setState({
        view_pwd: e.target.value,
        tipsVisible: true
      });
    }
  }

  runChenge = () => {
    this.props.onChange(this.state);
  }
  render () {
    const {view_pwd,tipsVisible} = this.state;
    const helpShowFlag = false;
    return(
      <div>
        <ItemBox>
          <div className={style.title}>
            <span style={{float:'left'}}>密码访问</span>
            {helpShow && helpShowFlag && 
              (
                <div style={{float:'left', width:'18px', height:'18px', position:'relative',marginLeft:'5px'}}>
                  <Help style={{fontSize:'14px',color:'#999999',float:'left'}} />
                </div>
              )
            }
            <div style={{clear:'both'}}></div>
          </div>
          
          <div className={`${style.inputDiv} ${tipsVisible && style.viewPwd}`}>
            <Input.Password placeholder="请输入密码" maxLength={16} value={view_pwd} onChange={this.setViewPwd}/>
          </div>
          <div className={style.tigs}>
            注：仅支持 英文大小写、数字、下划线。
          </div>
          
          <div className={style.mb20}></div>
        </ItemBox>
      </div>
    );
  }
}
export default LoadsceneAction;