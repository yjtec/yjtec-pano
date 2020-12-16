import { Component } from "react";
import {Button} from 'antd';
import styles from './style.less';
import {ossPanoUrl,ossMediaUrl} from '@/utils/url.config';

class spotList extends Component {
  
  render() {
    const {data,editSpotId} = this.props;
    return (
      <div>
        <div className={styles.title}>
          标记管理
        </div>
        <div>
          <Button type="primary" className={styles.Button} style={{width:'100%'}} onClick={()=>this.props.addSpot()}>添加标记</Button>
        </div>
        <div style={{marginTop:'20px'}}>
          {data && data.map((item)=>{
            if (item.scene_thumb.indexOf('//') != -1) {
              return(
                <div key={item.scene_id} className={styles.selectdPanoList}>
                  <span className={styles.delSelectdPano} onClick={()=>this.props.delSpot(item.scene_id)}>删除</span>
                  <img className={editSpotId == item.scene_id ? styles.click : ''} alt={item.scene_name} src={item.scene_thumb} />
                  <div className={styles.title}>{item.scene_name}</div>
                </div>
              )
            }else if(item.scene_thumb.substring(0,6) == '/panos'){
              return(
                <div key={item.scene_id} className={styles.selectdPanoList}>
                  <span className={styles.delSelectdPano} onClick={()=>this.props.delSpot(item.scene_id)}>删除</span>
                  <img className={editSpotId == item.scene_id ? styles.click : ''} alt={item.scene_name} src={ossPanoUrl + item.scene_thumb} />
                  <div className={styles.title}>{item.scene_name}</div>
                </div>
              )
            }else{
              return(
                <div key={item.scene_id} className={styles.selectdPanoList}>
                  <span className={styles.delSelectdPano} onClick={()=>this.props.delSpot(item.scene_id)}>删除</span>
                  <img className={editSpotId == item.scene_id ? styles.click : ''} alt={item.scene_name} src={ossMediaUrl + item.scene_thumb} />
                  <div className={styles.title}>{item.scene_name}</div>
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