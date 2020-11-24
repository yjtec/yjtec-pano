import React from 'react';
import {Modal} from 'antd';
import BraftEditor from './braftEditor';
import styles from './style.less';
import {Obj} from 'yjtec-support';
export default class modalEditor extends React.Component {
  state = {
    htmlContent:''
  }

  componentDidMount() {
    this.setState({
      htmlContent: this.props.data
    });
  }

  componentDidUpdate(prevProps) {
    if(!Obj.isEqual(prevProps.data,this.props.data)){
      let {data} = this.props;
      if (data) {
        this.setState({
          htmlContent:data
        })
      }
    }
  }

  getHtmlContent = data => {
    this.setState({
      htmlContent: data
    });
  }

  onSave = () => {
    this.props.onChange(this.state.htmlContent);
  }

  setModalVisible = () => {
    this.props.onClose();
  }

  render() {
    const {visible} = this.props;
    const {htmlContent} = this.state;
    return (
      <div>
        <Modal
          title="富文本"
          centered
          width={1000}
          visible={visible}
          destroyOnClose={true}
          maskClosable={false}
          closable={false}
          okText={'保存'}
          onOk={() => this.onSave()}
          onCancel={() => this.setModalVisible()}
          className={styles.editorMoadl}
        >
          <BraftEditor 
            data={htmlContent} 
            onChange={this.getHtmlContent}
          />
        </Modal>
      </div>
    );
  }
}