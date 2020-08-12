import { Component } from "react";
import {Row,Col} from 'antd';
import {ItemBox,Drawer} from '@/components/';
import {Button} from '@/components/Form';
import style from './style.less';
import Scene from './scene';

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
        scene_thumb:scene.thumb.path
      }
    })
  }

  handleSave = () =>{
    const {data} = this.state;
    if (data.scene_id) {
      this.props.onCancel(data);
    }
  }
  handleCancel = () => {
    this.props.onCancel();
  }
 
  render () {
    const {visible,spots} = this.props;
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
              <Button title="完成" onClick={this.handleSave}/>
            </Col>
          </Row>
        </ItemBox>
      </Drawer>
    );
  }
}
export default SceneList;