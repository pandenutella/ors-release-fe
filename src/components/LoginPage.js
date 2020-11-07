import { connect } from "react-redux";

import { loginAccount } from "../actions/auth";

import { Button, Form, Input, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import SimplePageWrapper from "./SimplePageWrapper";

const LoginPage = (props) => {
    const onFinish = (values) => {
        const account = getAccountUsingCredentials(values);
        if (account === undefined) {
            notification.open({
                message: "Login Failed",
                description:
                    "Your username or password is incorrect. Please try again.",
            });

            return;
        }

        props.loginAccount(account);

        notification.open({
            message: "Login Successful",
            description: `Welcome ${account.firstName}!`,
        });
    };

    const getAccountUsingCredentials = ({ domainName, password }) => {
        return props.accounts.find(
            (account) =>
                account.domainName === domainName &&
                account.password === password
        );
    };

    return (
        <SimplePageWrapper title="ORS Release">
            <Form initialValues={{ remember: true }} onFinish={onFinish}>
                <Form.Item
                    name="domainName"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Domain Name!",
                        },
                    ]}
                >
                    <Input
                        prefix={
                            <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Domain Name"
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

const mapStateToProps = (state) => ({ accounts: state.accounts });

const mapDispatchToProps = (dispatch) => ({
    loginAccount: (account) => dispatch(loginAccount(account)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
