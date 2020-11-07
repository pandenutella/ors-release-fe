import React from "react";
import { connect } from "react-redux";
import { logoutAccount } from "../actions/auth";

import { Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

const ORHeaderAccount = (props) => {
    return (
        <Menu theme="light" mode="horizontal" className="header-menu">
            <SubMenu icon={<UserOutlined />} title={props.account.domainName}>
                <Menu.Item onClick={props.logoutAccount}>Logout</Menu.Item>
            </SubMenu>
        </Menu>
    );
};

const mapStateToProps = (state) => ({ account: state.auth.account });

const mapDispatchToProps = (dispatch) => ({
    logoutAccount: () => dispatch(logoutAccount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ORHeaderAccount);
