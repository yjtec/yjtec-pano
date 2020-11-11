import React from 'react';
import {Icon} from 'antd';
import { isUrl,isMark } from '@/utils/utils';
import IconFont from '@/components/IconFont';
import style from './style.less';
import Edit from './edit';

const getIcon = icon =>{
  if (typeof icon === 'string') {
    if (icon.startsWith('icon-')) {
      return <IconFont type={icon} className={style.icon} />;
    }
    if (isUrl(icon)) {
      return <Icon component={() => <img src={icon} alt="icon" className={style.icon} />} />;
    }
    return <Icon type={icon} className={style.icon} />;
  }
  return icon;
}
export default class DetailsList extends React.Component {
  state = {
    visible:false,
  }

  openEdit = (e) => {
    this.setState({
      visible: true
    });
  }

  render() {
    const { visible } = this.state;
    return (
      <div>
        <div className={style.list}>
          <div className={style.item}>
            <span>1</span>
            <img src="https://res.jsvry.cn/prod/head_img/2020/05/23/1947442cpzktf.jpg?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0" alt="图片" onClick={()=>this.openEdit()}/>
            <p onClick={()=>this.openEdit()}>这里是标题这里是标题</p>
            {getIcon('icon-huishouzhan')}
          </div>
          <div className={style.item} onClick={()=>this.openEdit()}>
            <span>2</span>
            <img src="https://res.jsvry.cn/prod/head_img/2020/05/23/1947442cpzktf.jpg?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0" alt="图片" onClick={()=>this.openEdit()}/>
            <p onClick={()=>this.openEdit()}>这里是标题这里是标题</p>
            {getIcon('icon-huishouzhan')}
          </div>
          <div className={style.item} onClick={()=>this.openEdit()}>
            <span>3</span>
            <img src="https://res.jsvry.cn/prod/head_img/2020/05/23/1947442cpzktf.jpg?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0" alt="图片" onClick={()=>this.openEdit()}/>
            <p onClick={()=>this.openEdit()}>这里是标题这里是标题</p>
            {getIcon('icon-huishouzhan')}
          </div>
        </div>
        <Edit visible={visible} krpano={this.props.krpano} />
      </div>
    );
  }
}