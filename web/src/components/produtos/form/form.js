import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import './form.css'
import axios from 'axios';

const initialValue={
    title: '',
    quantidade: 0,
    ImageUrl:'',
    price:0,
    descricao:''
}
const ProdutosForm= ()=>{
    
    const [values, setValues] = useState(initialValue);
    const history = useHistory ();


    function onChange(ev){
        const {name, value} = ev.target;
        console.log(values);
        setValues({...values, [name]: value});
    }

    function onSubmit(ev){
        ev.preventDefault();

        axios.post('http://localhost:4000/produtos', values)
        .then ((response)=>{
            history.push('/');
        });
    }

    return(
        <div>
            <h1>É QUEIJO UAI</h1>
            <h2>Cadastrar novo Produto</h2>
        

            <form onSubmit={onSubmit}>
                <div className="prudots-form__group">
                    <label htmlFor="title">Título</label>
                    <input id="title" name="title" type="text" onChange={onChange}/>
                </div>

                <div className="prudots-form__group">
                    <label htmlFor="quantidade">Quantidade</label>
                    <input id="quantidade" name="quantidade" type="number" onChange={onChange}/>
                </div>

                <div className="prudots-form__group">
                    <label htmlFor="imageUrl">Imagem</label>
                    <input id="imageUrl" name="imageUrl" type="text" onChange={onChange}/>
                </div>

                <div className="prudots-form__group">
                    <label htmlFor="price">Preço</label>
                    <input id="price" name="price" type="number" onChange={onChange}/>
                </div>

                <div className="prudots-form__group">
                    <label htmlFor="descricao">Descrição</label>
                    <textarea id="descricao" name="descricao" type="number" onChange={onChange}/>
                </div>

                <div>
                    <button type="submit">Salvar</button>
                </div>
            </form>
        </div>
    )

};

export default ProdutosForm;