import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import {history} from '../components/history';

import PagesProdutosSearch from './Produtos/Search/Search';
import PagesProdutosForm from './Produtos/Form/Form';
import PagesLoginForm from './Produtos/Login/Login';
import PagesAssociacao from './Produtos/Associacao/Assosiacao';
import PagesRotaQueijo from './Produtos/RotaQueijo/RotaQueijo';
import PagesDesejos from './Produtos/Desejos/Desejos';
import PagesCadastro from './Produtos/Cadastro/Cadastro';
import PagesProduto from './Produtos/Produto/Produto';
import PagesPerfil from './Produtos/Perfil/Perfil';
import NotFound from './Produtos/NotFound/NotFound';

import NavBar from 'components/NavBar';
import PrivateRoute from 'components/PrivateRoute';


const Root = () => {
    return(
        <Router history={history}>
            <NavBar />
            <Switch>
                <PrivateRoute exact  path="/create" component={PagesProdutosForm} />
                <Route exact path="/login" component={PagesLoginForm}/>
                <Route exact path="/associacao" component={PagesAssociacao}/>
                <PrivateRoute exact  path="/edit/:id" component={PagesProdutosForm} />
                <Route exact  path="/rotaqueijo" component={PagesRotaQueijo} />
                <PrivateRoute exact  path="/desejos" component={PagesDesejos} />
                <Route exact  path="/cadastro" component={PagesCadastro} />
                <Route exact  path="/produto/:id" component={PagesProduto} />
                <PrivateRoute exact  path="/perfil" component={PagesPerfil} />
                



                <Route exact path="/" component={PagesProdutosSearch} />
                <Route component={NotFound} />
               
                
            </Switch>
        </Router>
    );

};

export default Root;