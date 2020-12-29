import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './form.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

import { render } from "react-dom";
import { storage } from '../firebase/index.js';
 

const initialValue = {
  title: '',
  price: 0,
  quantidade: 0,
  imageUrl: '',
  descricao: '',
}

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

  const ReactFirebaseFileUpload = () => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
  
    const handleChange = e => {
      if (e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    };
  
    const handleUpload = () => {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              setUrl(url);
            });
        }
      );
    };
  
    console.log("image: ", image);

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
              <div>
        <progress value={progress} max="100" />
        <br />
        <br />
        <input type="file" onChange={handleChange} />
        <button onClick={handleUpload}>Upload</button>
        <br />
        {url}
        <br />
        <img src={url || "http://via.placeholder.com/300"} alt="firebase-image" width="120px" height="120px" />
      </div>
            
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
render(<ReactFirebaseFileUpload />, document.querySelector("#root"));
};


export default ProdutosForm;