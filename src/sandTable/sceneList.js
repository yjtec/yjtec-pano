import { Component } from "react";
import {Row,Col} from 'antd';
import {connect} from 'dva';
import {ItemBox,Drawer} from '@/components/';
import {Button} from '@/components/Form';
import style from './style.less';
import Scene from './scene';
const residualArr = (arr1,arr2) => {
  let new_arr = [];
  arr1.map(item=>{
    if (!arr2.some(j => item.id == j.scene_id && item.x !== '' && item.x !== null)) {
      new_arr.push(item); 
    }
  })

  return new_arr;
}
class SceneList extends Component {
  state = {
    data:{
      heading:0,
      align:'topleft',
      x:0,
      y:0
    }
  }

  handleScene = scene => {  //选择场景后返回的sceneId 和 scene.name
    const {data} = this.state;
    this.setState({
      data:{
        ...data,
        scene_name:scene.name,
        scene_id:scene.id,
        scene_thumb:scene.thumb.path,
        domain:scene.domain
      }
    })
  }

  handleSave = () =>{
    const {data} = this.state;
    if (data.scene_id) {
      this.props.onCancel(data);
      this.setState({
        data:{
          heading:0,
          align:'topleft',
          x:0,
          y:0
        } 
      });
    }
  }
  handleCancel = () => {
    this.props.onCancel();
  }
 
  render () {
    const {visible,spots,scene} = this.props;
    const {data} = this.state;
    return(
      <Drawer
        visible={visible}
        title='选择场景'
        destroyOnClose={false}
        onCancel={this.handleCancel}
      >
        <ItemBox>
          <Scene data={data} spots={spots} onChange={this.handleScene}/>
        </ItemBox>
        <ItemBox>
          <Row style={{margin:'0 -10px'}}>
            <Col span={24} className={style.panoList}>
              <Button 
                disabled={residualArr(scene,spots).length > 0 ? false : true} 
                style={{backgroundColor: '#008aff', borderColor: '#008aff', color:'rgba(255,255,255,1)'}} 
                title="完成" 
                onClick={this.handleSave}
              />
            </Col>
          </Row>
        </ItemBox>
      </Drawer>
    );
  }
}
export default connect(({scene})=>({
  scene:scene.all
}))(SceneList);