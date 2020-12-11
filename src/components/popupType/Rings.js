import React from "react";
import { Icon, Input, Checkbox, Modal, message } from "antd";
import { Button } from "@/components/Form";
import HotspotRings from "@/components/Upload/HotspotRings";
import { getImgWH } from "@/utils/utils";
import { Obj } from "yjtec-support";
import styles from "./ringsStyle.less";
import { v4 as uuidv4 } from "uuid";
import { mediaImgConfig } from "@/utils/oss.config";
import { formatUrl } from "@/utils/utils";
const uploadData = {
  type: 1,
  apply_type: 2,
  classify_id: "",
  category: "",
};
export default class Rings extends React.Component {
  state = {
    imgType: "",
    imgNumber: 0,
    imgUrl: "",
    describe: "左右拖动图片, 观看不同角度",
    jumpUrlTitle: "",
    jumpUrl: "",
    jumpType: 1,
    visible: false,
    uploadErr: [],
    uploadLength: "",
  };

  componentDidMount() {
    let { data } = this.props;
    var fileData = [];
    if (data) {
      for (var i = 1; i <= data.imgNumber; i++) {
        var itemList = {};
        itemList.uid = i;
        itemList.img = data.imgUrl + i + "." + data.imgType;
        itemList.name = i;
        itemList.percent = 100;
        fileData.push(itemList);
      }
    }

    this.setState({
      ...data,
      fileData: fileData,
    });
  }

  componentDidUpdate(prevProps) {
    if (!Obj.isEqual(prevProps.data, this.props.data)) {
      let { data } = this.props;
      var fileData = [];
      if (data) {
        for (var i = 1; i <= data.imgNumber; i++) {
          var itemList = {};
          itemList.uid = i;
          itemList.img = data.imgUrl + i + "." + data.imgType;
          itemList.name = i;
          itemList.percent = 100;
          fileData.push(itemList);
        }
      }
      this.setState({
        ...this.props.data,
        fileData: fileData,
      });
    }

    //上传不合要求错误提醒
    if (this.state.uploadErr.length != 0) {
      if (this.state.uploadErr.length === this.state.uploadLength) {
        message.error(this.state.uploadErr[0]);
      } else {
      }
    }
  }

  editDesc = (e) => {
    this.setState(
      {
        describe: e.target.value,
      },
      () => {
        this.runOnChange();
      }
    );
  };

  setJumpType = (e) => {
    this.setState(
      {
        jumpType: e.target.checked == true ? 1 : 0,
      },
      () => {
        this.runOnChange();
      }
    );
  };

  setJumpUrlTitle = (e) => {
    this.setState(
      {
        jumpUrlTitle: e.target.value,
      },
      () => {
        this.runOnChange();
      }
    );
  };

  setJumpUrl = (e) => {
    let value = e.target.value;
    this.setState(
      {
        jumpUrl: value,
      },
      () => {
        this.runOnChange();
      }
    );
  };
  formatJumpUrl = (e) => {
    let value = formatUrl(e.target.value);
    this.setState(
      {
        jumpUrl: value,
      },
      () => {
        this.runOnChange();
      }
    );
  };

  uploadModalShow = () => {
    this.setState({
      visible: true,
      uuid: uuidv4(),
    });
  };

  modalOk = () => {
    this.setState(
      {
        visible: false,
        uploadErr: [],
      },
      () => {
        this.runOnChange();
      }
    );
  };
  modalHide = () => {
    this.setState({
      visible: false,
      uploadErr: [],
    });
  };

  getFileLength = (e) => {
    this.setState({
      imgNumber: e.length,
      imgType: "",
      imgUrl: "",
      fileData: "",
    });
  };

  getFileList = (e) => {
    this.setState(
      {
        fileData: [],
      },
      () => {
        var fileData = [];
        e.fileList.map((item) => {
          let index = item.name.indexOf(".");
          fileData.push({
            uid: item.uid,
            name: item.name.substring(0, index),
            percent: item.percent,
            img: item.response ? item.response.data[0].path : "",
          });
        });
        this.setState({
          fileData: fileData,
        });
      }
    );
  };

  splicingUrl = (percent, img) => {
    if (percent == 100 && img) {
      return mediaImgConfig(img, "img");
    }
  };

  uploadSuccess = (e) => {
    let path = e.response.data[0];
    let lastIndex = path.path.lastIndexOf("/");
    let imgUrl = path.path.substring(0, lastIndex + 1);
    let imgTitle = path.path.substring(lastIndex + 1, lastIndex + 3);
    if (imgTitle == "1.") {
      if (imgUrl != this.state.imgUrl) {
        this.setState({
          imgUrl: imgUrl,
          imgType: path.ext,
        });
      }
    }
  };

  delimg = () => {
    this.setState(
      {
        imgType: "",
        imgNumber: 0,
        imgUrl: "",
      },
      () => {
        this.runOnChange();
      }
    );
  };

  runOnChange = () => {
    const {
      imgType,
      imgNumber,
      imgUrl,
      describe,
      jumpUrlTitle,
      jumpUrl,
      jumpType,
      uuid,
    } = this.state;
    let data = {
      imgType: imgType,
      imgNumber: imgNumber,
      imgUrl: imgUrl,
      describe: describe,
      jumpUrlTitle: jumpUrlTitle,
      jumpUrl: jumpUrl,
      jumpType: jumpType,
      uuid: uuid,
    };
    this.props.onChange(data);
  };

  // 上传限制error
  uploadErr = (e, length) => {
    const { uploadErr } = this.state;
    uploadErr.push(e);
    this.setState(
      {
        uploadErr,
        uploadLength: length,
      },
      () => {
        if (uploadErr.length == length) {
          this.setState({
            uploadErr: [],
            uploadLength: "",
          });
        }
      }
    );
  };

  render() {
    const {
      imgUrl,
      imgType,
      imgNumber,
      describe,
      jumpType,
      jumpUrlTitle,
      jumpUrl,
      fileData,
    } = this.state;
    let isImg = 1;

    const tips = (
      <div className={styles.tips}>
        每张图片不超过800kB
        <br />
        使用从1开始的连续数字命名, 最多支持上传72张, 如: 1.jpg, 2.jpg, ...72.jpg
      </div>
    );

    const ringImgC = (
      <div className={styles.ringImgC}>
        <div className={styles.delimg} onClick={() => this.delimg()}>
          <Icon type='delete' />
        </div>
        <div
          className={styles.ringsImg}
          style={{ backgroundImage: "url(" + mediaImgConfig(imgUrl + "1." + imgType, "img") + ")" }}
        ></div>
        <div className={styles.frameNum}>{imgNumber}帧</div>
      </div>
    );

    const noImg = (
      <div className={styles.imgList}>
        <p>
          每张图片不超过800kB
          <br />
          使用从1开始的连续数字命名, 最多支持上传72张, 如: 1.jpg, 2.jpg, ...72.jpg
        </p>
      </div>
    );

    const imgList = (
      <div className={styles.imgList} style={{ height: "450px" }}>
        {fileData &&
          fileData.map((item) => {
            return (
              <div key={item.uid} className={styles.imgUrl}>
                {item.img == "" ? (
                  <span>
                    {item.percent}%<br />
                    上传中...
                  </span>
                ) : (
                  <img src={this.splicingUrl(item.percent, item.img)} />
                )}
                <div className={styles.imgTitle}>{item.name}</div>
              </div>
            );
          })}
      </div>
    );

    return (
      <div>
        <div className={styles.ringsTitle}>
          <div className={styles.uploadButton}>
            <Button
              type='primary'
              size='small'
              title='上传环物'
              onClick={() => this.uploadModalShow()}
            />
          </div>
          <span>环物图片</span>
        </div>
        <div className={styles.ringsC}>{imgNumber == 0 ? tips : ringImgC}</div>
        <div className={styles.title} style={{ marginTop: 10 }}>
          描述内容
        </div>
        <div className={styles.ringsDesc}>
          <Input.TextArea
            autosize={{ minRows: 3, maxRows: 4 }}
            maxLength={150}
            value={describe}
            placeholder='描述内容'
            onChange={this.editDesc}
            style={{ borderRadius: 3 }}
          />
        </div>
        <div className={styles.title} style={{ marginTop: 10 }}>
          <span className={styles.checkboxC}>
            <Checkbox
              checked={jumpType == 1 ? true : false}
              onChange={this.setJumpType}
              className={styles.checkbox}
            >
              新窗口打开
            </Checkbox>
          </span>
          更多内容
        </div>
        <div className={styles.ringsJumpUrl}>
          <Input
            placeholder='按钮标题'
            value={jumpUrlTitle}
            onChange={this.setJumpUrlTitle}
            style={{ marginBottom: "5px" }}
          />
          <Input
            placeholder='填写链接地址'
            value={jumpUrl}
            onBlur={this.formatJumpUrl}
            onChange={this.setJumpUrl}
          />
        </div>
        <Modal
          title='环物图片'
          visible={this.state.visible}
          width={800}
          forceRender={true}
          maskClosable={false}
          onOk={this.modalOk}
          onCancel={this.modalHide}
          footer={null}
        >
          <div className={styles.uploadBtnStyle}>
            <HotspotRings
              path='avatar'
              {...uploadData}
              uuid={this.state.uuid}
              multiple={true}
              title='上传'
              type='1'
              apply_type='2'
              className={styles.uploadButton}
              accept={".jpg,.png"}
              onBeforeUpload={this.getFileLength}
              errBeforeUpload={this.uploadErr}
              onChange={this.getFileList}
              onSuccess={this.uploadSuccess}
            />
          </div>

          <div className={styles.onOk}>
            <Button
              key='submit'
              type='primary'
              title='完成'
              onClick={() => this.modalOk()}
              style={{ float: "right" }}
            />
          </div>

          <div style={{ clear: "both" }}></div>
          {imgNumber > 0 ? imgList : noImg}
        </Modal>
      </div>
    );
  }
}
