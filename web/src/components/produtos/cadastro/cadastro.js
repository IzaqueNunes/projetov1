import React from 'react';
import "./cadastro.css";
import swal from 'sweetalert';



/* function cadastro() {
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
  
} */

const Cadastro = () => {
    return (
        <div>
            <header className="App-header">
            <form className="App-form" target="_blank" method="get" >
          <label>
        
          <div className="Titulo">
          <h1>Cadastro de Usuários</h1>
          </div>
          <p className="texto">Nome: </p>
          <input type="text" name="nome" placeholder="Insira o nome" className="campos" required/>
            <br></br>
          
          <p className="texto">Email: </p>
          <input type= "email" name="email" className="campos" placeholder="Insira o seu email" required/>
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
          <p className="texto">Senha:</p>  
          <input type= "password" name="tel" className="campos" placeholder="Insira uma senha" required/>
            <br></br>
          <p className="texto">CPF: </p>
          <input type= "number" name="cpf" className="campos" placeholder="Insira um CPF" required/>
            <br></br>

          <p className="texto"> Produtor:</p>
          <input type="radio" name="pessoa" value="produtor" id="produtor"/>
          <p className="texto"> Nome Queijaria:</p>
          <input type= "text"  className="campos" placeholder="Insira o nome da Queijaria"/>


          <p className="texto"> Cliente: </p>
          <input type="radio" name="pessoa" value="cliente" id="cliente"/>
         
        <br></br>
            <button type="submit" >Cadastrar</button>
            <input type="reset" className="botao" value="Limpar Campos" />
          </label>
        </form>
      </header>
        </div>
        
        
        
    )
};
export default Cadastro;