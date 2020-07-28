import React from 'react';
import { ItemBox } from '@/components/';
import { Input } from 'antd';
import style from '../style.less';

export default class Text extends React.Component{

  textValue = (e) => {
    this.props.onChange({
      text:e.target.value
    });
  }
  render(){
    const {actionData} = this.props;
    return(
      <ItemBox>
        <div className={style.title}>
          文本信息
        </div>
        <div className={style.setupInput}>
          <Input.TextArea value={actionData ? actionData.text : ''} autosize={{minRows:3,maxRows:3}} placeholder='请输入文字信息' style={{borderRadius:3}} onChange={this.textValue}/>
        </div>
      </ItemBox>
    )
  }
}