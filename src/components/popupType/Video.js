import React from "react";
import { Checkbox, Radio, Input, Modal } from "antd";
import VideoThumb from "@/components/VideoThumb";
import VipAuthority from "@/components/VipAuthority";
import {formatUrl} from '@/utils/utils';
import { connect } from "dva";

@connect(({ global }) => ({
  global,
}))
class HotspotVideo extends React.Component {
  constructor(props) {
    super(props);
    const { data } = props;
    this.state = {
      videoType: data && data.videoType ? data.videoType : 2,
      jumpType: data && data.jumpType ? data.jumpType : 1,
      jumpUrlTitle: data && data.jumpUrlTitle ? data.jumpUrlTitle : "",
      jumpUrl: data && data.jumpUrl ? data.jumpUrl : "",
      IframeVideo: data && data.IframeVideo ? data.IframeVideo : "",
      videoUrl: data && data.videoUrl ? data.videoUrl : "",
      title: data && data.title ? data.title : "",
      thumbUrl: data && data.thumbUrl ? data.thumbUrl : "",
      loop: data && data.loop == 1 ? 1 : 0,
      autoplay: data && data.autoplay == 1 ? 1 : 0,
    };
  }

  handleVideoChange = async (data) => {
    const { videoUrl, title, thumbUrl, loop, autoplay } = data;
    await this.setState({
      videoUrl,
      title,
      thumbUrl,
      loop,
      autoplay,
    });
    this.handleChange();
  };
  handleStateChange = async (key, value) => {
    await this.setState({
      [key]: value,
    });
    this.handleChange();
  };
  addHttp = (value) => {
    let url = value.trim();
    if(!url) return;
    if (value.slice(0, 7) == "http://" || value.slice(0, 8) == "https://"|| value.slice(0, 2) == "//"|| value.slice(0, 3) == "://") {
      url= url.replace('http://','//');
      url= url.replace('https://','//');
      return url;
    } else {
      url = "//" + url;
      return url
    }
  };
  handleChangeVideoType = async (value) => {
    if (
      (value == 1 && this.state.IframeVideo) ||
      (value == 2 && this.state.videoUrl)
    ) {
      Modal.confirm({
        okText: "确定",
        cancelText: "取消",
        content: "只能添加一种视频类型，已输入内容将不保存",
        title: "提示",
        onOk: () => {
          this.setState({
            videoUrl: "",
            title: "",
            thumbUrl: "",
            loop: 0,
            autoplay: 0,
            IframeVideo: "",
            videoType: value,
          });
        },
      });
    } else {
      this.setState({
        videoType: value,
      });
    }
  };
  handleChange() {
    this.props.onChange({ ...this.state });
  }

  render() {
    const { data } = this.props;
    const {
      videoType,
      jumpType,
      jumpUrlTitle,
      jumpUrl,
      IframeVideo,
      videoUrl,
      title,
      thumbUrl,
      loop,
      autoplay,
    } = this.state;
    const isVip = this.props.global.data.info.is_vip;
    return (
      <div>
        <Radio.Group
          onChange={(e) => this.handleChangeVideoType(e.target.value)}
          value={videoType}
          style={{ width: "100%", marginTop: 10 }}
          className="mb10"
        >
          <Radio.Button
            value={2}
            style={{
              width: "50%",
              background: "#333",
              color: "#fff",
              fontSize: "12px",
              textAlign: "center",
            }}
          >
            三方视频
          </Radio.Button>
          <Radio.Button
            value={1}
            style={{
              width: "50%",
              background: "#333",
              color: "#fff",
              fontSize: "12px",
              textAlign: "center",
            }}
          >
            本地视频
          </Radio.Button>
        </Radio.Group>
        {videoType == 1 && (
          <div>
            {isVip == 0 ? (
              <VipAuthority></VipAuthority>
            ) : (
              <div className="mb20">
                <VideoThumb
                  data={{ videoUrl, title, thumbUrl, loop, autoplay }}
                  onChange={this.handleVideoChange}
                ></VideoThumb>
              </div>
            )}
          </div>
        )}
        {videoType == 2 && (
          <div>
            <div className="title mb10">通用代码</div>
            <div className="mb10 setupInput">
              <Input.TextArea
                autosize={{ minRows: 3, maxRows: 10 }}
                className="input"
                onChange={(e) =>
                  this.handleStateChange("IframeVideo", e.target.value)
                }
                value={IframeVideo}
                placeholder="请输入第三方视频平台通用代码:<iframe ...></iframe>,如不能正常观看请把代码中的http改为https,即可正常观看。"
                style={{ borderRadius: 3, lineHeight: "18px" }}
              />
            </div>
          </div>
        )}
        {videoType == 2 || (isVip == 1 && videoType == 1) ? (
          <div className="mb10">
            <div className="title">
              <span className="checkboxC">
                <Checkbox
                  name="isShow"
                  checked={jumpType == 1 ? true : false}
                  onChange={(e) =>
                    this.handleStateChange("jumpType", e.target.checked ? 1 : 0)
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
                  this.handleStateChange("jumpUrlTitle", e.target.value)
                }
              />
            </div>
            <div className="mb10 setupInput">
              <Input
                name="text"
                className="input"
                value={jumpUrl}
                placeholder="填写链接地址"
                onChange={(e) =>
                  this.handleStateChange("jumpUrl", e.target.value)
                }
                onBlur={(e) =>
                  this.handleStateChange("jumpUrl", formatUrl(e.target.value))
                }
              />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default HotspotVideo;
