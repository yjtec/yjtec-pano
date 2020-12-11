import React,{Component} from 'react';
import {Row,Col} from 'antd';
import styles from './style.less';
import {connect} from 'dva';
import {panoImgConfig} from '@/utils/oss.config';

const residualArr = (arr1,arr2) => {
  let new_arr = [];
  arr1.map(item=>{
    if (!arr2.some(j => item.id == j.scene_id && item.x !== '' && item.x !== null)) {
      new_arr.push(item); 
    }
  })

  return new_arr;
}

class ActionScene extends Component{
  render(){
    const {scene,data,spots,onChange} = this.props;
    return (
      <div style={{marginBottom:'72px'}}>
        <div className={styles.title}>
          选择目标场景
        </div>
        <div className={styles.panoLists}>
          <Row>
          {residualArr(scene,spots).map(item=>{
            return (
              <Col key={item.id} span={8} className={styles.panoList} onClick={()=> onChange(item)}>
                <div>
                  <img alt='img' src={item.thumb.url == undefined ? panoImgConfig(item.thumb.path) : item.thumb.url} style={{width:'100%',height:'62px',border:(data && data.scene_id == item.id) ? '2px solid #008aff' : ''}} />
                </div>
                <span>
                  {item.name}
                </span>
              </Col>
            )
          })}
          </Row>
        </div>
      </div>
    )
  }
}
export default connect(({scene})=>({
  scene:scene.all
}))(ActionScene);