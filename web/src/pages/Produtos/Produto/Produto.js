import React from 'react';
import {useParams} from 'react-router-dom';
import UIContainer from 'components/UI/Container/Container';
import Produto from 'components/produtos/produto/produto';


const PagesProduto = () => {
    const { id } = useParams();

    return (
        
            <UIContainer>
                <Produto id={id ? Number.parseInt(id, 10): null} />
            </UIContainer> 
            
        
    );
};

export default PagesProduto;