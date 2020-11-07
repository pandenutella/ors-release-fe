import { Layout } from "antd";

import ORHeader from "./ORHeader";

const { Content } = Layout;

export default function ORPage({ sider: Sider, footer: Footer, children }) {
    return (
        <Layout>
            <ORHeader />
            <Layout>
                {Sider !== undefined && <Sider />}
                <Content>{children}</Content>
            </Layout>
            {Footer !== undefined && <Footer />}
        </Layout>
    );
}
