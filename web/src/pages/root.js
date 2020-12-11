import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import PagesProdutosSearch from './Produtos/Search/Search';
import PagesProdutosForm from './Produtos/Form/Form';
import PagesLoginForm from './Produtos/Login/Login';
import PagesAssociacao from './Produtos/Associacao/Assosiacao';
import PagesRotaQueijo from './Produtos/RotaQueijo/RotaQueijo';
import PagesDesejos from './Produtos/Desejos/Desejos';
import PagesCadastro from './Produtos/Cadastro/Cadastro';
import PagesProduto from './Produtos/Produto/Produto';
import PagesPerfil from './Produtos/Perfil/Perfil';

import NavBar from 'components/NavBar';


const Root = () => {
    return(
        <Router>
            <NavBar />
            <Switch>
                <Route path="/create" component={PagesProdutosForm} />
                <Route path="/login" component={PagesLoginForm}/>
                <Route path="/associacao" component={PagesAssociacao}/>
                <Route path="/edit/:id" component={PagesProdutosForm} />
                <Route path="/rotaqueijo" component={PagesRotaQueijo} />
                <Route path="/desejos" component={PagesDesejos} />
                <Route path="/cadastro" component={PagesCadastro} />
                <Route path="/produto" component={PagesProduto} />
                <Route path="/perfil" component={PagesPerfil} />



                <Route path="/" component={PagesProdutosSearch} />
               
                
            </Switch>
        </Router>
    );

};

export default Root;