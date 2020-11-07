import React from "react";

import { Menu } from "antd";
import {
    AppstoreOutlined,
    BlockOutlined,
    DashboardOutlined,
} from "@ant-design/icons";

export default function ORHeaderNavigation() {
    return (
        <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ float: "left" }}
        >
            <Menu.Item icon={<DashboardOutlined />} key="1">
                Dashboard
            </Menu.Item>
            <Menu.Item icon={<AppstoreOutlined />} key="2">
                Releases
            </Menu.Item>
            <Menu.Item icon={<BlockOutlined />} key="3">
                Stories
            </Menu.Item>
        </Menu>
    );
}
