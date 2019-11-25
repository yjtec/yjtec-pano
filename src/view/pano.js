import React from 'react';
import styles from './style.less';
import krpanoJS from 'krpanoJS';
import Scene from '@/utils/kr/scene';
import {Obj} from 'yjtec-support';
import {connect} from 'dva';
let jsapi = null;
const setView = view => {
  const {fov,hlookat,vlookat} = view;
  Object.keys({
    fov:fov,
    fovmin:fov,
    fovmax:fov,
    hlookat:hlookat,
    hlookatmin:hlookat,
    hlookatmax:hlookat,
    vlookat:vlookat,
    vlookatmin:vlookat,
    vlookatmax:vlookat
  }).map(item => {
    jsapi.set('view.'+item,view[item]);
  });  
}
class View extends React.Component{
  state ={
    loading:true,
  }
  componentDidMount(){
    const {view,scene,viewDefault} = this.props;
    krpanoJS.embedpano({
      target:'viewpano',
      html5: "auto",
      id:'viewpanoSWFOBJ',
      xml:null,
      consolelog: true,
      onready:(krpano) =>{
        jsapi = krpano.get('global');
        krpano.set('events.onxmlcomplete',()=>{
          if(viewDefault) setView(viewDefault);
          //Ke.loaded(krpano);
        })
        let xml ="<krpano><scene name='pano_scene'>"
        xml += Scene(scene);
        xml +="</scene></krpano>";
        krpano.call('loadxml('+xml+')');
        krpano.call('loadscene(pano_scene)');
      }
    })
  }
  componentDidUpdate(prevProps) {
    const {view} = this.props;
    if(view && !Obj.isEqual(prevProps.view,this.props.view)){
      setView(view);
    }
  }
  componentWillUnmount(){
    window.removepano("viewpanoSWFOBJ");
  }  
  render(){
    return(
      <div style={{height:'100px',background:'red'}} id="viewpano" />
    )
  }
}

export default connect(({pano,view,global})=>({
  scene:pano.scene,
  view:view.data,
  viewDefault:global.scene.view
  // scene:global.scene
}))(View);