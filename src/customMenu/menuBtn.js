import React from 'react';import {Input,Select} from 'antd';import PopupType from '../components/popupType';import {Button} from '@/components/Form';import styles from './style.less';import Icon from './icon';import TypeTitle from './typeTitle';import Location from '../location';const defaultData = {  type:2,  title:'',  icon:'/image/2019/07/24/icon_link.png',  action_data:''}export default class MenuBtn extends React.Component {  state = {    index:'1',    data:{}  }  componentDidMount(){    const {index,type,data} = this.props;    this.setState({      index: index,      type:type,      data:(data && JSON.stringify(data) != '[]') ? data : defaultData    },()=>this.save());  }  componentDidUpdate(prevProps, prevState) {    const {index,type,data} = this.props;    if (JSON.stringify(this.props) != JSON.stringify(prevProps)) {      if (this.props) {        this.setState({          index: index,          type:type,          data:(data && JSON.stringify(data) != '[]') ? data : defaultData        },()=>this.save());      }    }  }  //选择素材返回值  setIcon = url => {    this.setState({      ...this.state,      data:{        ...this.state.data,        icon:url      }    },()=>this.save());  }  setTypeTitle = obj => {    this.setState({      ...this.state,      data:{        ...this.state.data,        ...obj,        action_data:obj.type != this.state.data.type ? '' : this.state.data.action_data,      }    },()=>this.save());  }  handleData = (data,type) => {    let newData = '';    if (type == 'phone') {      newData = {        phone:data      }    }else{      newData = data    }    this.setState({      ...this.state,      data:{        ...this.state.data,        action_data:newData      }    },()=>this.save());  }  save = () => {    this.props.onChange(this.state);  }    render() {    const {index,data} = this.state;    return(      <div>        {this.props.showIcon && <Icon url={data.icon} onChange={this.setIcon}/>}        <TypeTitle type={data.type} title={data.title} onChange={this.setTypeTitle}/>        <div className={styles.menu_type_c}>          {data.type == 2 && <PopupType.Url {...data.action_data} onChange={(e)=>this.handleData(e,'url')} />}          {data.type == 3 && <PopupType.Phone phone={data.action_data} onChange={(e)=>this.handleData(e,'phone')} />}          {data.type == 15 && <Location.Bmap help={'location'} title={'导航标注'} data={data.action_data} onChange={(e)=>this.handleData(e,'bmap')}/>}          {data.type == 5 && <PopupType.MediaMul data={data.action_data} onChange={(e)=>this.handleData(e,'mediamul')} />}          {data.type == 8 && <PopupType.Video data={data.action_data} onChange={(e)=>this.handleData(e,'video')} />}          {data.type == 7 && <PopupType.Rings data={data.action_data} onChange={(e)=>this.handleData(e,'rings')} />}          {data.type == 11 && <PopupType.Model data={data.action_data} onChange={(e)=>this.handleData(e,'model')} />}          {data.type == 14 && <PopupType.RichText data={data.action_data} onChange={(e)=>this.handleData(e,'richtext')} />}        </div>      </div>    )  }}