/* eslint-disable no-restricted-globals */
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Modal, ModalProps, Row } from "antd";
import TextInput from "components/TextInput";
import React from "react";
import { registerThunk, setShowSignUpModal } from "slices/authSlice";
import { useAppDispatch, useAppSelector } from "store";
import { IAuth } from "types/auth.type";
import { REGEX_PASSWORD_TYPE } from "utils/Contant";
import "./login.scss";

const SignUp = (props: ModalProps) => {
  const [form] = Form.useForm();
  const { openSignUpModal } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const handleSubmit = () => {
    form.validateFields().then(async (values: IAuth) => {
      const { meta } = await dispatch(registerThunk(values));
      status = meta.requestStatus;
      if (status === "fulfilled") {
        handleCloseModal();
      }
    });
  };

  const handleCloseModal = () => {
    dispatch(setShowSignUpModal(false));
    form.resetFields();
  };
  return (
    <div>
      <Modal
        {...props}
        title="ĐĂNG KÝ TÀI KHOẢN"
        open={openSignUpModal}
        onOk={handleSubmit}
        onCancel={handleCloseModal}
        footer={[
          <Button key="back" onClick={handleCloseModal}>
            Hủy
          </Button>,
          <Button key="submit" type="primary" onClick={handleSubmit}>
            Đăng ký
          </Button>,
        ]}
      >
        <Form layout="vertical" className="logo" form={form}>
          <Row>
            <Col span={24}>
              <Form.Item
                className="title"
                label="Tên đăng nhập"
                name="username"
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
                  {
                    required: true,
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (
                        !value ||
                        REGEX_PASSWORD_TYPE.exec(getFieldValue("password"))
                      ) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "Mật khẩu phải chứa cả chữ hoa, chữ thường, và số"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  size="large"
                  prefix={<LockOutlined />}
                  placeholder="Nhập mật khẩu"
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Nhập lại mật khẩu"
                name="repassword"
                rules={[
                  { required: true },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Mật khầu nhập lại không trùng khớp")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  size="large"
                  prefix={<LockOutlined />}
                  placeholder="Nhập lại mật khẩu"
                />
              </Form.Item>
            </Col>
            <div>
              <span>Bằng việc click vào các nút</span>
              <strong style={{ margin: "0 4px", color: "#555" }}>
                Đăng ký
              </strong>
              <span>bạn đã đồng ý với</span>
              <strong
                style={{ cursor: "pointer", color: "#096aad", marginLeft: 2 }}
              >
                Điều khoản sử dụng
              </strong>
            </div>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default SignUp;
