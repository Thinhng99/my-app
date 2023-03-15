/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Card, Col, Form, Input, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "./login.scss";
import { useAppDispatch, useAppSelector } from "../../store";
import { path } from "../../router/path";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import { IAuth } from "../../types/auth.type";
import { loginThunk, setShowSignUpModal } from "../../slices/authSlice";
import logo from "../../assets/images/baner.png";
import SignUp from "./SignUp";

const Auth = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading } = useAppSelector((state) => state.auth);

  const handleFinish = async (values: IAuth) => {
    await dispatch(loginThunk(values));
    navigate(path.root);
  };

  return (
    <div className="back-ground">
      <div className="login-box">
        <div className="title-login"></div>
        <Form
          className="login-form"
          layout="vertical"
          onFinish={handleFinish}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
          requiredMark={"optional"}
        >
          <Row>
            <Col span={24}>
              <Form.Item
                label="Tên đăng nhập"
                name="email"
                rules={[{ required: true }]}
              >
                <TextInput
                  style={{ width: "100%" }}
                  prefix={<UserOutlined />}
                  placeholder="Nhập tên đăng nhập"
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Mật khẩu"
                name="password"
                rules={[
                  { required: true },
                ]}
              >
                <Input.Password
                  size="large"
                  prefix={<LockOutlined />}
                  placeholder="Nhập mật khẩu"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row style={{ width: "65%", marginTop: 20 }}>
            <Button block htmlType="submit" loading={isLoading}>
              Đăng nhập
            </Button>
          </Row>
          <Row style={{ width: "65%", marginTop: 10 }}>
            <span
              style={{
                color: "red",
                fontSize: "16px",
                marginRight: 2,
                lineHeight: "20px",
                cursor: "pointer",
              }}
              onClick={() => dispatch(setShowSignUpModal(true))}
            >
              Đăng ký
            </span>
            <span
              style={{
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              {" "}
              ngay để chiến cùng huynh đài
            </span>
          </Row>
        </Form>
        <SignUp />
      </div>
    </div>
  );
};

export default Auth;
