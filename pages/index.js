import Head from 'next/head';

import Menu from '../components/Menu';


import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


function Home() {
    return (
        <div>
            <Head>
                <title>Patinha Solidária</title>
                <meta name='description' content='Site de ... sobre ...' />
                <meta name='author' />
            </Head>
            <Menu />
            
        
              <Carousel>
                  <div>
                      <img src="/1.png" />
                      
                  </div>
                  <div>
                      <img src="/2.png" />
  
                  </div>
                  <div>
                      <img src="/3.png" />
                      
                  </div>
                  <div>
                      <img src="/4.png" />
                   
                  </div>
                  <div>
                      <img src="/5.png" />
                      
                  </div>
              </Carousel>
           

    </div>
                
    );
}

export default Home;
