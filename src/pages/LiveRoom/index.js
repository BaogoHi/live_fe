import React from 'react'
import ZbRoomCard from '../../component/ZbRoomCard'
import './index.less'
class LiveRoom extends React.Component {
  render() {
    return (
      <div className="room">
        <ZbRoomCard 
          className="room-card"
          imgUrl="https://frankfurt-cdr-contents-all.s3.cn-north-1.amazonaws.com.cn/Chinese_Cabbage_preview.jpeg" 
          roomId="1"
          title="zzes"
          watch="121"
          love="121"
        />
        <ZbRoomCard 
          className="room-card"
          imgUrl="https://frankfurt-cdr-contents-all.s3.cn-north-1.amazonaws.com.cn/Chinese_Cabbage_preview.jpeg" 
          roomId="1"
          title="zzes"
          watch="121"
          love="121"
        />
        <ZbRoomCard 
          className="room-card"
          imgUrl="https://frankfurt-cdr-contents-all.s3.cn-north-1.amazonaws.com.cn/Chinese_Cabbage_preview.jpeg" 
          roomId="1"
          title="zzes"
          watch="121"
          love="121"
        />
        <ZbRoomCard 
          className="room-card"
          imgUrl="https://frankfurt-cdr-contents-all.s3.cn-north-1.amazonaws.com.cn/Chinese_Cabbage_preview.jpeg" 
          roomId="1"
          title="zzes"
          watch="121"
          love="121"
        />
      </div>
    ) 
  }
}

export default LiveRoom