import React from "react";
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import { Form, Input, Button , Spin} from 'antd';

const Signup = (props) => {

  let style = {
    background: "linear-gradient(90deg, #d53369 0%, #daae51 100%)",
  };

  const onFinish = values => {
    props.onAuth(
      values.userName,
      values.email,
      values.password1,
      values.password2
  );
  console.log(values.username, values.email,values.password1,values.password2);
  // props.history.push('/');
    };

    let errorMessage = null;

        const onFinishFailed = (errorInfo) => {
            errorMessage = (
                <p>{props.error.message}</p>
            );
          };

  return (
      <div className="container">
        <div
          className="min-h-screen flex items-center justify-center bg-gray-50  px-4 sm:px-6 md:py-0 md:pb-60 lg:px-8 lg:pb-96  xl:py-12 w-full"
          style={style}>
          <div className="max-w-md w-full space-y-8 ">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-100">
                Sign Up
              </h2>
            </div>

            {errorMessage}
           {
               props.loading ?

               <Spin indicator="Waiting" />

               :


          <Form onFinish={onFinish} onFinishFailed={onFinishFailed} className="register mt-8 space-y-6" >

            <Form.Item className="mt-8 space-y-6 rounded-md shadow-sm -space-y-px" rules={[{ required: true, message: 'Please input your username!' }]}>
                        <Input 
                        id="username" 
                        name="username" 
                        type="text" 
                        autoComplete="email"  
                        required
                        placeholder="Username" 
                        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-2" 
                        />     
            </Form.Item>

            <Form.Item className="mt-8 space-y-6 rounded-md shadow-sm -space-y-px" rules={[{ required: true, message: 'Please input your Email!' }]}>
                        <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        autoComplete="current-password"  
                        required
                        placeholder="Email" 
                        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-2" 
                        />     
            </Form.Item>

            <Form.Item  className="mt-8 space-y-6 rounded-md shadow-sm -space-y-px" rules = {[{ required: true, message: 'Please input your Password!' }]}>
                        <Input 
                        id="password1" 
                        name="password1" 
                        type="password" 
                        required
                        autoComplete="current-password"  
                        placeholder="Password"  
                        className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2" 
                        />
                </Form.Item>

            <Form.Item  className="mt-8 space-y-6 rounded-md shadow-sm -space-y-px" rules = {[{ required: true, message: 'Please input your Password!' },({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
          ]}>
                        <Input 
                        id="password2" 
                        name="password2" 
                        type="password" 
                        autoComplete="current-password" 
                        required 
                        placeholder="Re-Enter-Password"  
                        className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2" 
                        />
            </Form.Item>
           
            <Form.Item>
              <Button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300" 
              type="primary" htmlType="submit">
              Register
              </Button>
            </Form.Item>

          </Form>
}
          </div>
        </div>
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
      loading: state.loading,
      error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onAuth: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);