import Menu from '../components/Menu';
import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.min.css';

function Sobre() {
    return (
        
        <div>
            <Head>
                <title>Patinha Solidária</title>
                <meta name='description' content='Site de ... sobre ...' />
                <meta name='author' />
            </Head>

            <Menu />
            Pagina Sobre
        </div>
    );
}

export default Sobre;
