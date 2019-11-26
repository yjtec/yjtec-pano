import {Component} from "react";
import {connect} from 'dva';

import {ItemBox,Right} from '@/components/';
import {Checkbox,Input,Button,Icon} from 'antd';
import {AsyncLoadMap,loadBdMap,MapSearchField} from "@yjtec/bmap";
import BmapModal from './bmapModal';

import style from './style.less';

class Index extends Component{

  bmapVisible = () => {
    this.props.onBmapVisible()
  }

  handlePoint = (value) => {
    this.props.onHandlePoint(value);
    this.refBmap.setPoint({lng:value.lng,lat:value.lat})
  }
 
  render(){
    const {bmapVisible,point,data} = this.props;
    return(
      <div>
        <ItemBox>
          <div className={style.title}>
            <span className={style.checkboxC}>
              <a onClick={()=>this.bmapVisible()}>设置标注</a>
            </span>
            导航标注
          </div>
          <div className={style.mapBox}>
            <div>
              {data.lng && data.lat || data.lng == '' || data.lat == '' ?
                <MapSearchField 
                  id={"mapView"}
                  value={{lng:data.lng,lat:data.lat}}            //默认坐标
                  // searchinput={"false"}                  //是否有输入框
                  onChange={this.props.handleCoordinateInfo}
                  ref={ref => this.refBmap = ref}         //把子组件的方法提到父组件中
                  style={{width:'200px',height:'200px'}}
                />
                : ''
              }
              
              <p style={{display:data.lng && data.lat ? 'none' : 'block'}}>
                当前项目<br/>暂未设置地图标注
              </p>
              <span></span>
              <div className={style.delLocation} style={{display:data.lng && data.lat ? 'block' : 'none'}} onClick={()=>this.props.delLocation()}>
                <Icon type="delete" />
              </div>
            </div>
          </div>

        </ItemBox>
        <BmapModal
          visible={bmapVisible}
          point={{lng:data.lng,lat:data.lat}}
          title='地图标注'
          onCancel={this.props.onCancelBmap}
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