import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProdutosList from 'components/produtos/list/list';
import UIButton from 'components/UI/Button/Button';

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
        <header className="menu-header">
      <table>
         <tr> <td><img src="https://pt.freelogodesign.org/Content/img/logo-samples/flooop.png" alt="Logo" /></td>
        
         

        <td> <a href=""> <button className="btn"> Home</button></a></td>
        <td> <a href=""> <button className="btn"> História da Associação</button></a></td>
        <td> <a href=""> <button className="btn"> Rota do Queijo</button></a></td>
        <td> <a href=""> <button className="btn"> Produtores</button></a></td>
        <td> <a href=""> <button className="btn"> Lista de Desejos</button></a></td>
        <td> <a href=""> <button className="btn"> Cadastrar Produtos</button></a></td>
        <td> <a href=""> <button className="btn"> Login</button></a></td>
        <td> <a href=""> <button className="btn"> Sair</button></a></td>
        

        <td> <a href="https://pt-br.facebook.com/queijoartesanaldaserrageral">
        <img src="https://i.pinimg.com/originals/57/98/53/5798533bb3f2a08ee3514f9c6f6e03be.png" alt="Facebook" className="redes" title="Facebook"/>
        </a></td>

        <td> <a href="https://www.instagram.com/queijoartesanaldaserrageral?igshid=1qr782a69ojt0">
        <img src="https://mairacuryteam.com.br/wp-content/uploads/2019/05/logo-instagram-png-fundo-transparente13-1-1024x1024.png" alt="Instagram"  className="redesInsta" title="Instagram"/>
        </a></td>
         </tr>
              

       </table>
       </header>
        <h1>Produtos Cadastrados</h1>
        <UIButton
          component={Link} to={"/login"} theme="contained-green">
          Fazer Login
                </UIButton>

        <UIButton
          component={Link} to={"/create"} theme="contained-green">
          Cadastrar um Produto
                </UIButton>

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