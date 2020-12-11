import React from 'react';
import {useParams} from 'react-router-dom';
import UIContainer from 'components/UI/Container/Container';
import Associacao from 'components/produtos/associacao/associacao';


const PagesAssociacao = () => {
    const {} = useParams();

    return (
        
            <UIContainer>
                <Associacao  />
            </UIContainer> 
            
        
    );
};

export default PagesAssociacao;