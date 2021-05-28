import React from "react";
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import { Form, Input, Button , Spin} from 'antd';

const Login = (props) => {

    const onFinish = values => {
        props.onAuth(values.userName, values.password);
        console.log(values.userName, values.password);
        props.history.push('/');
        };
        
        let errorMessage = null;

        const onFinishFailed = (errorInfo) => {
            errorMessage = (
                <p>{props.error.message}</p>
            );
          };


  let style = {
    background: "linear-gradient(90deg, #d53369 0%, #daae51 100%)",
  };

                return(
        <div className="container">
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"  style={style}>
              <div className="max-w-md w-full space-y-8 ">
                <div>
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-100">
                    Login to your account
                  </h2>
                </div>

                    {errorMessage}
           {
               props.loading ?

               <Spin indicator="Waiting" />

               :

                <Form onFinish={onFinish} onFinishFailed={onFinishFailed} className="login-form">

                <Form.Item className="mt-8 space-y-6" rules={[{ required: true, message: 'Please input your username!' }]}>
                        <Input 
                        id="username" 
                        name="username" 
                        type="text" 
                        autoComplete="email"  
                        placeholder="Username" 
                        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-2" 
                        />     
                </Form.Item>

                <Form.Item  className="mt-8 space-y-6" rules = {[{ required: true, message: 'Please input your Password!' }]}>
                        <Input 
                        id="password" 
                        name="password" 
                        type="password" 
                        autoComplete="current-password" 
                        required 
                        placeholder="Password"  
                        className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2" 
                        />
                </Form.Item>
                
                <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 mt-4">
                Login
                </Button>
                </Form.Item>
                 </Form>
            }
                  </div>
         </div>
        </div>
                    );
          
};

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);