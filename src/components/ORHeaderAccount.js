import React from "react";

import { Menu } from "antd";

const { SubMenu } = Menu;

export default function ORHeaderAccount() {
    return (
        <Menu theme="light" mode="horizontal" style={{ float: "right" }}>
            <SubMenu title="Account">
                <Menu.Item>Logout</Menu.Item>
            </SubMenu>
        </Menu>
    );
}
