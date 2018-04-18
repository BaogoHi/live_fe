import React from 'react'
import './index.less'
import LoginForm from './LoginForm'
class Login extends React.Component {
  render() {
    return (
      <div className="login-page">
        <header>
          <h1>治娱治乐第一品牌</h1>
          <h1>治娱直播</h1>
        </header>
        <section style={{width:"30%"}}>
          <LoginForm />
        </section>
      </div>
    )
  }
}

export default Login