import React, { useState, useCallback } from 'react';
import swal from 'sweetalert';
import { useHistory, withRouter } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import UIButton from 'components/UI/Button/Button';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';



/* const initialValue = {
  CPF: 'izaquedione@gmail.com',
  Senha: '123456',
};
 */


function login() {
  const CPF = document.getElementById("CPF").value
  const Senha = document.getElementById("Senha").value

  firebase
    .auth()
    .signInWithEmailAndPassword(CPF, Senha)
    .then(()=>{
      swal("Logado com sucesso!")
      .then(()=>{
        setTimeout(()=>{
          window.location.replace('/produtos')
        },1000)
      })
    })
    .catch((error)=>{
      swal(error.message)
    })
  
}




const LoginForm = () => {

  /* const login = useCallback( async (ev) => {
    //ev.prevDefault();
    const { CPF, Senha } = ev.target.elements;
    try {
      await firebase 
      .auth()
      .signInWithEmailAndPassword(CPF.value, Senha.value);
      history.push("/produtos");
    } catch (error) {
      alert(error);
      //setError(true);
    }
  }, []);
 */




  var firebaseConfig = {
    apiKey: "AIzaSyAT0cQob-JUv_7L69sVACYBcSa3nlIPYsI",
    authDomain: "projetoqueijo-f22a6.firebaseapp.com",
    databaseURL: "https://projetoqueijo-f22a6.firebaseio.com",
    projectId: "projetoqueijo-f22a6",
    storageBucket: "projetoqueijo-f22a6.appspot.com",
    messagingSenderId: "433812826245",
    appId: "1:433812826245:web:cf22d9db0c26646f9f21ec",
    measurementId: "G-DY6L14HNDT"
  };
  
  if(!firebase.apps.length){
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);    
  }
 
  return (
    <div className="App-form">
      <h1>LOGIN</h1>

     <form className="App-form">
        <div className="produtos-form__group">
          <label htmlFor="CPF">CPF</label>
          <input id="CPF" name="CPF" type="text" />
        </div>
        <div className="produtos-form__group">
          <label htmlFor="Senha">Senha</label>
          <input id="Senha" name="Senha" type="password" />
        </div>
        
      </form> 
      <div className="App-form">
          <button type="submit" onClick={login}>Logar</button> <br></br>
          <UIButton className="btn1"
          component={Link} to={"/cadastro"} theme="contained-green">
          Primeira vez por aqui? Crie uma conta gratuitamente!
                </UIButton>


        </div>
    </div>
    
  )


};

export default LoginForm;