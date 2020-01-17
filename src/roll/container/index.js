import { Component } from "react";
import {ItemBox} from '@/components/';
import {InputNumber,Input,Button,Select,Color,SliderSingle} from '@/components/Form';
import {Layout,Checkbox,Row,Col,Drawer,Icon,Radio,Slider} from 'antd';
import style from './style.less';
import {connect} from 'dva';
import {Obj} from 'yjtec-support';
import { hexToRgb } from '@/utils/utils';

class Index extends Component {
  constructor(props) {
    super(props);
    const {data} = props;
    this.state = {
      ...data
    }
  }

  componentDidUpdate(prevProps) {
    if(!Obj.isEqual(prevProps.data,this.props.data)){
      const {data} = this.props;
      this.setState({
        ...data
      })
    }
  }

  configuration=(id,value)=>{
    this.setState({
      height:value
    },()=>{
      this.runChange()
    })
  }

  getContainerBgColor=(e)=>{
    this.setState({
      bgcolor:e.hex,
      bgalpha:e.rgb.a
    },()=>{
      this.runChange()
    })
  }

  handleSpeed = (value) => {
    this.setState({
      speed: value
    },()=>{this.runChange()})
  }

  handleIntervalTime = (value) => {
    this.setState({
      interval_time: value
    },()=>{this.runChange()})
  }

  runChange = () => {
    this.props.onChange(this.state)
  }

  render(){
    const {border,borderRadius,bgcolor,borderColor,bgalpha,speed,interval_time} = this.state;
    const containerSize = [
      {id:1,title:'高',name:'高',inputNumber:{min:1,max:500,inputNumberValue:this.state.height}}
    ]
    const sliderSingleData = [
      {key:1,title:'滚动速度',defaultValue:Number(speed),max:200,min:0,step:5},
      {key:2,title:'间隔时间',defaultValue:Number(interval_time),max:10,min:0,step:0.1},
    ]
    return(
      <div>
        <ItemBox>
          <div className={style.title}>
            容器尺寸
          </div>
          <Row style={{margin:'0 -5px 0'}}>
            {containerSize.map(item=>(
              <Col key={item.id} span={24} style={{padding:'0 5px'}}>
                <InputNumber
                  {...item.inputNumber}
                  name={item.name}
                  onChange={value=>this.configuration(item.id,value)}
                />
              </Col>
            ))}
          </Row>
          <div className={style.title}>
            容器背景
          </div>
          <div>
            <Color color={ bgcolor && {...hexToRgb(bgcolor),a:bgalpha}} onChange={this.getContainerBgColor}/>
          </div>
          {
            sliderSingleData.map(item=>{
              return (
                <div key={item.key}>
                  <div className={style.title}>
                    {item.title}
                  </div>
                  <div className={style.sliderDiv}>
                    <SliderSingle
                      defaultValue= {item.defaultValue}
                      max= {item.max}
                      min= {item.min}
                      step= {item.step}
                      onChange={item.key == 1 ? value => this.handleSpeed(value) : value => this.handleIntervalTime(value)}
                    />
                  </div>
                </div>
              )
            })
          }
        </ItemBox>
      </div>
    )
  }
}
export default Index;