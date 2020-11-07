import React from "react";
import { connect } from "react-redux";

import { Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

const ORHeaderAccount = (props) => {
    return (
        <Menu theme="light" mode="horizontal" style={{ float: "right" }}>
            <SubMenu icon={<UserOutlined />} title={props.account.domainName}>
                <Menu.Item>Logout</Menu.Item>
            </SubMenu>
        </Menu>
    );
};

const mapStateToProps = (state) => ({ account: state.auth.account });

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ORHeaderAccount);
