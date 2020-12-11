import React from 'react';
import { ItemBox } from '@/components/';
import { Button } from 'antd';
import { InputNumber } from '@/components/Form';
import PicList from '@/components/PicList';
import styles from '../style.less';
import {strRandom} from 'yjtec-support';
import UserMedia from '@/components/MediaModal/UserMedia';

export default class Pic extends React.Component{
  constructor(props) {
    super(props);
    const {actionData} = props;
    this.state = {
      userMediaVisible:false,
      time:(actionData && actionData.time) ? actionData.time : 3,
      img:(actionData && actionData.img) ? actionData.img : [],
      /*width:(actionData && actionData.width) ? actionData.width : 100,
      height:(actionData && actionData.height) ? actionData.height : 100,*/
    }
  }

  componentDidUpdate(prevProps){
    if(JSON.stringify(prevProps.actionData) !== JSON.stringify(this.props.actionData)){
      if (this.props.actionData) {
        const {actionData} = this.props;
        this.setState({
          userMediaVisible:false,
          time:actionData.time,
          img:actionData.img
        })
      }
    }
  }

  handleShow = ()=> {
    this.setState({
      userMediaVisible:true
    })
  }
  selectImg = arr => {
    let { img } = this.state;
    let newImg = [];
    if(arr){
      newImg = arr.map( item => {
        return {
          id:strRandom(10,{letters:false}),
          url:item.path.path,
        }
      })
    }
    img = img.concat(newImg);
    this.setState({
      userMediaVisible:false,
      img:img
    },()=>{
      this.runChange();
    })
  }
  //关闭素材库选择窗口
  closeMediaModal = () => {
    this.setState({
      userMediaVisible:false
    })
  }
  delImg = (data) => {
    const { img } = this.state;
    let newImg = img.filter(item=>{
      return item.id != data.id
    })
    this.setState({
      img:newImg
    },()=>{
      this.runChange();
    })
  }
  handleRotateTime = (value) => {
    this.setState({
      time: value
    },()=>{
      this.runChange();
    })
  }

  runChange = () =>{
    const {img,time} = this.state;
    this.props.onChange({img:this.state.img,time:this.state.time});
  }

  render(){
    const {userMediaVisible,img,time} = this.state;
    return(
      <div>
      <ItemBox>
        <div>
          <div className={styles.pictitle}>
            图片展示
            <p>建议大小400X400</p>
            <Button onClick={()=>this.handleShow()} className={styles.uploadBtn} type="primary" size="small">选择图片</Button>
          </div>
          <div>
            <PicList data={img} onDel={this.delImg} />
          </div>
        </div>
      </ItemBox>
      <ItemBox>
        <div>
          <div className={styles.timeTitle} style={{marginTop:'20px'}}>
            <span>
              交互时间
            </span>
          </div>
          <div className={styles.timeInput}>
            <div className={styles.input}>
            <InputNumber
              inputNumberValue= {time}
              max= {10}
              min= {1}
              name={''}
              onChange={value => this.handleRotateTime(value)}
              style={{width:'40px'}}
            />
            </div>
            <p>秒后自动播放下一张</p>
          </div>
        </div>

        <UserMedia
          title='图片素材库'
          mediaType='1'
          multipleChoices={true}
          width='900px'
          visible={userMediaVisible}
          onChange={this.selectImg}
          onCancel={this.closeMediaModal}
        />

        <div style={{clear:'both'}}></div>
      </ItemBox>
    </div>
    )
  }
}