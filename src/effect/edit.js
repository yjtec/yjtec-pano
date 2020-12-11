import React from 'react';
import {connect} from 'dva';
import {ItemBox,Right,Help} from '@/components/';
import {SliderSingle} from '@/components/Form';
import {Button} from 'antd';
import {Kr} from '@/utils/kr/';
import styles from './style.less';
import {mediaImgConfig} from '@/utils/oss.config';
import {helpShow} from '@/utils/help';
import Modal from '@/components/ApplyToScene';
import {Obj} from 'yjtec-support';

import { ItemImg } from 'yjtec-pano';
import Type from './type';
import Size from './size';

class Effect extends React.Component{
  state={
    imageurl:'',
    type:'custom',
    effect_size:1,
    ath:0,
    atv:0,

    sceneListVisible: false,
    categoryArr:[],
    scenesArr:[]
  }
  componentDidMount(){
    const {effect:{data},category,scene} = this.props;
    this.setState({
      imageurl:data.imageurl ? data.imageurl : '',
      type:data.type ? data.type : 'custom',
      effect_size:data.effect_size ? data.effect_size : 1,
      ath:data.ath ? data.ath : 0,
      atv:data.atv ? data.atv : 0,

      categoryArr: category,
      scenesArr: scene
    })
  }

  componentDidUpdate(prevProps,prevState) {
    const {effect:{data},category,scene} = this.props;
    if (!Obj.isEqual(prevState.categoryArr,category) || !Obj.isEqual(prevState.scenesArr,scene)) {
      this.setState({
        ...this.state,
        categoryArr:category,
        scenesArr:scene
      })
    }
    if (data) {
      if (!Obj.isEqual(prevProps.effect.data,data)) {
        this.setState({
          ...this.state,
          imageurl:data.imageurl ? data.imageurl : '',
          type:data.type ? data.type : 'custom',
          effect_size:data.effect_size ? data.effect_size : 1,
          ath:data.ath ? data.ath : 0,
          atv:data.atv ? data.atv : 0,
        })
      }
    }
  }
  
  handleChange = value => {
    if(value == 'custom' || value == 'sunlight'){
      this.setState({
        imageurl: '',
        type: value,
      },()=>this.request())
    }else{
      this.setState({
        imageurl: value,
        type: 'system'
      },()=>this.request())
    }
  }

  //选择素材
  selectMedia = (arr) => {  //添加自定义图片时
    this.setState({
      imageurl:arr[0].path.path
    },()=>{
      this.request()
    })
  }

  //删除自定义图片
  delSkyImg = () => { 
    this.setState({
      imageurl:'',
      type:'custom',
      effect_size:1,
      ath:0,
      atv:0
    },()=>{
      this.request()
    })
  }

  setEffectSize = e => {
    this.setState({
      effect_size: e.target.value
    },()=>{
      this.request();
    });
  }

  request = () => { //请求
    const {imageurl,type,effect_size,ath,atv} = this.state;
    this.props.onEdit({
      imageurl:imageurl,
      type:type,
      effect_size:effect_size,
      ath:ath,
      atv:atv
    });
  }

  //应用到所有场景
  appliedToScene=()=>{
    this.setState({
      sceneListVisible: true
    })
  }
  //关闭应用到所有场景
  onCancelAppliedToScene=()=>{
    this.setState({
      sceneListVisible: false
    })
  }

  setAllScene=(data,sceneIds)=>{
    const {onSetAllScene} = this.props;
    onSetAllScene(data,sceneIds);
  }

  render(){
    const {sceneListVisible,categoryArr,scenesArr,effect_size,type,imageurl} = this.state;
    const {
      effect:{data},
      loading,
      scene,
      category,
      media:{systemLists},
      SysFileList
    } = this.props;

    const snowAll =SysFileList.map(item => ({label:item.name,'value':item.path.path}));

    //选择框value
    let selectType = '';
    if (type == 'system') {
      selectType = imageurl
    }else{
      selectType = type
    }

    return(
      <div>
        <ItemBox>
          <div className={styles.title}>
            <span className={styles.checkboxC}>
              {(imageurl || type == 'sunlight') ? <div onClick={()=>this.delSkyImg()}>删除</div> : ''}
            </span>
            <span style={{float:'left'}}>特效</span>
            {helpShow && 
              (
                <div style={{float:'left', width:'18px', height:'18px',position:'relative',marginLeft:'5px'}}>
                  <Help link={'effect'} style={{fontSize:'14px',color:'#999999',float:'left'}} />
                </div>
              )
            }
            <div style={{clear:'both'}}></div>
          </div>
          <div className={styles.select}>
            <Type value={selectType} effectList={snowAll} onChange={this.handleChange} />
          </div>

          {type == 'sunlight' ? 
            (
              <div style={{padding:'20px 0 10px',cursor:'pointer',color:'#108EE9',fontSize:'14px'}} onClick={()=>this.props.onSetView()}>
                拖动太阳光，移动位置
              </div>
            ):(
              <div style={{padding:'20px 0'}}>
                <Size value={effect_size} onChange={this.setEffectSize} />
              </div>
            )
          }

          {type == 'custom' && (
              <div style={{padding:'0 0 20px'}}>
                <ItemImg 
                  url={data && data.imageurl ? mediaImgConfig(data.imageurl,'img') : ''}
                  imgSize='100X100'
                  onChange={this.selectMedia}
                  onDel={this.delSkyImg}
                />
              </div>
            )
          }
          
          <div className={styles.title} style={{margin:'10px 0 0 0',lineHeight:'22px'}}>
            <span className={styles.checkboxC}>
              <Button onClick={()=>this.appliedToScene()} style={{padding:'0 5px',height:'auto',background:'none',fontSize:'12px',color:'#fff',borderColor: '#008aff'}}>
                选择场景
              </Button>
            </span>
            应用到:
          </div>
        </ItemBox>

        {/*老的编辑方式
        <ItemBox>
          {editItem.map(item =>{
            return (
              <div key={item.key} className={styles.list}>
                <p>{item.title}</p>
                <SliderSingle
                  {...item.slider}
                  defaultValue={data[item.key] ? data[item.key] : item.slider.defaultValue}
                  onChange={value => this.handleChange(item.key,value)}
                  />
              </div>
            )
          })}
        </ItemBox>
        */}
        <Modal
          visible={sceneListVisible}
          title='选择场景'
          onCancel={this.onCancelAppliedToScene}
          categoryArr={categoryArr}
          scenesArr={scenesArr}
          data={''}
          onOk={this.setAllScene}
        >
        </Modal>
      </div>
    )
  }
}

export default Effect;