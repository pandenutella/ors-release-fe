import { Layout } from "antd";

import ORHeaderNavigation from "./ORHeaderNavigation";
import ORHeaderAccount from "./ORHeaderAccount";

const { Header } = Layout;

export default function ORHeader() {
    return (
        <Header className="header">
            <ORHeaderNavigation />
            <ORHeaderAccount />
        </Header>
    );
}
