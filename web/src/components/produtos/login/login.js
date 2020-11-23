import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UIButton from 'components/UI/Button/Button';


const initialValue = {
  CPF: '',
  Senha: '',
}

const LoginForm = () => {
  const [values, setValues] = useState(initialValue);
  const history = useHistory();

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

   function onSubmit(ev) {
    ev.preventDefault();

    axios.post('http://localhost:5000/produtoss', values)
      .then((response) => {
        history.push('/');
      });
  }
 
  return (
    <div>
      <h1>LOGIN</h1>

     <form onSubmit={onSubmit}>
        <div className="produtos-form__group">
          <label htmlFor="CPF">CPF</label>
          <input id="CPF" name="CPF" type="text" onChange={onChange} />
        </div>
        <div className="produtos-form__group">
          <label htmlFor="Senha">Senha</label>
          <input id="Senha" name="Senha" type="password"  onChange={onChange} />
        </div>
        <div>
          <button type="submit">Logar</button>
          <UIButton className="btn1"
          component={Link} to={"/cadastro"} theme="contained-green">
          Primeira vez por aqui? Crie uma conta gratuitamente!
                </UIButton>


        </div>
      </form> 
    </div>
  )
};

export default LoginForm;

