import React, { Component } from "react";
import {Modal,Input,Button} from 'antd';
import {AsyncLoadMap,loadBdMap,MapSearchField} from "@yjtec/bmap";
import './style.less';

class Index extends Component{

  state={
    point:{},
    coordinateInfo:{},
    inputValue:'',
    localSearchArr: []
  }

  componentDidMount(){
    const {point} = this.props;
    this.setState({
      point: point
    })
  }

  componentDidUpdate(newProps){
    if (this.props.point.lng != newProps.point.lng) {
      if (JSON.stringify(this.props.point) != '{}') {
        this.setState({
          point: this.props.point
        })
      }
    }
  }

  handleInputValue = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  // 结果面版信息
  // getRes = (arr) => {
  //   this.setState({
  //     localSearchArr:arr
  //   })
  // }

  search = () => {
    this.ref.getRelationList(this.state.inputValue)
  }

  // set = (point) => {
  //   this.setState({
  //     point:point
  //   })
  //   this.ref.setPoint(point)
  // }

  handlePoint = (value) => {
    this.setState({
      coordinateInfo: value,
      point: {
        lng:value.lng,
        lat:value.lat
      },
      inputValue: value.keyword
    })
  }

  onCancel = () => {
    this.props.onCancel();
  }

  onOk = () => {
    this.onCancel();
    this.props.onOk(this.state.coordinateInfo);
  }

  render(){
    const {localSearchArr} = this.state;
    const {visible,title} = this.props;
    return(
      <Modal
        title={title}
        onOk={this.onOk}
        onCancel={this.onCancel}
        visible={visible}
        width={800}
        className='selectScene'
        forceRender={true}
        destroyOnClose={true}
      >
        <div style={{marginBottom:'20px'}}>
          <Input id={"mapSearchInput"} value={this.state.inputValue} onChange={this.handleInputValue} style={{width:'200px',float:'left'}}/>
          <Button onClick={()=>this.search()} style={{marginLeft:'10px'}}>搜索</Button>
        </div>
        <div>
          <MapSearchField 
            id={'mapsearch'}
            value={this.props.point}            //默认坐标
            isposition='false'
            searchinput={'true'}                //是否有输入框
            inputid="mapSearchInput"            //绑定input ID
            // getres={this.getRes}                //结果面板信息
            control={'true'}                    //是否显示 左上角，添加默认缩放平移控件
            onChange={this.handlePoint}
            ref={ref => this.ref = ref}         //把子组件的方法提到父组件中
            style={{width:'100%',minHeight:'400px',background:'#f5f5f5'}}
          />
        </div>

        {/*//结果面版数据展示
        <div>
          {localSearchArr.map(item=>(
            <div onClick={()=>this.set(item.point)}>{item.title}</div>
          ))}
        </div>*/}
      </Modal>
    )
  }
}
export default (props)=>(
  <AsyncLoadMap renderLoading={<div>加载中&&&</div>}>
    <Index {...props} />
  </AsyncLoadMap>
);