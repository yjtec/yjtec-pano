import React,{Component} from 'react';
import {ItemBox} from '@/components/';
import {Row,Col} from 'antd';
import {InputNumber} from '@/components/Form';
import MediaImg from '@/components/MediaImg';
import style from './style.less';
const inputNumber = [
  {
    id:1,
    title:'序列帧总帧数',
    inputNumber:{min:1,max:100,inputNumberValue:1},
    unit:'帧'
  },
  {
    id:2,
    title:'总播放时长',
    inputNumber:{min:0.1,max:10,inputNumberValue:1},
    unit:'秒'
  },
  {
    id:3,
    title:'单帧播放时长',
    inputNumber:{min:0.01,max:10,inputNumberValue:1},
    unit:'秒'
  },
  {
    id:4,
    title:'单帧宽度',
    inputNumber:{min:1,max:400,inputNumberValue:1},
    unit:'PX'
  },
  {
    id:5,
    title:'单帧高度',
    inputNumber:{min:1,max:400,inputNumberValue:1},
    unit:'PX'
  },
]
class TypeAnimate extends Component{
  constructor(props) {
    super(props);
    const {playTime,url} = props;
    if (playTime == undefined) {
      this.state = {
        url:url ? url : '',
        playTime:[1,1,1,100,100]
      }
    }else{
      const {total,time,pertime} = playTime;
      this.state = {
        url:url ? url : '',
        playTime:[
          total ? total :1,
          time ? time :1,
          pertime ? pertime:1,
          playTime.fwidth ? playTime.fwidth : 100,
          playTime.fheight ? playTime.fheight : 100,
        ]
      }
    }
  }
  
  handleUrl = url => {
    this.setState({
      url:url
    },this.runChange)
  }
  hanldeImg = (index,value) => {
    let playTime = this.state.playTime;
    if(index == 1){
      playTime[0] = value;
      playTime[2] = playTime[1] / value
    }

    if(index == 2) {
      playTime[1] = value;
      playTime[2] = playTime[1] / playTime[0];
    }

    if(index == 3){
      playTime[1] = value * playTime[0];
      playTime[2] = value
    }

    if(index == 4){
      playTime[3] = value;
    }

    if(index == 5){
      playTime[4] = value;
    }

    this.setState({
      playTime:playTime
    },this.runChange)
  }
  runChange = e => {
    const {url,playTime} = this.state;
    const {onChange} = this.props;
    onChange({url:url,playTime:{total:playTime[0],time:playTime[1],pertime:playTime[2],fwidth:playTime[3],fheight:playTime[4]}});
  }

  render(){
    const {url,playTime} = this.state;
    return(
      <div>
        <MediaImg url={url} width="128" height="128" onChange={this.handleUrl} />
        {inputNumber.map((item,i)=>(
          <Row key={item.id} className={`${style.configuration} ${style.mb6}`}>
            <Col span={14}>
              {item.title}
            </Col>
            <Col span={8}>
              <InputNumber
                {...item.inputNumber}
                inputNumberValue={playTime[i]}
                name=''
                onChange={value=>this.hanldeImg(item.id,value)}
              />
            </Col>
            <Col span={2} style={{textAlign:'center'}}>
              {item.unit}
            </Col>
          </Row>
        ))}
      </div>
    )
  }
}

export default TypeAnimate;