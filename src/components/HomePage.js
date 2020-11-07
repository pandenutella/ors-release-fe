import React, { Component } from "react";

import { Layout } from "antd";

import ORHeader from "./ORHeader";
import ORSider from "./ORSider";
import ORFooter from "./ORFooter";

const { Content } = Layout;

export default class HomePage extends Component {
    render() {
        return (
            <Layout>
                <ORHeader />
                <Layout>
                    <ORSider />
                    <Content>Content</Content>
                </Layout>
                <ORFooter />
            </Layout>
        );
    }
}
