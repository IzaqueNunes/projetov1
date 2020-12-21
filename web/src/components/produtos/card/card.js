import React, {useState} from 'react';
import './card.css';
import {Link, Redirect} from "react-router-dom";
import {BiTrash} from 'react-icons/bi';
import UIButton from 'components/UI/Button/Button';
import {isLogged} from 'components/utils/auth';
import swal from 'sweetalert';
import {Rating} from '@material-ui/lab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import 'components/produtos/list/list.js';

const verproduto = (produtos)=> {
  localStorage.setItem('@titulo', produtos.title);
  localStorage.setItem('@preco', produtos.price);
  localStorage.setItem('@descricao', produtos.descricao);
  localStorage.setItem('@img', produtos.imageUrl);
  localStorage.setItem('@quantidade', produtos.quantidade);
  
}

  const logado = (onClickDelete) => isLogged() 
    ?onClickDelete() 
    :swal("Faça login para executar esta ação.")



const ProdutosCard = ({ produtos, onClickDelete }) => (
 
  
  <div className="produtos-card">
    
    <img src={produtos.imageUrl} alt={produtos.title} className="produtos-card__image" />
    <div className="produtos-card__info">
      <h1 className="produtos-card__title" id="titulo">{produtos.title}</h1>
      <span className="produtos-card__price" >R$ {produtos.price}</span>
      <footer className="produtos-card__footer">
      {produtos.comments.length > 0 && (
          <div className="produtos-card__comment">"{produtos.comments[0].comment}"</div>
        )}
        <button
          className="produtos-card__comments-count">
          {produtos.comments.length}{' '}
          {produtos.comments.length > 1 ? 'Comentários' : 'Avaliações'}
        </button>
        <div className="btn-card">
        <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          /* value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }} */
        />
      </Box>
        <UIButton
          component={Link}
          to={`/produto/${produtos.id}`}
        onClick={()=>verproduto(produtos)}>
          Ver Produto
        </UIButton>
        <UIButton
          component={Link}
          to={`/edit/${produtos.id}`}
          className="btn-card__edit"
        >Editar</UIButton>
        </div>
      </footer>
      <button 
        type="button" 
        className="produtos-card__delete-button" 
        onClick={()=>logado(onClickDelete)}>
        <BiTrash/>
      </button>
    </div>
  </div>
);

export default ProdutosCard;
