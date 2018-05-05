import React from 'react'
import {withRouter} from 'react-router-dom'
import {Button, Form, Input,message} from 'antd'

const FormItem = Form.Item

class RegisterForm extends React.Component {
  handleLogin = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if(!err) {
        message.success("注册成功")
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleLogin} className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入您的用户名' }],
          })(
            <Input prefix={<i className="image-icon login-icon-user"></i>} placeholder="账号" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入您的密码' }],
          })(
            <Input prefix={<i className="image-icon login-icon-password"></i>} type="password" placeholder="密码" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: '请输入您的邮箱' }],
          })(
            <Input prefix={<i className="image-icon login-icon-password"></i>} type="email" placeholder="邮箱" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            注册
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
      password: { value: '' },
      email: {value: ''}
    }  
  }
})(RegisterForm))