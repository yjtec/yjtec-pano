import { Component } from "react";
import {Button} from 'antd';
import style from './style.less';
import {ossPanoUrl,ossMediaUrl} from '@/utils/url.config';

class spotList extends Component {
  
  render() {
    const {data} = this.props;
    return (
      <div>
        <div className={style.title}>
          添加热点
        </div>
        <div>
          <Button type="primary" className={style.Button} style={{width:'100%'}} onClick={()=>this.props.addSpot()}>添加标记</Button>
        </div>
        <div style={{marginTop:'20px'}}>
          {data && data.map((item)=>{
            if (item.scene_thumb.indexOf('//') != -1) {
              return(
                <div key={item.scene_id} className={style.selectdPanoList}>
                  <span className={style.delSelectdPano} onClick={()=>this.props.delSpot(item.scene_id)}>删除</span>
                  <img alt='沙盘图片' src={item.scene_thumb} />
                  <div className={style.title}>{item.scene_name}</div>
                </div>
              )
            }else if(item.scene_thumb.substring(0,6) == '/panos'){
              return(
                <div key={item.scene_id} className={style.selectdPanoList}>
                  <span className={style.delSelectdPano} onClick={()=>this.props.delSpot(item.scene_id)}>删除</span>
                  <img alt='沙盘图片' src={ossPanoUrl + item.scene_thumb} />
                  <div className={style.title}>{item.scene_name}</div>
                </div>
              )
            }else{
              return(
                <div key={item.scene_id} className={style.selectdPanoList}>
                  <span className={style.delSelectdPano} onClick={()=>this.props.delSpot(item.scene_id)}>删除</span>
                  <img alt='沙盘图片' src={ossMediaUrl + item.scene_thumb} />
                  <div className={style.title}>{item.scene_name}</div>
                </div>
              )
            }
          })}
        </div>
      </div>
    );
  }
}
export default spotList;