import React from 'react';

import {ItemBox,Right,Content} from '@/components/';
import {Button,Layout} from 'antd';
import {Slider} from '@/components/Form/';
import View from './pano';
import styles from './style.less';

export default class ViewEdit extends React.Component{

  handleView = (k,v) => {
    this.props.editView(k,v);
  }

  render(){
    const { viewdata,flag } = this.props;
    return(
      <div>
        <div style={{position:'absolute','left':'50%',marginLeft:'-196px',marginTop:'100px',top:'50%'}}>
          <Button type="primary" onClick={this.props.setView}>把当前视角设置为默认视角</Button>
        </div>
        <Right>
          <ItemBox>
            <p>当前初始视角</p>
            { flag && <View />}
          </ItemBox>
          <ItemBox>
            <p>视角(FOV)范围设置</p>
            <Slider 
              onChange={(value)=>this.handleView('fov',value)}
              min={1}
              max={179}
              label={['最近','初始','最远']}
              defaultValue={[
                Number(viewdata.fovmin),
                Number(viewdata.fov),
                Number(viewdata.fovmax)
              ]}
              ref={ref => this.fref = ref}
            />
          </ItemBox>
          <ItemBox>
            <p>垂直视角限制</p>
            <Slider 
              onChange={(value)=>this.handleView('v',value)}
              min={-90}
              max={90}
              defaultValue={[
                Number(viewdata.vlookatmin),
                Number(viewdata.vlookatmax)
              ]}
              label={['最低','最高']}
            />
          </ItemBox>
          <ItemBox>
            <p>水平视角限制</p>
            <Slider 
              onChange={(value)=>this.handleView('h',value)}
              min={-180}
              max={180}
              defaultValue={[
                Number(viewdata.hlookatmin),
                Number(viewdata.hlookatmax)
              ]}
              label={['最低','最高']}
            />
          </ItemBox>
          <ItemBox >
            <div style={{textAlign:'center'}}>
            <Button type="primary" onClick={this.props.reset}>恢复默认设置</Button>
            </div>
          </ItemBox>
        </Right>
      </div>
    )
  }
}