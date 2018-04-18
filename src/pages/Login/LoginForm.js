import React from 'react'
import {withRouter} from 'react-router-dom'
import {Button, Form, Input,message} from 'antd'

const FormItem = Form.Item

class LoginForm extends React.Component {
  handleLogin = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if(!err) {
        if(values.username==='guest'&& values.password==='123456'){
          message.success("登录成功")
          this.props.history.push('/main/livedata')
        }else {
          message.error("登录失败，请重新输入")
        }
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleLogin} className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入您的用户名! 游客：guest' }],
          })(
            <Input prefix={<i className="image-icon login-icon-user"></i>} placeholder="账号" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入您的密码! 游客：123456' }],
          })(
            <Input prefix={<i className="image-icon login-icon-password"></i>} type="password" placeholder="密码" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default withRouter(Form.create({
  mapPropsToFields(props) {
    return {
      username: { value: '' },
      password: { value: '' }
    }  
  }
})(LoginForm))