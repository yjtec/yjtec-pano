import React from 'react';
import {Icon} from 'antd';
import { isUrl,isMark } from '@/utils/utils';
import IconFont from '@/components/IconFont';
import styles from './style.less';
import {mediaImgConfig} from '@/utils/oss.config';

const getIcon = icon =>{
  if (typeof icon === 'string') {
    if (icon.startsWith('icon-')) {
      return <IconFont type={icon} className={styles.icon} />;
    }
    if (isUrl(icon)) {
      return <Icon component={() => <img src={icon} alt="icon" className={styles.icon} />} />;
    }
    return <Icon type={icon} className={styles.icon} />;
  }
  return icon;
}
export default class DetailsList extends React.Component {

  openEdit = (id) => {
    this.props.getItem(id);
  }

  render() {
    const  {list,data} = this.props;
    return (
      <div>
        <div className={styles.list}>
        {
          list && list.map((item,index)=>(
            <div className={styles.item} key={index}>
              <span>{index + 1}</span>
              {item.url && <img src={mediaImgConfig(item.url,'img')} alt={item.title} onClick={()=>this.openEdit(item.id)}/>}
              <p onClick={()=>this.openEdit(item.id)}>{item.title}</p>
              <div onClick={()=>this.props.delItem(item.id)}>{getIcon('icon-huishouzhan')}</div>
            </div>
          ))
        }
        </div>
      </div>
    );
  }
}