import React from 'react';
import { ItemBox } from '@/components/';
import { Input } from 'antd';
import style from '../style.less';

export default class Text extends React.Component{
  constructor(props) {
    super(props);
    const {actionData} = props;
    this.state = {
      text:actionData ? actionData.text : ''
    }
  }

  componentDidUpdate(prevProps){
    if(JSON.stringify(prevProps.actionData) !== JSON.stringify(this.props.actionData)){
      if (this.props.actionData) {
        const {actionData} = this.props;
        this.setState({
          text:actionData.text
        })
      }
    }
  }
  
  textValue = (e) => {
    this.setState({
      text:e.target.value
    },()=>{
      this.props.onChange(this.state);
    })
  }
  render(){
    const {text} = this.state;
    return(
      <ItemBox>
        <div className={style.title}>
          文本信息
        </div>
        <div className={style.setupInput}>
          <Input.TextArea value={text} autosize={{minRows:3,maxRows:3}} placeholder='请输入文字信息' style={{borderRadius:3}} onChange={this.textValue}/>
        </div>
      </ItemBox>
    )
  }
}