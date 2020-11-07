import React from "react";
import { Link } from "react-router-dom";

import { Menu } from "antd";
import {
    AppstoreOutlined,
    BlockOutlined,
    DashboardOutlined,
} from "@ant-design/icons";

export default function ORHeaderNavigation() {
    return (
        <Menu theme="light" mode="horizontal" className="header-menu">
            <Menu.Item icon={<DashboardOutlined />} key="1">
                <Link to="/">Dashboard</Link>
            </Menu.Item>
            <Menu.Item icon={<AppstoreOutlined />} key="2">
                <Link to="/releases">Releases</Link>
            </Menu.Item>
            <Menu.Item icon={<BlockOutlined />} key="3">
                <Link to="/stories">Stories</Link>
            </Menu.Item>
        </Menu>
    );
}
