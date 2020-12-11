import React from 'react'
import { Select } from "@/components/Form"
import styles from '../style.less'

export default class EmbedType extends React.Component{

  //切换类型
  hanldeType = (e) => {
    this.props.onChange(e);
  }
  render(){
    const { embedTypeData,embedType } = this.props;
    return(
      <div>
        <div className={styles.title}>
          嵌入类型
        </div>
        <Select data={embedTypeData} defaultValue={embedType} onChange={this.hanldeType} />
      </div>
    )
  }
}