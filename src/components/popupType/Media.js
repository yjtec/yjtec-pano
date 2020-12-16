import React from 'react';
import {Button} from 'antd';
import PicList from '@/components/PicList';
import {strRandom,Arr,Obj,isArray} from 'yjtec-support';
import Media from '@/components/MediaModal';

export default class ActionMedia extends React.Component{
  state ={
    userMediaVisible:false,
    list:[],//当前选择图片
  }
  componentDidMount(){
    const {data} = this.props;
    if(isArray(data) && !Arr.isNull(data)){
      this.setState({
        list:data
      })
    }
  }
  componentWillUpdate(nextProps,nextState){
    if(!Obj.isEqual(this.state.list,nextState.list)){
      const {onChange} = this.props;
      if(onChange) onChange(nextState.list)
    }
    if(!Obj.isEqual(this.props.data,nextProps.data)){
      this.setState({
        list:nextProps.data
      })
    }
  }
  handleShow = ()=> {
    this.setState({
      userMediaVisible:true
    })
  }
  //选择素材
  selectImg = arr => {
    let { list } = this.state;
    let newList = [];
    if(arr){
      newList = arr.map( item => {
        return {
          id:strRandom(10,{letters:false}),
          url:item.path.path,
        }
      })
    }
    list = list.concat(newList);
    this.setState({
      userMediaVisible:false,
      list:list
    })
  }
  //关闭素材选择
  closeMediaModal = () => {
    this.setState({
      userMediaVisible:false
    })
  }

  delImg = (data) => {
    const { list } = this.state;
    let newList = list.filter(item=>{
      return item.id != data.id
    })
    this.setState({
      list:newList
    })
  }

  render(){
    const {userMediaVisible,list} = this.state;
    const {activeId} = this.props;
    let activeProps = {};
    if(activeId){
      activeProps = {
        activeId:activeId
      }
    }
    return(
      <div>
        <p>
          相册
          <Button onClick={this.handleShow} style={{float:'right'}} type="primary" size="small">选择图片</Button>
        </p>
        <Media
          title='图片素材库'
          mediaType={1}
          tabType={1}
          multipleChoices={true}
          width='900px'
          visible={userMediaVisible}
          onChange={this.selectImg}
          onCancel={this.closeMediaModal}
        />
        <PicList data={list} onDel={this.delImg} onClick={this.props.onClick} {...activeProps} />
      </div>
    )
  }
}