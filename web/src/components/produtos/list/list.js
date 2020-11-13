import React from 'react';
import ProdutosCard from 'components/produtos/card/card';
import './list.css';


const ProdutosList = ({loading, produtos}) =>{
    if (loading){
        return <div>Carregando...</div>
    }

    return (
        <div className='produtos-list'>
            {produtos.map((produtos =>
                <ProdutosCard produtos={produtos}/>
                ))}
        </div>
    );

}

export default ProdutosList;