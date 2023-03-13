import { Button as ButtonAntd, ButtonProps } from "antd";
import {
  PlusCircleOutlined,
  SearchOutlined,
  SyncOutlined,
  CheckOutlined,
  DeleteOutlined,
  StopOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { ActionType } from "../types";
import React from "react";

interface Props extends ButtonProps {
  action?: ActionType;
}

const iconTypes = {
  search: <SearchOutlined />,
  create: <PlusCircleOutlined />,
  reset: <SyncOutlined />,
  approve: <CheckOutlined />,
  delete: <DeleteOutlined />,
  reject: <StopOutlined />,
  view: <EyeOutlined />,
};

const Button = ({ children, type, action, size, style, ...others }: Props) => {
  return (
    <ButtonAntd
      {...others}
      type={type || "primary"}
      size={size || "large"}
      icon={action && iconTypes[action]}
      style={{
        ...style,
        background:
          action === ActionType.delete || action === ActionType.reject
            ? "red"
            : "",
      }}
    >
      {children}
    </ButtonAntd>
  );
};

export default Button;
