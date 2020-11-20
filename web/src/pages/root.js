import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import PagesProdutosSearch from './Produtos/Search/Search';
import PagesProdutosForm from './Produtos/Form/Form';
import PagesLoginForm from './Produtos/Login/Login';

import NavBar from 'components/NavBar';


const Root = () => {
    return(
        <Router>
            <NavBar />
            <Switch>
                <Route path="/create" component={PagesProdutosForm} />
                <Route path="/edit/:id" component={PagesProdutosForm} />
                <Route path="/" component={PagesProdutosSearch} />
                <Route path="/login" component={PagesLoginForm}/>
                
            </Switch>
        </Router>
    );

};

export default Root;