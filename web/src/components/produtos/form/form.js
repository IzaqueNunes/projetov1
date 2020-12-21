import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './form.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const initialValue = {
  title: '',
  price: 0,
  quantidade: 0,
  imageUrl: '',
  descricao: '',
}
/* 
function uploadIMG (){

  const imgqueijo = document.getElementById("imageUrl");
  imgqueijo = firebase.storage();



}
var firebaseConfig = {
  apiKey: 'AIzaSyAT0cQob-JUv_7L69sVACYBcSa3nlIPYsI',
  authDomain: 'projetoqueijo-f22a6.firebaseapp.com',
  databaseURL: 'https://projetoqueijo-f22a6.firebaseio.com',
  storageBucket: 'projetoqueijo-f22a6.appspot.com'
};
if(!firebase.apps.length){
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);    
  } */


const ProdutosForm = ({ id }) => {
  const [values, setValues] = useState(id ? null: initialValue);
  const history = useHistory();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:4000/Produtos/${id}`)
        .then((response) => {
          setValues(response.data);
        })
    }
  }, []);

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function onSubmit(ev) {
    ev.preventDefault();

    const method = id ? 'put' : 'post';
    const url = id
      ? `http://localhost:4000/Produtos/${id}`
      : 'http://localhost:4000/Produtos'

    axios[method](url, values)
      .then((response) => {
        history.push('/');
      });

  }

  return (
    <div className="App-form">
        <div className="produtos-title">
      <h1 >É QUEIJO UAI</h1>
      <h2 >Cadastrar novo Produto</h2>
      </div>
      {!values
        ? (
          <div>Carregando...</div>
        ) : (
          <form onSubmit={onSubmit} >
            <div className="produtos-form__group">
              <label htmlFor="title">Nome</label>
              <input id="title" name="title" type="text" onChange={onChange} value={values.title}  placeholder="Insira o nome do produto"/>
            </div>
            <div className="produtos-form__group">
              <label htmlFor="price">Preço</label>
              <input id="price" name="price" type="number" onChange={onChange} value={values.price} />
            </div>
            <div className="produtos-form__group">
              <label htmlFor="quantidade">Quantidade</label>
              <input id="quantidade" name="quantidade" type="number" onChange={onChange} value={values.quantidade} />
            </div>
            <div className="produtos-form__group">
              <label htmlFor="imageUrl">Imagem</label>
              <input id="imageUrl" name="imageUrl" type="text" onChange={onChange} value={values.imageUrl} />
            </div>
            <div className="produtos-form__group">
              <label htmlFor="descricao">Descrição</label>
              <textarea id="descricao" name="descricao" type="textarea" onChange={onChange} value={values.descricao} placeholder="Insira a decrição do produto"/>
            </div>
            <div>
              <button  className="produtos-form__group" type="submit">Salvar</button>
              
            </div>
          </form>
        )}
    </div>
  )
};

export default ProdutosForm;