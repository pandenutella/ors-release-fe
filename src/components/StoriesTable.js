import React, { Component } from "react";
import { connect } from "react-redux";

import { Progress, Table } from "antd";

class StoriesTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stories: [],
        };
    }

    componentDidMount() {
        this.setState(() => ({
            stories: this.props.stories.map((story, i) => ({
                key: i,
                number: story.number,
                description: story.description,
                status: story.status,
            })),
        }));
    }

    render() {
        const columns = [
            {
                title: "Story Number",
                dataIndex: "number",
                key: "number",
            },
            {
                title: "Description",
                dataIndex: "description",
                key: "description",
            },
            {
                title: "Status",
                dataIndex: "status",
                key: "status",
                render: (status) => (
                    <Progress percent={20 * status} steps={5} />
                ),
            },
        ];

        return (
            <Table
                dataSource={this.state.stories}
                columns={columns}
                pagination={20}
                scroll={{ y: 400 }}
                bordered
            />
        );
    }
}

const mapStateToProps = (state) => ({ stories: state.stories });

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(StoriesTable);
