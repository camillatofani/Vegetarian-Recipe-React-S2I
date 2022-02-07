/* ==== Containers & Component ==== */
import {
    Logo,
    Copy,
} from '../../components';
import {
    Container,
    Row,
} from 'react-bootstrap';

export default function Footer() {
    return(
        <footer>
            <Logo />
            <Container>     
                <Row>
                    <Copy />
                </Row>
            </Container>
        </footer>
    )
}