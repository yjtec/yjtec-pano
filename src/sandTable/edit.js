import { Component } from "react";
import style from './style.less';
import {mediaImgConfig} from '@/utils/oss.config';
import Imground from './Imground/Imground';

class ImgEdit extends Component {
  render () {
    const {url,spots,onChange} = this.props;
    return(
      <Imground 
        src={mediaImgConfig(url,'sandImg')} 
        list={spots}
        onChange={onChange}
      />
    );
  }
}
export default ImgEdit;