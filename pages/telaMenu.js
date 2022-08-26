import Head from 'next/head';

import Menu from '../components/Menu';

import { Jumbotron, Container } from 'reactstrap';
import {NavLink} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from '../components/Style.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
library.add(fas);

function telaMenu() {
    return (
        <div>
            <Head>
                <title>Patinha Solidária</title>
                <meta name='description' content='Site de ... sobre ...' />
                <meta name='author' />
            </Head>
            <Menu />
            <Jumbotron fluid className="servicos">
                <style>{`.servicos{
                    padding-top: 80px;
                    padding-bottom: 80px;
                    background-color: #fff;
                    color: #000;
                    margin-bottom: 0rem !important;
                }
                .circulo{
                    width:140px;
                    height: 140px;
                    background-color: #4D449E;
                    color: #fff;
                    font-size: 52px;
                    padding-top: 24px;
                }
                .centralizar{
                    margin: 0 auto !important;
                    float: none !important;
                }`}</style>
                <Container className='text-center'>
                    <div>
                        <h1 className='display-4'>Patinha Solidária</h1>
                        <p className='lead pb-4'>Temos a solução que o seu animal precisa!</p>
                    </div>
                    <br></br>
                    <div class="row">
                        
                        
                        <div class="col-lg-4">
                            <div className="rounded-circle circulo centralizar">
                            <FontAwesomeIcon icon="ban" />
                            </div>
                            <style>{`.texto{padding-top: 20px; padding-bottom: 80px; color: #000; font-weight: 500; font-size: 2rem;}`}</style>
                            <NavLink href="/denuncias" className="texto">Denúncias</NavLink>
                        </div>
                      
                       
                        <div class="col-lg-4" >
                            <div className="rounded-circle circulo centralizar">
                             <a href="/castracao"><FontAwesomeIcon className='icon' icon="calendar"/></a>   
                            </div>
                            <style>{`.texto{padding-top: 20px; padding-bottom: 80px; color: #000; font-weight: 500; font-size: 2rem; }`}</style>
                            <h2 className='mt-4 mb-4'>Castração</h2>
                        </div>


                        <div class="col-lg-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="dog" />
                            </div>
                            <h2 className='mt-4 mb-4'>Doação</h2>
                        </div>

                        
                        <div class="col-lg-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="paw" />
                            </div>
                            <h2 className='mt-4 mb-4'>Veterinário</h2>
                        </div>


                        <div class="col-lg-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="building" />
                            </div>
                            <h2 className='mt-4 mb-4'>Hotel</h2>
                        </div>


                        <div class="col-lg-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="user" />
                            </div>
                            <h2 className='mt-4 mb-4'>Minha Conta</h2>
                        </div>
    </div>
                </Container>
            </Jumbotron>
        </div>
    );
}
export default telaMenu;