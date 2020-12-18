import { Component } from "react";
import {ItemBox,Help} from '@/components/';
import {Switch,message} from 'antd';
import {Button} from '@/components/Form';
import styles from './style.less';
import {helpShow} from '@/utils/help';
import {mediaImgConfig} from '@/utils/oss.config';
import ItemImg from '../components/ItemImg';
import AllScene from '@/components/AllScene';

class InitialSceneEdit extends Component {
  state = {
    state:false,
    scene:'',
    visible:false,
    scenesArr:[]
  }

  componentDidMount(){
    const { data,scenesArr } = this.props;
    this.setState({
      ...data,
      scenesArr:scenesArr
    })
  }

  initailSceneState = e => {
    this.setState({
      state: e
    },()=>this.save());
  }

  selectScene = sceneIds => {
    this.setState({
      scene: sceneIds[0]
    },()=>this.save());
  }

  showAllScene = () => {
    this.setState({
      visible: true
    });
  }

  closeModal = () => {
    this.setState({
      visible: false
    });
  }
  
  save = () => {
    this.props.onChange({
      state:this.state.state,
      scene:this.state.scene
    });
  }

  render () {
    const {url,state,visible,scenesArr,scene} = this.state;
    const new_scene = scenesArr.filter(item=> item.id == scene);
    return(
      <div>
        <ItemBox>
          <div className={styles.title}>
            <span className={styles.checkboxC}>
              <Switch size="small" checked={state} onClick={(e)=>this.initailSceneState(e)}/>
            </span>
            自定义初始场景
            <div style={{clear:'both'}}></div>
            <div className={styles.tips}>
              注：开启后可设置作品打开时跳转至某一固定场景
            </div>
          </div>
          {state && <div>
            <div className={styles.selectBtn}>
              <Button title='选择初始场景' onClick={()=> this.showAllScene()}/>
            </div>
            <div className={styles.sceneList}>
              {new_scene.length > 0 ? <div>
                <img src={new_scene[0].thumb.url} alt={new_scene[0].name} />
                <p>
                  {new_scene[0].name}
                </p>
              </div> : <span>请选择场景</span>}
              <div style={{clear:'both'}}></div>
            </div>
          </div>}
          
          <div style={{clear:'both'}}></div>
        </ItemBox>

        <AllScene title="选择场景" visible={visible} multiple={false} onCancel={this.closeModal} onOk={this.selectScene} />
      </div>
    );
  }
}
export default InitialSceneEdit;