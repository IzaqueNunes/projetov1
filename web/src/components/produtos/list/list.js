import React from 'react';
import ProdutosCard from 'components/produtos/card/card';
import useApi from 'components/utils/useApi';
import './list.css';




const ProdutosList = ({loading, produtos, refetch}) =>{
    const [deleteProduto, deleteProdutoInfo] = useApi({
        method: 'DELETE',
    });

    

    if (produtos === null || deleteProdutoInfo.loading){
        return <div>Carregando...</div>
    }

    return (
        <div className='produtos-list'>
            {produtos.map((produtos =>
                <ProdutosCard produtos={produtos}
                onClickDelete={async ()=> {
                    await deleteProduto({
                        url:`/produtos/${produtos.id}`
                    });
                    refetch();
                }}
                />
                ))}
        </div>
    );

}

export default ProdutosList;