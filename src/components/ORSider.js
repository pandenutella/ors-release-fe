import { Layout } from "antd";

const { Sider } = Layout;

export default function ORSider() {
    return (
        <Sider
            theme="light"
            style={{
                position: "fixed",
                left: 0,
                top: 66,
            }}
        >
            Sider
        </Sider>
    );
}
