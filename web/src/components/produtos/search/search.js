import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProdutosList from 'components/produtos/list/list';

import {Link} from 'react-router-dom'; 
import './search.css'

const ProdutosSearch=() =>{

    const [produtos, setProdutos] = useState([]);
    const [search, setSearch] = useState('');

  useEffect(() =>{
    const params={};
    if (search){
      params.title_like = search;
    }
    axios.get('http://localhost:4000/produtos?_embed=comments&_order=desc&_sort=id', {params})
      .then ((response)=> {
        setProdutos(response.data);
      });
  }, [search]);

  return (
      
      <div className="produtos-search">
          <header className="produtos-search__header">
              <h1>Produtos Cadastrados</h1>
              <Link to="/create">Cadastrar um Produto</Link>
          </header>
         <input 
         className="produtos-search__input" 
         type="search" 
         placeholder="Pesquisar por produto"
         value={search}
         onChange={(ev)=> setSearch(ev.target.value)}
         />
        <ProdutosList produtos={produtos} loading={!produtos.length}/>
      </div>
  )
};

export default ProdutosSearch;