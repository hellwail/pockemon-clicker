import { useState } from "react";
import { Button, Form, Input, Switch } from "antd";

const AuthForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const onFinish = (values: any) => {
    if (isSignIn) {
      console.log("Signing in with:", values);
    } else {
      console.log("Signing up with:", values);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          border: "1px solid #d9d9d9", // Цвет бордера
          borderRadius: "12px", // Закругление углов
          padding: "20px", // Отступы внутри контейнера
          boxShadow: "0 4px 18px rgba(0, 0, 0, 0.3)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <h3>{isSignIn ? "Sign in" : "Sign up"}</h3> */}
        <div style={{ marginBottom: 16 }}>
          <span
            onClick={() => setIsSignIn(true)}
            style={{
              cursor: "pointer",
              color: isSignIn ? "blue" : "black",
              textDecoration: isSignIn ? "underline" : "none",
              fontWeight: isSignIn ? "bold" : "normal",
            }}
          >
            Sign In
          </span>
          <span style={{ margin: "0 10px" }}> | </span>
          <span
            onClick={() => setIsSignIn(false)}
            style={{
              cursor: "pointer",
              color: !isSignIn ? "blue" : "black",
              textDecoration: !isSignIn ? "underline" : "none",
              fontWeight: !isSignIn ? "bold" : "normal",
            }}
          >
            Sign Up
          </span>
        </div>
        <Form
          name="auth_form"
          onFinish={onFinish}
          style={{
            width: 450,
          }}
          layout="vertical"
        >
          <Form.Item
            name="login"
            label="Login"
            rules={[{ required: true, message: "Please input your login" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          {!isSignIn && (
            <Form.Item
              name="passwordConfirmation"
              label="Password confirmation"
              rules={[
                {
                  required: true,
                  message: "Please input your password confirmation!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The two passwords do not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
          )}
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              {isSignIn ? "Sign In" : "Sign Up"}
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div style={{ textAlign: "center", marginTop: 16 }}></div>
    </div>
  );
};

export default AuthForm;
