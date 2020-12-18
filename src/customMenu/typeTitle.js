import React from 'react';
import {Input,Select} from 'antd';
import styles from './style.less';

const InputGroup = Input.Group;
const { Option } = Select;
const actionType = [
  {id:1,value: 2,title: '外链'},
  {id:2,value: 3,title: '电话'},
  {id:3,value: 1,title: '导航'},
  {id:4,value: 5,title: '图文'},
  {id:5,value: 8,title: '视频'},
  {id:6,value: 7,title: '环物'},
  {id:7,value: 11,title: '模型'},
  {id:8,value: 14,title: '文章'},
];
export default class typeTitle extends React.Component {
  state = {
    type: '',
    title: ''
  }

  componentDidUpdate(prevProps, prevState) {
    const {type,title} = this.props;
    if(prevProps.type != type || prevProps.title != title){
      if (type || title) {
        this.setState({
          type: Number(type),
          title: title
        });
      }
    }
  }

  setType = e => {
    this.setState({
      type: e
    },()=>this.save());
  }

  setTitle = e => {
    this.setState({
      title: e.target.value
    },()=>this.save());
  }

  save = () => {
    const {type,title} = this.state;
    this.props.onChange({
      type:type,
      title:title
    })
  }

  render() {
    const {type,title} = this.state;
    return (
      <div className={styles.menu_type} style={{marginTop:'10px'}}>
        <InputGroup compact>
          <Select style={{ width: '72px' }} value={type} onChange={this.setType}>
            {actionType.map(item=>(
              <Option key={item.id} value={item.value}>{item.title}</Option>
            ))}
          </Select>
          <Input maxLength={10} style={{ width: 'calc(100% - 72px)' }} value={title} placeholder='请添加标题' onChange={this.setTitle} />
        </InputGroup>
      </div>
    );
  }
}
