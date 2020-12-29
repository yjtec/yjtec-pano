import { Component } from "react";
import {ItemBox,Right,Content,Help} from '@/components/';
import {Checkbox,Input,message} from 'antd';
import styles from './style.less';
import {helpShow} from '@/utils/help';
import {SliderSingle,Button} from '@/components/Form';
import {formatUrl} from '@/utils/utils';
const defaultData = [
  {
    title:'',
    url:''
  }
]
const maxNumber = 3; //可添加的最大数量
class RightClickEdit extends Component {
  state = {
    data:[]
  }

  componentDidMount(){
    const { data } = this.props;
    this.setState({
      data:data.length != 0 ? data : defaultData
    })
  }

  handleAdd = () => {
    if (this.state.data.length < maxNumber) {
      this.setState({
        data: [
          ...this.state.data,
          ...defaultData
        ]
      });
    }else{
      message.warning('最多可添加'+maxNumber+'个链接')
    }
  }

  editItem = (e,index,type) => {
    const {data} = this.state;
    let new_data = [];
    data.map((item,i)=>{
      if (index != i) {
        new_data.push(item)
      }else{
        if (type == 'title') {
          new_data.push({
            title: e.target.value,
            url:item.url
          })
        }else{
          new_data.push({
            title: item.title,
            url: e.target.value.length >= 8 ? formatUrl(e.target.value) : e.target.value,
          })
        }
      }
    })
    this.setState({
      data: new_data 
    },()=>{
      this.save()
    });
  }
  del = index => {
    let new_data = [];
    this.state.data.map((item,i)=>{
      if (i != index) {
        new_data.push(item)
      }
    })
    this.setState({
      data: new_data 
    },()=>{
      this.save()
    });
  }
  
  save = () => {
    this.props.onChange(this.state.data);
  }

  render () {
    const {data} = this.state;
    const helpShow = false;
    return(
      <div>
        <ItemBox>
          <div style={{padding:'10px 0'}}>
            {helpShow && 
              (
                <div style={{float:'right', width:'32px', height:'32px', position:'relative'}}>
                  <Help link={'rightClick'} style={{fontSize:'24px',color:'#999999',float:'left'}} />
                </div>
              )
            }
            <div style={{width:helpShow ? '80%' : '100%',float:'left'}}>
              <Button title='添加自定义链接' disabled={data.length >= 3 ? true : false} style={{backgroundColor:'#008aff',color:'#fff',borderColor:'#008aff'}} onClick={()=> this.handleAdd()}/>
            </div>
            <div style={{clear:'both'}}></div>
            <div className={styles.tips}>
              注：最多可添加3个自定义链接
            </div>
          </div>
        </ItemBox>
        <ItemBox>
          {
            data.map((item,index) => (
              <div key={index} className={styles.rightClickItem}>
                <div className={styles.title}>
                  <span className={styles.checkboxC} onClick={()=>this.del(index)}>
                    删除
                  </span>
                  自定义链接({index + 1})
                </div>
                <Input placeholder='按钮标题' value={item.title} onChange={(e)=>this.editItem(e,index,'title')} style={{marginBottom:'5px'}}/>
                <Input placeholder='填写链接地址' value={item.url} onBlur={(e)=>this.editItem(e,index,'url')}  onChange={(e)=>this.editItem(e,index,'url')} />
              </div>
            ))
          }
        </ItemBox>
      </div>
    );
  }
}
export default RightClickEdit;