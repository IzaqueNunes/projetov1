import React from 'react';
import './card.css';
import {Link} from "react-router-dom";

const ProdutosCard = ({ produtos }) => (
  <div className="produtos-card">
    <img src={produtos.imageUrl} alt={produtos.title} className="produtos-card__image" />
    <div className="produtos-card__info">
      <h1 className="produtos-card__title">{produtos.title}</h1>
      <span className="produtos-card__price">R$ {produtos.price}</span>
      <footer className="produtos-card__footer">
      {produtos.comments.length > 0 && (
          <div className="produtos-card__comment">"{produtos.comments[0].comment}"</div>
        )}

        <div className="produtos-card__comments-count">
          {produtos.comments.length}{' '}
          {produtos.comments.length > 1 ? 'Comentários' : 'Comentário'}
        </div>

        <a
          href={produtos.url}
          target="_blank"
          rel="noopener noreferrer"
          className="produtos-card__link"
        >
          IR PARA O PRODUTO
       
        </a>
        <div className="produtos-card__editar">
        <Link to={`/edit/${produtos.id}`}>Editar</Link>
        </div>
       
         
      </footer>
    </div>
  </div>
);

export default ProdutosCard;
