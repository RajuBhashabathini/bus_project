import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUserDataBaseDetails } from "../ApiCalls/getUserDataBaseDetails";
import { loggedInUser } from "../Redux/userDetails";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    console.log("Success:", values);
    const requestBody = {
      email: values.email,
      password: values.password,
    };

    getUserDataBaseDetailsOne(requestBody);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const getUserDataBaseDetailsOne = async (requestBody) => {
    let data = await getUserDataBaseDetails(requestBody);
    console.log("data :", data);
    if (data && data.length > 0) {
      dispatch(loggedInUser(data));
      navigate("/dashboard");
    }
  };

  return (
    <div className=" flex justify-center flex-col  items-center">
      <div className="">
        <Form
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
            label="Email"
            name="email"
            rules={[
              {
                type: "email",
                message: "Please input valid Email!",
              },
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input value={"hehe"} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
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
            <Button className="bg-blue-500" type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div>
        <Link to={"/signup"}>
          <h1>New User ?? dont worry create an account here</h1>
        </Link>
      </div>
    </div>
  );
};

export default Signin;
