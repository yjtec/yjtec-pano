import React,{Component} from 'react';
import {connect} from 'dva';
import { message,Row,Col,Button } from 'antd';
import { Drawer,ItemBox } from '@/components/';
import { EmbedType } from '../action';
import Action from './action';
import FineTuning from '../fineTuning';
import style from './style.less';

class EmbedAdd extends Component{

  //关闭编辑窗口
  handleCancel = () => {
    this.props.onCancel();
  }
  //切换类型
  handleEmbedType = (e) => {
    this.props.onSetType(e);
  }
  //接收修改数据
  receiveData = (data) => {
    this.props.onChange(data);
  }
  //微调位置
  editFineTuning = (data) => {
    console.log(data)
    this.props.onLocation(data)
  }
  //最终保存
  handleSave = () => {
    this.props.onSave();
  }
  //删除
  handleDelete = () => {
    this.props.onDel();
  }
  render(){
    let { embedTypeData,embedType = 1,data,isVip } = this.props;
    return(
      <div className={style.module}>
        <Drawer
          visible={this.props.visible}
          destroyOnClose={false}
          title='嵌入'
          onCancel={this.handleCancel}
        >
          <ItemBox>
            <EmbedType 
              embedTypeData={embedTypeData} 
              embedType={embedType} 
              onChange={this.handleEmbedType}
            />
          </ItemBox>
          <Action 
            embedType={embedType}
            isVip={isVip}
            data={data}
            onChange={this.receiveData}
          />
          <ItemBox>
            <Row style={{margin:'0 -5px'}}>
              <Col span={12} style={{padding:'0 5px'}}>
                <Button type='primary' onClick={this.handleSave} style={{width:'100%'}}>保存</Button>
              </Col>
              <Col span={12}  className={style.panoList} style={{padding:'0 5px'}}>
                <Button type='danger' onClick={this.handleDelete} style={{width:'100%'}}>删除</Button>
              </Col>
            </Row>
          </ItemBox>
        </Drawer>

        <FineTuning 
          visible={this.props.visible} 
          data={data.locationData} 
          embedType={embedType} 
          onChange={this.editFineTuning}
        />
      </div>
    )
  }
}
export default connect(({loading})=>({
  loading:loading
}))(EmbedAdd);