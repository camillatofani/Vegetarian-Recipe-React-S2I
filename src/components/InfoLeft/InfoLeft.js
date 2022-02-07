/* ==== Containers & Component ==== */
import {
    Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function InfoLeft() {
    return(
		<>
			<h4>For Lorenzo De Francesco</h4>
			<hr className='spaceInfo' />
			<p>Ciao Lorenzo, eccomi qui! A mandare nuovamente questo progetto.<br /><br />
			Inizialmente mi sono chiesta come mai fosse da reinviare e perché mi erano stati segnalati tanti errori.  Non sono una fan dell'errore che insegna sempre ma, in questo caso, devo dire mi sia servito molto.</p>
			<hr className='spaceInfo' />
			<p>Credo di avercela messa tutta per dimostrarti quanto io abbia imparato durante questo nuovo sviluppo:</p>
			<hr className='spaceInfo' />
			<p><ul>
				<li>Creazioni cartelle per i componenti e associazione degli stili</li>
				<li>Utilizzo di functional component</li>
				<li>Utilizzo di useLocation, useState e useEffect <em>(ci ho messo davvero tanto a capirli, devo ammettere)</em></li>
			</ul></p>
			<hr className='spaceInfo' />
			<p>C'è qualcosa che, però, ancora manca:</p>
			<p><ul>
				<li>Concatenamento classi con il pacchetto classname</li>
				<li>Utilizzo ClientAPI</li>
				<li>Utilizzo di React Hook Form (utilizzando useForm)</li>
			</ul></p>
			<hr className='spaceInfo' />
			<p>Devo dirla tutta. In realtà ho passato tutti questi giorni cecando di implementare ogni tuo feedback ma non ci sono riuscita fino in fondo.</p>
			<hr className='spaceInfo' />
			<p>A tal proposito vorrei linkarti qui sotto un paio di pagine sulle quali ho lavorato ma che non sono riuscita ad integrare nel progetto:</p>
			<hr className='spaceInfo' />
			<Link to={{
				pathname: '/searchform'
			}}  target='_blank'>
				<Button variant='success'>Search form with React Hook Form</Button>
			</Link>
			<hr className='spaceInfo' />
			<Link to={{
				pathname: '/clientapi'
			}}  target='_blank'>
				<Button variant='success'>Example of Home with ClientAPI</Button>
			</Link>
			<hr className='spaceInfo' />
			<p>Come hai potuto notare, nella Home Page con ClientAPI (se ho capito bene di cosa si tratti), sono riuscita a fare la chiamata solo con il campo di ricerca già impostato nella URL.</p>
			<hr className='spaceInfo' />
			<p>Ho passato davvero giorni a capire come poter passare il campo del form all'interno del mio file ma non ci sono riuscita.</p>
			<hr className='spaceInfo' />
			<p>Aggiungo una piccola postilla che mi sembra doverosa: giuro che avrei voluto sbatterci ancora la testa ma tra 19 giorni mi scade l'abbonamento a Start2Impact e vorrei riuscire, in breve tempo, ad inoltrare il progetto finale.</p>
			<hr className='spaceInfo' />
			<hr className='spaceInfo' />
			<p><em>Camilla</em></p>
		</>
    )
}

export default InfoLeft;
