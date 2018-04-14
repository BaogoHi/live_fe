import React from 'react'
import Reflv from 'reflv'
import {Input} from 'antd'
import './index.less'
class RealLive extends React.Component{
  componentDidMount() {
    console.log(this.props.match.params.id)
  }

  render() {
    
    return (
      <div className="live">
        <Reflv  
          url={`http://42.56.90.219:8000/live/test.flv`}
          type="flv"
          isLive
          no-cors
          style={{width:"60%"}}
        />
        <div className="live-text">
          <div className="live-text__content"></div>
          <div className="live-text__input">
            <Input  placeholder="请输入您的评论" />
          </div>
        </div>
      </div> 
    )
  }
}

export default RealLive