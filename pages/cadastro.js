import Head from 'next/head';

import Menu from '../components/Menu';

import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';


function Cadastro() {
    return (
        <div>
            <Head>
                <title>Patinha Solidária</title>
                <meta name='description' content='Site de ... sobre ...' />
                <meta name='author' />
            </Head>
            <Menu />
            


            <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Cadastro</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
             <a href="/login">Já tenho conta</a>
          </p>
        </div>
      </form>
    </div>
        
              

    </div>
                
    );
}

export default Cadastro;