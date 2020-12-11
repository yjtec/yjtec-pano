import React from "react";
import { Checkbox, Input } from "antd";
import styles from "./style.less";
import {formatUrl} from '@/utils/utils';
export default class HotspotIframe extends React.Component {
  constructor(props) {
    super(props);
    const { data } = props;
    this.state = {
      jumpType: data && data.jumpType ? data.jumpType : 1,
      jumpUrlTitle: data && data.jumpUrlTitle ? data.jumpUrlTitle : "",
      jumpUrl: data && data.jumpUrl ? data.jumpUrl : "",
      iframeUrl: data && data.iframeUrl ? data.iframeUrl : ""
    };
  }

  handleChange = async (key, value) => {
    await this.setState({
      [key]: value,
    });
    const { jumpUrl, jumpUrlTitle, jumpType,iframeUrl } = this.state;
    this.props.onChange({
      jumpUrl,
      jumpUrlTitle,
      jumpType,
      iframeUrl
    });
  };

  runChange = () => {
    const { videoUrl, title, thumbUrl, loop, autoplay } = this.state;

    this.props.onChange({
      videoUrl: videoUrl,
      title: title,
      thumbUrl: thumbUrl,
      loop: loop,
      autoplay: autoplay,
    });
  };
  render() {
    const { jumpType, jumpUrlTitle, jumpUrl, iframeUrl } = this.state;
   
    return (
      <div className={styles.box}>
        <div>
          <div className="title mb10">网页地址</div>
          <div className="mb10 setupInput">
            <Input.TextArea
              autosize={{ minRows: 3, maxRows: 4 }}
              className="input"
              value={iframeUrl}
              placeholder="请输入网页地址,注:使用https的网址,即可正常展示。"
              onChange={(e) =>
                this.handleChange("iframeUrl", e.target.value )
              }
              onBlur={(e) =>
                this.handleChange("iframeUrl", formatUrl(e.target.value))
              }
              style={{ borderRadius: 3 }}
            />
            <span style={{lineHeight:'30px'}}>注:请使用https的网址</span>
          </div>
        </div>
        <div className="mb10">
          <div className="title">
            <span className="checkboxC">
              <Checkbox
                name="isShow"
                checked={jumpType == 1 ? true : false}
                onChange={(e) =>
                  this.handleChange("jumpType", e.target.checked ? 1 : 0)
                }
                className="checkbox"
              >
                新窗口打开
              </Checkbox>
            </span>
            更多内容
          </div>
          <div className="mb10 setupInput">
            <Input
              name="text"
              maxLength={20}
              className="input"
              value={jumpUrlTitle}
              placeholder="按钮标题"
              onChange={(e) =>
                this.handleChange("jumpUrlTitle", e.target.value)
              }
            />
          </div>
          <div className="mb10 setupInput">
            <Input
              name="text"
              className="input"
              value={jumpUrl}
              placeholder="填写链接地址"
              onChange={(e) => this.handleChange("jumpUrl", e.target.value)}
              onBlur={(e) =>
                this.handleChange("jumpUrl", formatUrl(e.target.value))
              }
            />
          </div>
        </div>
      </div>
    );
  }
}
