import React from 'react';
import './card.css';
import {Link} from "react-router-dom";
import {BiTrash} from 'react-icons/bi';
import {GrFavorite} from 'react-icons/gr';
import UIButton from 'components/UI/Button/Button';
import {isLogged} from 'components/utils/auth';
import swal from 'sweetalert';
import ReactStars from "react-rating-stars-component";
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

const ratingChanged = (newRating) =>{
  console.log(newRating);
}


const ProdutosCard = ({ produtos, onClickDelete }) => (
 

  <div className="produtos-card">
    
    <img src={produtos.imageUrl} alt={produtos.title} className="produtos-card__image" />
    <div className="produtos-card__info">
      <h1 className="produtos-card__title" id="titulo">{produtos.title}</h1>
      <span className="produtos-card__price" >R$ {produtos.price}</span>
      <br></br>
      <span className='avaliacao'>Avaliação<ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
          /></span>
      <footer className="produtos-card__footer">
          
      
     
     
        
        <div className="btn-card">
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

        <div className="favorite" >
      
          Favoritar
        </div>
        
        
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
