import React from 'react';
import IconFont from '@/components/IconFont';
import {ossImgMedia} from '@/utils/oss';
import style from './style.less';

export default class EmbedList extends React.Component{

  componentDidMount(){
    
  }
  
  oneHandle = (id) =>{
    this.props.onChange(id);
  }
  
  render(){
    const {data} = this.props;
    const typeData = [
      {type:1,name:'文字标记'},
      {type:2,name:'图片轮播'},
      {type:3,name:'序列图'},
      {type:4,name:'视频'}
    ]
    return(
      <div className={style.module}>
        {data.map((item,index)=>(
          <div key={index} onClick={()=>this.oneHandle(item.id)} className={style.hotspotLists}>
            <span className={style.delSelectdPano}>{typeData.map(i=>{
              if (i.type == item.type) {
                return i.name
              }
            })}</span>
            <div className={style.thumb}>
              {item.type == 1 && <IconFont type='icon-wenzi' style={{fontSize:'16px'}} />}
              {item.type == 2 && <img alt='图片' src={ossImgMedia(item.actionData.img[0].url,'media')} />}
              {item.type == 3 && <img alt='序列图' src={ossImgMedia(item.actionData.url,'media')} />}
              {item.type == 4 && <img alt='视频' src={ossImgMedia(item.actionData.thumbUrl,'media')} />}
            </div>
            <div className={style.title}>
              {item.type == 1 && item.actionData.text}
              {item.type == 2 && '嵌入图片'}
              {item.type == 3 && '序列图'}
              {item.type == 4 && '嵌入视频'}
            </div>
          </div>
        ))}
      </div>
    )
  }
}