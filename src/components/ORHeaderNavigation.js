import React from "react";

import { Menu } from "antd";

export default function ORHeaderNavigation() {
    return (
        <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ float: "left" }}
        >
            <Menu.Item key="1">Dashboard</Menu.Item>
            <Menu.Item key="2">Releases</Menu.Item>
            <Menu.Item key="3">Stories</Menu.Item>
        </Menu>
    );
}
