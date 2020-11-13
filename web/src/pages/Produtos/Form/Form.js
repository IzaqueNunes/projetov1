import React from 'react';
import {useParams} from 'react-router-dom';
import ProdutosForm from 'components/produtos/form/form';
import UIContainer from 'components/UI/Container/Container';


const PagesProdutosForm = () => {
    const { id } = useParams();
    return (
        
            <UIContainer>
                <ProdutosForm />
            </UIContainer> 
            
        
    );
};

export default PagesProdutosForm;