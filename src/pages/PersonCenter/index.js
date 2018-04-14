import React from 'react'
import './index.less'
class PersonCenter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imgUrl:'https://frankfurt-cdr-contents-all.s3.cn-north-1.amazonaws.com.cn/Chinese_Cabbage_preview.jpeg',
      person:{
        name:'klren',
        sex:'男',
        years:'22',
        email:'605747907@qq.com',
        live:'http://zb.zzes1314.cn:8000/live/test.flv'
      }

    }
  }
  render() {
    return (
      <div className="center">
        <ul className="center-list">
          <li><span>昵称：</span>{this.state.person.name}</li>
          <li><span>性别：</span>{this.state.person.sex}</li>
          <li><span>年龄：</span>{this.state.person.years}</li>
          <li><span>邮箱：</span>{this.state.person.email}</li>
          <li><span>直播地址：</span>{this.state.person.live}</li>
        </ul>
        <div className="center-image">
          <img alt="图片" src={this.state.imgUrl} />
        </div>
      </div>
    )
  }
}

export default PersonCenter