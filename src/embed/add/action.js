import React from 'react';
import { Drawer,ItemBox } from '@/components/';
import { EmbedType,Pic,Sequence,Text,Video } from '../action';

export default class EmbedAction extends React.Component{

  receiveData = (data) => {
    this.props.onChange(data);
  }
  render(){
    const { embedType,data,isVip } = this.props;
    return(
      <div>
        {embedType == 1 && <Text {...data} onChange={this.receiveData} />}
        {embedType == 2 && <Pic {...data} onChange={this.receiveData} />}
        {embedType == 3 && <Sequence {...data} onChange={this.receiveData} />}
        {embedType == 4 && <Video {...data} is_vip={isVip} onChange={this.receiveData} />}
      </div>
    )
  }
}