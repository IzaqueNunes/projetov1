import React from 'react';
import './card.css';
import {Link} from "react-router-dom";
import {BiTrash} from 'react-icons/bi';
import UIButton from 'components/UI/Button/Button';

const ProdutosCard = ({ produtos, onClickDelete }) => (
  <div className="produtos-card">
    <img src={produtos.imageUrl} alt={produtos.title} className="produtos-card__image" />
    <div className="produtos-card__info">
      <h1 className="produtos-card__title">{produtos.title}</h1>
      <span className="produtos-card__price">R$ {produtos.price}</span>
      <footer className="produtos-card__footer">
      {produtos.comments.length > 0 && (
          <div className="produtos-card__comment">"{produtos.comments[0].comment}"</div>
        )}

        <button
          className="produtos-card__comments-count">
          {produtos.comments.length}{' '}
          {produtos.comments.length > 1 ? 'Comentários' : 'Avaliações'}
        </button>

        <UIButton
          component="a"
          href={produtos.url}
          target="_blank"
          rel="noopener noreferrer"
        >
      
          Ver Produto
        </UIButton>
       
        <UIButton
          component={Link}
          to={`/edit/${produtos.id}`}
          className="produtos-card__editar"
        >Editar</UIButton>
        
        
        
       
         
      </footer>
      <button 
        type="button" 
        className="produtos-card__delete-button" 
        onClick={onClickDelete}>
        <BiTrash/>
      </button>
    </div>
  </div>
);

export default ProdutosCard;
