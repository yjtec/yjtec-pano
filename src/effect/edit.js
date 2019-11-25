import React from 'react';
import {connect} from 'dva';
import {ItemBox,Right} from '@/components/';
import {SliderSingle} from '@/components/Form';
import {List,Avatar,Select,Radio,Row,Col,Icon,Checkbox,Button} from 'antd';
import {Kr} from '@/utils/kr/';
import './style.less';
import UploadImg from '@/components/Media';
import AllScene from '@/components/Media/scene';
import {ossImgMedia} from '@/utils/oss';

import Modal from '@/components/AllScene';

const Option = Select.Option;
class Effect extends React.Component{
  state={
    isShow:false,
    isShowImg:false,
    media:false,
    imgUrl: '',
    sceneListVisible: false,
    categoryArr:[],
    scenesArr:[]
  }
  componentDidMount(){
    const {effect:{data,customUrl},category,scene} = this.props;
    let categoryArr = category.list;
    let scenesArr = scene.all;
    if (data.imageurl) {
      this.setState({
        isShow:true,
        isShowImg: customUrl != ''
      })
    }

    this.setState({
      categoryArr: categoryArr,
      scenesArr: scenesArr
    })
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

  media = () => {  //显示选择图片
    this.setState({
      media: true
    })
  }
  onCancel = (value) => {  //添加自定义图片时
    if (value == undefined) {
      this.setState({
        media: false,
      })
    }else{
      this.request({
        imageurl:value
      });
      this.setState({
        media: false
      })
    }
  }
  delSkyImg = () => { //删除自定义图片
    this.request({
      imageurl:''
    });
    this.setState({
      isShowImg:false
    })
  }

  request = (tmp) => { //请求
    const {onEdit} = this.props;
    onEdit(tmp);
  }

  appliedToScene=()=>{
    this.setState({
      sceneListVisible: true
    })
  }
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
    const {isShow,isShowImg,imgUrl,sceneListVisible,categoryArr,scenesArr} = this.state;
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
          <div class='title'>
            <span class='checkboxC'>
              {selectValue ? <div onClick={()=>this.delSkyImg()}>删除</div> : ''}
            </span>
            特效
          </div>
          <div class='select'>
            <Select value={selectValue} name='imageurl' placeholder="请选择特效" style={{width:'100%'}} onChange={value => this.handleChange('imageurl',value)}>
              {imageUrl.map((item,index)=> (
                <Option key={index} value={item.value}>{item.label}</Option>
              ))}
              <Option value="custom" >自定义</Option>
            </Select>
          </div>
          <div class='title' style={{margin:'10px 0 0 0',lineHeight:'22px'}}>
            <span class='checkboxC'>
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
                <Col span={24} class='mb10'>
                  {customUrl != '' ? 
                    <div class='defaultImg'>
                      <img alt='aa' src={ossImgMedia(customUrl,'media')} class='img' />
                      <div class='delimg' onClick={()=>this.delSkyImg()}>
                        <Icon type="delete" />
                      </div>
                    </div>
                    : 
                    <div class='defaultImg'>
                      <span>
                        建议大小<br/>500X500
                      </span>
                    </div>
                  }
                </Col>

                <Col span={12}>
                  <Button type="primary" onClick={this.media}>
                    选择图片
                  </Button>
                </Col>
                <Col span={12} class='prompt'>
                  建议大小<br/>
                  500X500
                </Col>

                <UploadImg 
                  title='图片'
                  visible={this.state.media} 
                  onCancel={this.onCancel}
                  mediaType={1}
                  accept='.jpg,.jpeg,.png'
                />
              </Row>
            </ItemBox>
          )
        }
        
        <React.Fragment>
          <ItemBox>
            {editItem.map(item =>(
              <div key={item.key} class='list'>
                <p>{item.title}</p>
                <SliderSingle
                  {...item.slider}
                  defaultValue={data[item.key] ? data[item.key] : item.slider.defaultValue}
                  onChange={value => this.handleChange(item.key,value)}
                  />
              </div>
            ))}
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