/* ==== Containers & Component ==== */
import {
    InfoLeft,
    InfoRight,
} from '../../components';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';

/* ==== Style ==== */
import css from './InfoPage.module.css';

function InfoPage() {
    return(
        <Container>
            <Row>
                <Col md={8} xs={12}  className={css.infoPage}>
                    <InfoLeft />
                </Col>
                <Col md={4} xs={12}  className={css.infoPage}>
                    <InfoRight />
                </Col>
            </Row>
        </Container>
    )
}

export default InfoPage;
