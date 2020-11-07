import { Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import SimplePageWrapper from "./SimplePageWrapper";

const LoginPage = () => {
    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <SimplePageWrapper title="ORS Release">
            <Form initialValues={{ remember: true }} onFinish={onFinish}>
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Username!",
                        },
                    ]}
                >
                    <Input
                        prefix={
                            <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Username"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Password!",
                        },
                    ]}
                >
                    <Input
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item style={{ float: "right" }}>
                    <Button type="primary" htmlType="submit">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </SimplePageWrapper>
    );
};

export default LoginPage;
