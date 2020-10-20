import {Component} from "react";
import {connect} from 'dva';

import {ItemBox,Right,Help} from '@/components/';
import {Checkbox,Input,Button,Icon} from 'antd';
import {AsyncLoadMap,loadBdMap,MapSearchField} from "@yjtec/bmap";
import BmapModal from './bmapModal';
import {helpShow} from '@/utils/help';
import style from './style.less';
import AppliedToScene from './appliedToScene';

class Index extends Component{
  state={
    bmapVisible:false,
    lng: 113.666773,
    lat: 34.752728,
    province: '',
    city: '',
    district: '',
    address: ''
  }

  componentDidMount(){
    const {data} = this.props;
    this.setState({
      lng: data && data.lng ? data.lng : 113.666773,
      lat: data && data.lat ? data.lat : 34.752728,
      province: data && data.province ? data.province : '',
      city: data && data.city ? data.city : '',
      district: data && data.district ? data.district : '',
      address: data && data.address ? data.address : ''
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const {data} = this.props;
    if (JSON.stringify(prevProps.data) != JSON.stringify(data)) {
      if (data) {
        this.setState({
          lng: data && data.lng ? data.lng : 113.666773,
          lat: data && data.lat ? data.lat : 34.752728,
          province: data && data.province ? data.province : '',
          city: data && data.city ? data.city : '',
          district: data && data.district ? data.district : '',
          address: data && data.address ? data.address : ''
        });
      }
    }
  }

  showBmap = () => {
    this.setState({
      bmapVisible:true
    })
  }

  cancelBmap = () => {
    this.setState({
      bmapVisible:false
    })
  }

  handlePoint = (e) => {
    this.setState({
      lng: e ? e.lng : 113.666773,
      lat: e ? e.lat : 34.752728,
      province: e ? e.province : '',
      city: e ? e.city : '',
      district: e ? e.district : '',
      address: e ? e.address : ''
    },()=>{
      this.runChange();
    });
  }

  runChange = () => {
    const {lng,lat,province,city,district,address} = this.state;
    const point = {
      lng: lng,
      lat: lat,
      province: province,
      city: city,
      district: district,
      address: address ? address : ''
    }
    this.props.onChange(point)
    this.refBmap.setPoint(point)
  }
  render(){
    const {data,title} = this.props;
    const {bmapVisible,lng,lat,province,city,district,address} = this.state;
    return(
      <div>
        <ItemBox>
          <div className={style.title}>
            <span className={style.checkboxC}>
              <a onClick={()=>this.showBmap()}>设置标注</a>
            </span>
            <span style={{float:'left'}}>{title}</span>
            {helpShow && 
              (
                <div style={{float:'left', width:'18px', height:'18px',position:'relative',marginLeft:'5px'}}>
                  <Help style={{fontSize:'14px',color:'#999999',float:'left'}} />
                </div>
              )
            }
            <div style={{clear:'both'}}></div>
          </div>
          <div className={style.mapBox}>
            <div>
              <MapSearchField 
                id={"mapView"}
                value={{lng:lng,lat:lat}}            //默认坐标
                isposition='false'
                // searchinput={"false"}             //是否有输入框
                onChange={this.props.handleCoordinateInfo}
                ref={ref => this.refBmap = ref}      //把子组件的方法提到父组件中
                style={{width:'200px',height:'200px'}}
              />

              <p style={{display:data.lng && data.lat ? 'none' : 'block'}}>
                当前项目<br/>暂未设置地图标注
              </p>
              <span></span>
              <div className={style.delLocation} style={{display:data.lng && data.lat ? 'block' : 'none'}} onClick={()=>this.handlePoint('')}>
                <Icon type="delete" />
              </div>
            </div>
          </div>
        </ItemBox>
        {this.props.applied && 
          <ItemBox>
            <div>
              <span style={{float:'right'}}><AppliedToScene scenes={this.props.scenes} onSetAll={this.props.onSetAll} /></span>
              应用到：
            </div>
          </ItemBox>
        }
        
        <BmapModal
          visible={bmapVisible}
          point={{lng:lng,lat:lat}}
          title='地图标注'
          onCancel={this.cancelBmap}
          onOk={this.handlePoint}
        >
        </BmapModal>
      </div>
    )
  }
}
export default (props)=>(
  <AsyncLoadMap renderLoading={<div>加载中&&&</div>}>
    <Index {...props} />
  </AsyncLoadMap>
);