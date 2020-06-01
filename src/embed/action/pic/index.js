import React from 'react';
import { ItemBox } from '@/components/';
import { Button } from 'antd';
import { InputNumber } from '@/components/Form';
import Media from '@/components/Media';
import PicList from '@/components/PicList';
import style from '../style.less';
import {strRandom} from 'yjtec-support';

export default class Pic extends React.Component{
  constructor(props) {
    super(props);
    const {actionData} = props;
    this.state = {
      visible:false,
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
          visible:false,
          time:actionData.time,
          img:actionData.img
        })
      }
    }
  }

  handleShow = ()=> {
    this.setState({
      visible:true
    })
  }
  handleChange = value => {
    let img = [];
    if(value){
      img = this.state.img.concat({
        id:strRandom(10,{letters:false}),
        url:value,
      })
    }
    this.setState({
      visible:false,
      img:img
    },()=>{
      this.runChange();
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

  /*//修改宽
  handleW = (value) => {
    this.setState({
      width: value
    },()=>{
      this.runChange();
    })
  }
  //修改高
  handleH = (value) => {
    this.setState({
      height: value
    },()=>{
      this.runChange();
    })
  }*/

  runChange = () =>{
    const {img,time} = this.state;
    this.props.onChange({img:this.state.img,time:this.state.time});
  }

  render(){
    const {visible,img,time} = this.state;
    return(
      <div>
      <ItemBox>
        <div>
          <div className={style.pictitle}>
            图片展示
            <p>建议大小400X400</p>
            <Button onClick={()=>this.handleShow()} className={style.uploadBtn} type="primary" size="small">选择图片</Button>
          </div>
          <div>
            <PicList data={img} onChange={this.handlePic} onClick={this.delImg} />
          </div>
        </div>
      </ItemBox>
      {/*<ItemBox>
        <div style={{marginBottom:'5px'}}>
          图片宽高
        </div>
        <div style={{marginBottom:'10px'}}>
          <InputNumber
            inputNumberValue= {width}
            max= {1000}
            min= {1}
            name={'宽'}
            onChange={value => this.handleW(value)}
          />
        </div>
        <div>
          <InputNumber
            inputNumberValue= {height}
            max= {1000}
            min= {1}
            name={'高'}
            onChange={value => this.handleH(value)}
          />
        </div>
      </ItemBox>*/}
      <ItemBox>
        <div>
          <div className={style.timeTitle} style={{marginTop:'20px'}}>
            <span>
              交互时间
            </span>
          </div>
          <div className={style.timeInput}>
            <div className={style.input}>
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
        <Media title="图片" mediaType={1} visible={visible} onCancel={this.handleChange} accept=".jpg,.png,.jpeg" />
        <div style={{clear:'both'}}></div>
      </ItemBox>
    </div>
    )
  }
}