import React from 'react';
// 引入编辑器组件 引入编辑器样式
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import {Button,Icon} from 'antd';
import { ContentUtils } from 'braft-utils';
import Media from './media.js';

export default class braftEditor extends React.Component {

  state = {
    // 创建一个空的editorState作为初始值
    editorState: BraftEditor.createEditorState(null),
    htmlShow:false,
    mediaVisible:false
  }

  async componentDidMount () {
    // 假设此处从服务端获取html格式的编辑器内容
    const htmlContent = this.props.data;
    // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorStat
    this.setState({
      editorState: BraftEditor.createEditorState(htmlContent)
    })
  }

  handleMediaShow = () => {
    this.setState({
      mediaVisible:true
    });
  }

  mediaClose = () => {
    this.setState({
      mediaVisible:false
    });
  }

  mediaHandler = (url) => {
    if (url.length == 0) {
      return false
    }
    this.setState({
      editorState: ContentUtils.insertMedias(this.state.editorState, url)
    })
  }

  //提交html
  handleEditorChange = (editorState) => {
    const htmlContent = editorState.toHTML();

    this.setState({ 
      editorState
    },()=>{
      this.props.onChange(htmlContent)
    });
  }

  render () {
    const { editorState, mediaVisible } = this.state;

    const controls = [
      'undo', 'redo', 'separator',
      'font-size', 'line-height', 'letter-spacing', 'separator',
      'text-color', 'bold', 'italic', 'underline', 'strike-through', 'separator',
      'superscript', 'subscript', 'remove-styles', 'emoji', 'separator', 'text-indent', 'text-align', 'separator',
      'headings', 'list-ul', 'list-ol', 'blockquote', 'code', 'separator',
      'link', 'separator', 'hr', 'separator', 'separator', 'clear'
    ]

    const extendControls = [
      {
        key: 'antd-uploader',
        type: 'component',
        component: (
          <div>
            <Button type="button" className="control-item button upload-button" onClick={()=>this.handleMediaShow()} data-title="插入媒体">
              插入媒体
            </Button>
          </div>
        )
      }
    ];

    return (
      <div className="my-component">
        <BraftEditor
          value={editorState}
          controls={controls}
          extendControls={extendControls}
          onChange={this.handleEditorChange}
        />
        <Media visible={mediaVisible} onChange={this.mediaHandler} onClose={this.mediaClose}/>
      </div>
    )
  }
}