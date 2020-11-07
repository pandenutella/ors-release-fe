import ORPage from "./ORPage";

import { Typography } from "antd";

import StoriesTable from "./StoriesTable";

const { Title } = Typography;

export default function ReleasesPage() {
    return (
        <ORPage>
            <Title>Stories</Title>
            <StoriesTable />
        </ORPage>
    );
}
