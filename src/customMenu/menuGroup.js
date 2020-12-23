import React from 'react';
import {Input} from 'antd';
import {Button} from '@/components/Form';
import styles from './style.less';
import Icon from './icon';
import MenuBtn from './menuBtn';

const defaultData = {
  title:'',
  icon:'/image/2019/07/24/icon_link.png',
  children:[]
}
const defaultBtnData = {
  type:'button',
}
export default class MenuGroup extends React.Component {
  state = {
    index:'1',
    data:'',
  }

  componentDidMount(){
    const {index,type,data} = this.props;
    this.setState({
      index: index,
      type:type,
      data:(data && JSON.stringify(data) != '[]') ? data : defaultData
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const {index,type,data} = this.props;
    if (JSON.stringify(this.props) != JSON.stringify(prevProps)) {
      if (this.props) {
        this.setState({
          index: index,
          type:type,
          data:(data && JSON.stringify(data) != '[]') ? data : defaultData
        });
      }
    }
  }

  //选择素材返回值
  setIcon = url => {
    this.setState({
      data:{
        ...this.state.data,
        icon:url
      }
    },()=>this.save());
  }

  setTitle = e => {
    this.setState({
      data:{
        ...this.state.data,
        title:e.target.value
      } 
    },()=>this.save());
  }

  addChildren = () => {
    const {data} = this.state;
    let newChildren = [];
    if (data.children == undefined || data.children.length == 0) {
      newChildren.push({...defaultBtnData,index:'1'})
    }else{
      newChildren = data.children.concat({...defaultBtnData,index:(data.children.length + 1).toString()});
    }
    this.setState({
      data:{
        ...this.state.data,
        children:newChildren
      } 
    });
  }

  editBtn = re => {
    const {data} = this.state;
    let new_children = [];

    if (data.children.some(item=>item.index == re.index)) {
      data.children.map(item=>{
        if (item.index == re.index) {
          new_children.push(re);
        }else{
          new_children.push(item);
        }
      })
    }else{
      new_children = data.children.concat(re);
    }

    this.setState({
      data:{
        ...data,
        children:new_children
      }
    },()=>this.save());
  }

  del = index => {
    const new_children = this.state.data.children.filter(item=>item.index != index).map((item,i)=>{
      return {
        ...item,
        index: (i + 1).toString()
      }
    });
    this.setState({
      data: {
        ...this.state.data,
        children:new_children
      }
    },()=>this.save());
  }

  save = () => {
    console.log(this.state)
    this.props.onChange(this.state);
  }

  render() {
    const {index,data} = this.state;
    return (
      <div>
        <Icon url={data.icon} onChange={this.setIcon}/>
        <div className={styles.inputDiv} style={{marginTop:'10px'}}>
          <Input maxLength={10} placeholder='请添加分组名称' value={data.title} onChange={this.setTitle} style={{marginBottom:'5px'}}/>
        </div>
        <div className={styles.add_menu}>
          <Button title="添加子菜单" disabled={(data.children && data.children.length >= 5) ? true : false} style={{display:'block'}} onClick={()=>this.addChildren()}/>
        </div>
        {data.children && data.children.map((item,i)=>(
          <div key={i} style={{marginTop:'15px'}}>
            <div className={styles.title} style={{fontSize:'14px'}}>
              <span className={styles.checkboxC} onClick={()=>this.del(item.index)}>
                删除
              </span>
              子菜单({item.index})
            </div>
            <MenuBtn showIcon={false} index={item.index} type={item.type} data={JSON.stringify(item.data) != '{}' ? item.data : ''} onChange={this.editBtn} />
            <div className={styles.lineDefaultBottom} style={{margin:'10px 0 0 0'}}></div>
            <div style={{clear:'both'}}></div>
          </div>
        ))}
      </div>
    );
  }
}
