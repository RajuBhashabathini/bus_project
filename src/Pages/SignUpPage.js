import { Button, Form, Input, InputNumber } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { getUserDataBaseDetails } from "../ApiCalls/getUserDataBaseDetails";
import { postUserDataBaseDetails } from "../ApiCalls/postUserDataBaseDetails";

const Signup = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Success:", values);

    checkingData(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const checkingData = async (values) => {
    try {
      let verifyData = await getUserDataBaseDetails(values, true);
      if (verifyData && verifyData.length > 0) {
        alert("emailId already exist");
      } else {
        let data = await postUserDataBaseDetails(values);
        console.log("data in checkingData:", data);
        if (data.status === 200) {
          console.log("inside");
          navigate("/signin");
        } else {
          console.log("outside");
        }
      }
    } catch (error) {
      console.log("error from checkingData :", error);
    }
  };

  return (
    <div className=" flex justify-center flex-col items-center ">
      <div>
        <Form
          name="basic"
          labelCol={{
            span: 10,
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
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please input your First Name!",
              },
              {
                min: 4,
                message: "Minimum Number of characters is 4",
              },
              {
                max: 15,
                message: "Max Number of characters is 15",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Please input your Last Name!",
              },
              {
                min: 4,
                message: "Minimum Number of characters is 4",
              },
              {
                max: 15,
                message: "Max Number of characters is 15",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Mobile Number"
            name="mobileNumber"
            rules={[
              {
                required: true,
                message: "Please input your Mobile Number",
              },
            ]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your emain!",
              },
              {
                type: "email",
                message: "Please enter valid email Id",
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
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
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
        <h1>Already have an account here ?</h1>
        <Link to={"/signin"}>
          <h1>Signin ...</h1>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
