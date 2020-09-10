import { Component } from "react";
import style from './style.less';
import {mediaImgConfig} from '@/utils/oss.config';
import Imground from './Imground/Imground';

class ImgEdit extends Component {
  render () {
    const {url,spots,onChange,delSpot} = this.props;
    return(
      <Imground 
        src={mediaImgConfig(url,'sandImg')} 
        list={spots}
        delSpot={delSpot}
        onChange={onChange}
      />
    );
  }
}
export default ImgEdit;