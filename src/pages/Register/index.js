import React from 'react'
import './index.less'
import RegisterFrom from './RegisterFrom'
class Register extends React.Component {
  render() {
    return (
      <div className="login-page">
        <header>
          <h1>🚀Alarak的📣直播小站</h1>
          <h1>用户注册</h1>
        </header>
        <section style={{width:"30%"}}>
          <RegisterFrom />
        </section>
      </div>
    )
  }
}

export default Register