import React, { useState, useEffect } from 'react';
import * as FaIcon from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import axios from 'axios';
import ProdutosList from 'components/produtos/list/list';
import UIButton from 'components/UI/Button/Button';

import NavBar from 'components/NavBar';

import { Link } from 'react-router-dom';
import './search.css'
import useApi from 'components/utils/useApi';

const baseParams = {
  _embed: 'comments',
  _order: 'desc',
  _sort: 'id',
  _limit: 5,
};

const ProdutosSearch = () => {

  const [produtos, setProdutos] = useState([]);
  const [search, setSearch] = useState('');
  const [load, loadInfo] = useApi({
    debounceDelay: 300,
    url: '/produtos',
    method: 'get',
  })

  useEffect(() => {
    const params = {};
    if (search) {
      params.title_like = search;
    }
    axios.get('http://localhost:4000/produtos?_embed=comments&_order=desc&_sort=id', { params })
      .then((response) => {
        setProdutos(response.data);
      });
  }, [search]);


  return (

    <div className="produtos-search">
      <header className="produtos-search__header">
      <div className="titles">
        <h1>Produtos Cadastrados</h1>
        <UIButton className="btn"
          component={Link} to={"/login"} theme="contained-green">
          Fazer Login
                </UIButton>

        <UIButton className="btn1"
          component={Link} to={"/create"} theme="contained-green">
          Cadastrar um Produto
                </UIButton>
                </div>

      </header>
      <input
        className="produtos-search__input"
        type="search"
        placeholder="Pesquisar por produto"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
      <ProdutosList
        produtos={produtos}
        loading={!produtos.length}
        refetch={() => {
          load({
            params: baseParams
          })
        }}
      />
    </div>
  )
};

export default ProdutosSearch;