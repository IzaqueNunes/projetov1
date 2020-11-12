import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProdutosCard from 'components/produtos/card/card';
import {Link} from 'react-router-dom'; 
import './search.css'

const ProdutosSearch=() =>{

    const [produtos, setProdutos] = useState([]);

  useEffect(() =>{
    axios.get('http://localhost:4000/produtos?_embed=comments')
      .then ((response)=> {
        setProdutos(response.data);
      });
  }, []);

  return (
      
      <div className="produtos-search">
          <header className="produtos-search__header">
              <h1>Produtos Cadastrasdos</h1>
              <Link to="/create">Cadastrar um Produto</Link>
          </header>
          <section className="produtos-search__input">
            <input type="search"/>
          </section>
        {produtos.map((produtos)=> (
            <ProdutosCard produtos={produtos}/>
        ))}
      </div>
  )
};

export default ProdutosSearch;