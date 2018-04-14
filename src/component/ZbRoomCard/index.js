import React from 'react'
import {Icon} from 'antd'
import {withRouter} from 'react-router-dom'
import './index.less'
class ZbRoomCard extends React.Component {
  render() {
    const {imgUrl,title,roomId,watch,love} = this.props
    const goToDetalis = () => {
      this.props.history.push(`/main/reallive/${roomId}`)
    }
    return (
      <div onClick={goToDetalis} className="room-card">
        <img className="room-img" alt="直播间图片" src={imgUrl}/>
        <div className="room-content">
          <div className="room-title">{title}</div>
          <div className="room-desc">
            <div><Icon className="room-icon" type="eye-o" />{watch}</div>
            <div><Icon className="room-icon" type="heart-o" />{love}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ZbRoomCard)