import PropTypes from "prop-types";

import { Col, Row, Typography } from "antd";

const { Title } = Typography;

const SimplePageWrapper = (props) => {
    return (
        <Row className="simple-page-wrapper-row" align="middle">
            <Col
                xs={{ span: 14, offset: 5 }}
                sm={{ span: 10, offset: 7 }}
                md={{ span: 8, offset: 8 }}
                lg={{ span: 6, offset: 9 }}
                xl={{ span: 4, offset: 10 }}
                className="simple-page-wrapper-col"
            >
                <Title className="simple-page-wrapper-title">
                    {props.title}
                </Title>
                {props.children}
            </Col>
        </Row>
    );
};

SimplePageWrapper.propTypes = {
    children: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
};

export default SimplePageWrapper;
