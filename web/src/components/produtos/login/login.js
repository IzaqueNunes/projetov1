import React from 'react';


const LoginForm = () => {
    return (
        <div>
            <h1>Teste</h1>
        </div>
    )
};

export default LoginForm;

/* import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


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
          <input id="Senha" name="Senha" type="number" onChange={onChange} />
        </div>
        <div>
          <button type="submit">Salvar</button>
        </div>
      </form> 
    </div>
  )
};

export default LoginForm; */

