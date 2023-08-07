import React, { useContext } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { FormContainer } from '../StyledComponent';
import { useLocation } from 'react-router';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const SignUp = () => {
  const {setUser} = useContext(AuthContext)
  
  const { pathname } = useLocation()
  const isSignup = pathname === '/sign-up'

  const onFinish = (values) => {
    console.log('Success:', values);
    const url = isSignup ? 'http://127.0.0.1:4000/signup' : 'http://127.0.0.1:4000/signin'
    axios.post(url,{
      username: values.username,
      password: values.password
    }).then((res)=> {
      console.log(res.data, res);
      localStorage.setItem("user",JSON.stringify(res.data))
      setUser(res.data)
    })
    .catch((error)=>console.log(error.response.data , error))
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return <FormContainer key={pathname}>
    <Form
      color='#FFF'
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          { isSignup? 'Sign Up': 'Sign in' }
        </Button>
      </Form.Item>
    </Form>
  </FormContainer>
};
export default SignUp;


