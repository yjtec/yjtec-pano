import React from 'react';
import {Radio} from 'antd';
import styles from './style.less';

class Size extends React.Component{
  
  render() {
    const {value} = this.props;
    return (
      <div className={styles.sunlightSize}>
        <Radio.Group onChange={this.props.onChange} value={value}>
          <Radio value={1}>小</Radio>
          <Radio value={2}>中</Radio>
          <Radio value={3}>大</Radio>
        </Radio.Group>
      </div>
    );
  }
}
export default Size;