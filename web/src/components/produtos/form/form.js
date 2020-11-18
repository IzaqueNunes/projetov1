import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import './form.css'
import axios from 'axios';

const initialValue={
    title: '',
    quantidade: 0,
    image:'',
    price:0,
    descricao:''
}
const ProdutosForm= ({id})=>{
    
    const [values, setValues] = useState(id ? null: initialValue);
    const history = useHistory ();
    

    useEffect(()=>{
        if(id){
            axios.get(`http://localhost:4000/produtos/${id}`)
                .then((response)=>{
                
                setValues(response.data);
                
            })
        }


    }, []);


    function onChange(ev){
        const {name, value} = ev.target;
        setValues({...values, [name]: value});
    }

    function onSubmit(ev){
        ev.preventDefault();

        const method = id ? 'put' : 'post'; 
        const url = id  
            ? `http://localhost:4000/produtos/${id}`
            : 'http://localhost:4000/produtos'


        axios[method](url, values)
        .then ((response)=>{
            history.push('/');
        });
    }

    if (!values){
        return <div>Carregando...</div>
    }

    return(
        <div className="produtos-title">
            <h1>É QUEIJO UAI</h1>
            <h2>Cadastrar novo Produto</h2>
        

            <form onSubmit={onSubmit}>
                <div className="produtos-form__group">
                    <label htmlFor="title">Título</label>
                    <input id="title" name="title" type="text" onChange={onChange} value={values.title}/>
                </div>

                <div className="produtos-form__group">
                    <label htmlFor="quantidade">Quantidade</label>
                    <input id="quantidade" name="quantidade" type="number" onChange={onChange} value={values.quantidade}/>
                </div>

                <div className="produtos-form__group">
                    <label htmlFor="image">Imagem</label>
                    <input id="image" name="image" type="file" onChange={onChange} value={values.image}/>
                </div>

                <div className="produtos-form__group">
                    <label htmlFor="price">Preço</label>
                    <input id="price" name="price" type="number" onChange={onChange} value={values.price}/>
                </div>

                <div className="produtos-form__group">
                    <label htmlFor="descricao">Descrição</label>
                    <textarea id="descricao" name="descricao" type="number" onChange={onChange} value={values.descricao}/>
                </div>

                <div>
                    <button type="submit">Salvar</button>
                </div> 
            </form>
        </div>
    )

};

export default ProdutosForm;