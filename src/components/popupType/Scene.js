import React,{Component} from 'react';
import {Row,Col} from 'antd';
import styles from './style.less';
import {connect} from 'dva';
import {panoImgConfig} from '@/utils/oss.config';

@connect(({ loading,scene }) => ({
  loading:loading,
  scene:scene.all,
}))
export default class Scene extends React.Component {
  render(){
    const {scene,data,onChange} = this.props;
    return (
      <div>
        <div className={styles.title}>
          选择目标场景
        </div>
        <div className={styles.panoLists}>
          <Row>
          {scene.map(item=>(
            <Col key={item.id} span={8} className={styles.panoList} onClick={()=> onChange(item)}>
              <div>
                <img alt='img' src={panoImgConfig(item.thumb.path)} style={{width:'100%',height:'62px',border:(data && data.sceneId == item.id) ? '2px solid #008aff' : ''}} />
              </div>
              <span>
                {item.name}
              </span>
            </Col>
          ))}
          </Row>
        </div>
      </div>
    )
  }
}