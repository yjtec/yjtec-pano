import React,{Component} from 'react';
import style from './style.less';
import {KrEditUrl} from '@/utils/url.config';
import {Obj} from 'yjtec-support';

const ItemDefault = function(props) {
  const {item,onClick} = props;
  const {x,y} = item;
  return <div onClick={()=>onClick(item)} className={style.item} style={{left:`${x-7.5}px`,top:`${y-7.5}px`}} />
}

class Imground extends Component{
  constructor(props) {
    super(props);
    this.state ={
      activeKey:1,
      list:props.list,
      left:0,
      top:0,
      heading:0
    }
  }

  componentDidUpdate(prevProps) {
    const {list,delSpot} = this.props;
    let data = {};
    if(!Obj.isEqual(prevProps.list,list)){
      if (this.state.activeKey == delSpot){
        data = {
          activeKey:1,
          list:list,
          left:0,
          top:0,
          heading:0
        }
      }else{
        data = {
          list:list
        }
      }
      this.setState({
        ...data 
      });
    }
  }

  handleClick = item =>{
    console.log(171717)
    const {onChange} = this.props;
    this.setState({
      activeKey:item.scene_id,
      left:item.x,
      top:item.y,
      heading:item.heading
    },()=>{
      this.handleChange();
    })
  }
  handleDown = (e,item) => {
    let diffX = e.pageX - item.x;
    let diffY = e.pageY - item.y;
    this.container.onmousemove = ce =>{
      const {activeKey,list} = this.state;
      let moveX = ce.pageX - diffX;
      let moveY = ce.pageY - diffY;
      if(moveX < 0 ) moveX = 0;
      if(moveX > 400) moveX = 400;
      if(moveY < 0 ) moveY = 0;
      if(moveY > 400) moveY = 400;
      const re = list.map(
        item => item.scene_id == activeKey ? 
        {
          ...item,
          x:moveX,
          y:moveY
        } :
        item
      );
      this.setState({
        list:re,
        left:moveX,
        top:moveY
      })
    }

    this.container.onmouseup = ce => {
      this.handleChange()
      this.container.onmousemove = null;
    }
    e.preventDefault();
  }

  hanldePoinerDown = (e,item)=>{
    let diffX = e.clientX;
    let diffY = e.clientY;
    document.onmousemove = em =>{
      const {activeKey,list} = this.state;
      var moveX = em.clientX - diffX;
      var moveY = em.clientY - diffY;
      var heading = Math.floor(180/(Math.PI/Math.atan2(moveY,moveX)));
      if(heading < 0 ){
        heading = 360 + heading;
      }
      const re = list.map(
        item => item.scene_id == activeKey ? 
        {
          ...item,
          heading:heading
        } :
        item
      );
      this.setState({
        list:re,
        heading:heading
      })
    }

    document.onmouseup = ce => {
      this.handleChange();
      document.onmousemove = null;
    }
    e.preventDefault();
  }
  handleChange = () => {
    const {onChange} = this.props;
    const {activeKey,left,top,heading} = this.state;
    onChange({key:activeKey,x:left,y:top,heading});
  }
  render(){
    const {activeKey,left,top,list} = this.state;
    const {src} = this.props;
    return(
      <div className={style.container}>
        <div className={style.map} style={{backgroundImage:`url(${src})`}} ref={el => this.container = el} >
          {list && list.map(item => 
            <React.Fragment key={item.scene_id}> 
            {item.scene_id == activeKey ? 
              (<div 
                className={style.active} 
                style={{
                left:`${item.x-25}px`,
                top:`${item.y-25}px`,
                transform: `rotate(${item.heading}deg)`
              }}>
                <img src={KrEditUrl+'/images/round.png'} width="" />
                <div className={style.center} onMouseDown={(e)=>this.handleDown(e,item)} ref={ele => this.dragEle = ele}  />
                <div className={style.pointer} onMouseDown={(e) => this.hanldePoinerDown(e,item)} ref={ele => this.pointerEle = ele}  />
              </div>)
              : 
              <ItemDefault onClick={this.handleClick} item={item} />
            }
            </React.Fragment> 
          )}
        </div>
      </div>
    )
  }
}


export default Imground;