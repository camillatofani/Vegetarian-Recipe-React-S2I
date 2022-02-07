/* ==== Containers & Component ==== */
import {
    Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function InfoRight() {
    return(
		<>
			<h3>You can find me</h3>
			<hr className='spaceInfo' />
			<a href='https://talent.start2impact.it/profile/camilla-tofani' target='_blank'><Button variant='outline-success'>On Start2Impact</Button></a>
			<hr className='spaceInfo' />
			<a href='https://github.com/camillatofani?tab=repositories' target='_blank'><Button variant='outline-success'>On GitHub</Button></a>
			<hr className='spaceInfo' />
			<a href='https://www.linkedin.com/in/camilla-tofani-3b284a103/' target='_blank'><Button variant='outline-success'>On LinkedIn</Button></a>
		</>
    )
}

export default InfoRight;
