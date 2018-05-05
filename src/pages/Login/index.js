import React from 'react'
import './index.less'
import LoginForm from './LoginForm'
class Login extends React.Component {
  render() {
    return (
      <div className="login-page">
        <header>
          <h1>🚀Alarak的📣直播小站</h1>
          <h1>用户登录</h1>
        </header>
        <section style={{width:"30%"}}>
          <LoginForm />
        </section>
      </div>
    )
  }
}

export default Login