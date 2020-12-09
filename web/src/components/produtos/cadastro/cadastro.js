import React from 'react';
import "./cadastro.css";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import swal from 'sweetalert';



function cadastrar(e) {
  const Email = document.getElementById("Email").value
  const Senha = document.getElementById("Senha").value

  firebase
    .auth()
    .createUserWithEmailAndPassword(Email, Senha)
    .then(()=>{
      swal("Cadastrado com sucesso!")
       .then(()=>{
        setTimeout(()=>{
          window.location.replace('/login')
        },1000)
      })
    })
    .catch((error)=>{
      swal(error.message)
    })
    
    //localStorage.setItem('@Email', Email);

    e.preventDefault();
  
}


const Cadastro = () => {

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
        <div>
            <header className="App-header">
            <form className="App-form" target="_blank" method="get" >
          <label>
        
          <div className="Titulo">
          <h1>Cadastro de Usuários</h1>
          </div>
          {/* <p className="texto">Nome: </p>
          <input type="text" name="nome" placeholder="Insira o nome" className="campos" required/>
            <br></br>
          
          <p className="texto">Email: </p>
          <input type= "text" name="email" id="email" className="campos" placeholder="Insira o seu email" required/>
            <br></br>
          
          <p className="texto">Telefone: </p>
          <input type= "tel" name="tel" className="campos" placeholder="(xx) xxxxx-xxxx" required/>
            <br></br>
          <p className="texto">Endereço: </p>
          <input type= "text" name="end" className="campos" placeholder="Insira um endereço" required/>
            <br></br>
          <p className="texto">Usuário: </p>
          <input type= "text" name="usuario" className="campos" placeholder="Insira um usuário" required/>
            <br></br>
           */}
           <p className="texto">Email: </p>
          <input type= "text" id="Email" className="campos" placeholder="Insira um Email" required/>
            <br></br>
            <p className="texto">Senha:</p>  
          <input type= "password" id="Senha" className="campos" placeholder="Insira uma senha" required/>
            <br></br>
          

         {/*  <p className="texto"> Produtor:</p>
          <input type="radio" name="pessoa" value="produtor" id="produtor"/>
          <p className="texto"> Nome Queijaria:</p>
          <input type= "text"  className="campos" placeholder="Insira o nome da Queijaria"/>


          <p className="texto"> Cliente: </p>
          <input type="radio" name="pessoa" value="cliente" id="cliente"/> */}
         
        <br></br>
            
            <button type="submit" onClick={cadastrar}>Cadastrar</button>
            <input type="reset" className="botao" value="Limpar Campos" />
            
          </label>
        </form>
      </header>
        </div>
        
        
        
    )
};
export default Cadastro;