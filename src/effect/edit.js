import React from 'react';
import {connect} from 'dva';
import {ItemBox,Right,Help} from '@/components/';
import {SliderSingle} from '@/components/Form';
import {List,Avatar,Select,Radio,Row,Col,Icon,Checkbox,Button} from 'antd';
import {Kr} from '@/utils/kr/';
import style from './style.less';
import AllScene from '@/components/Media/scene';
import {ossImgMedia} from '@/utils/oss';
import {helpShow} from '@/utils/help';
import Modal from '@/components/AllScene';
import {Obj} from 'yjtec-support';
import UserMedia from '@/components/MediaModal/UserMedia';

const Option = Select.Option;
class Effect extends React.Component{
  state={
    isShow:false,
    isShowImg:false,
    userMediaVisible:false,
    imgUrl: '',
    sceneListVisible: false,
    categoryArr:[],
    scenesArr:[],
    userMediaVisible:false,
  }
  componentDidMount(){
    const {effect:{data,customUrl},category,scene} = this.props;
    if (data.imageurl) {
      this.setState({
        isShow:true,
        isShowImg: customUrl != ''
      })
    }

    this.setState({
      categoryArr: category,
      scenesArr: scene
    })
  }

  componentDidUpdate(prevProps,prevState) {
    const {category,scene} = this.props;
    if (!Obj.isEqual(prevState.categoryArr,category) || !Obj.isEqual(prevState.scenesArr,scene)) {
      this.setState({
        ...this.state,
        categoryArr:category,
        scenesArr:scene
      })
    }
  }
  
  handleChange(key,value){
    var tmp = {};
    tmp[key] =value;   
    if(key == 'imageurl'){
      this.setState({
        isShow:true
      })
      if(value == 'custom'){
        this.setState({
          isShowImg:true
        })
        return;
      }else{
        this.setState({
          isShowImg:false
        })
      }
    }
    this.request(tmp);
  }

  //打开素材库选择窗口
  openMediaModal = () => {
    this.setState({
      userMediaVisible:true
    })
  }
  //选择素材
  selectMedia = (arr) => {  //添加自定义图片时
    this.request({
      imageurl:arr[0].path.path
    })
    this.closeMediaModal();
  }
  //关闭素材库选择窗口
  closeMediaModal = () => {
    this.setState({
      userMediaVisible:false
    })
  }

  //删除自定义图片
  delSkyImg = () => { 
    this.request({
      imageurl:''
    });
    this.setState({
      isShowImg:false
    })
  }

  request = (data) => { //请求
    this.props.onEdit(data);
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
    const {isShow,isShowImg,imgUrl,sceneListVisible,categoryArr,scenesArr,userMediaVisible} = this.state;
    const {
      effect:{editItem,data},
      loading,
      scene,
      category,
      media:{systemLists},
      SysFileList
    } = this.props;
    const imageUrl =SysFileList.map(item => ({label:item.name,'value':item.path.path}));

    const [re] = imageUrl.filter(item => item.value == data.imageurl);
    let selectValue = '';
    let customUrl = '';
    if(re){
      customUrl = '';
      selectValue = re.value;
    }else{
      customUrl = data.imageurl
      selectValue = 'custom';
    }
    return(
      <div>
        <ItemBox>
          <div className={style.title}>
            <span className={style.checkboxC}>
              {selectValue ? <div onClick={()=>this.delSkyImg()}>删除</div> : ''}
            </span>
            <span style={{float:'left'}}>特效</span>
            {helpShow && 
              (
                <div style={{float:'left', width:'18px', height:'18px',position:'relative',marginLeft:'5px'}}>
                  <Help style={{fontSize:'14px',color:'#999999',float:'left'}} />
                </div>
              )
            }
            <div style={{clear:'both'}}></div>
          </div>
          <div className={style.select}>
            <Select value={selectValue} name='imageurl' placeholder="请选择特效" style={{width:'100%'}} onChange={value => this.handleChange('imageurl',value)}>
              {imageUrl.map((item,index)=> (
                <Option key={index} value={item.value}>{item.label}</Option>
              ))}
              <Option value="custom" >自定义</Option>
            </Select>
          </div>
          <div className={style.title} style={{margin:'10px 0 0 0',lineHeight:'22px'}}>
            <span className={style.checkboxC}>
              <Button onClick={()=>this.appliedToScene()} style={{padding:'0 5px',height:'auto',background:'none',fontSize:'12px',color:'#fff',borderColor: '#008aff'}}>
                选择场景
              </Button>
            </span>
            应用到:
          </div>
        </ItemBox>
        {
          (isShowImg || selectValue == 'custom') && (
            <ItemBox>
              <Row>
                <Col span={24} className={style.mb10}>
                  {customUrl != '' ? 
                    <div className={style.defaultImg}>
                      <img alt='aa' src={ossImgMedia(customUrl,'media')} className={style.img} />
                      <div className={style.delimg} onClick={()=>this.delSkyImg()}>
                        <Icon type="delete" />
                      </div>
                    </div>
                    : 
                    <div className={style.defaultImg}>
                      <span>
                        建议大小<br/>500X500
                      </span>
                    </div>
                  }
                </Col>

                <Col span={12}>
                  <Button type="primary" onClick={this.openMediaModal}>
                    选择图片
                  </Button>
                </Col>
                <Col span={12} className={style.prompt}>
                  建议大小<br/>
                  500X500
                </Col>

                <UserMedia
                  title='图片素材库'
                  mediaType='1'
                  multipleChoices={false}
                  width='900px'
                  visible={userMediaVisible}
                  onChange={this.selectMedia}
                  onCancel={this.closeMediaModal}
                />
              </Row>
            </ItemBox>
          )
        }
        
        <React.Fragment>
          <ItemBox>
            {editItem.map(item =>{
              return (
                <div key={item.key} className={style.list}>
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
        </React.Fragment>

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