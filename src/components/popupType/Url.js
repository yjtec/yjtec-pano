import React,{Component} from 'react';
import {Url} from '@/components';
export default class ActionUrl extends Component{
  render(){
    return (
      <Url {...this.props} />
    )
  }
}