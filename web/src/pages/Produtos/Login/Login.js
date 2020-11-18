import React from 'react';
//import { useParams } from 'react-router-dom';
import LoginForm from 'components/produtos/login/login';
import UIContainer from 'components/UI/Container/Container';

const PagesLoginForm = () => {
  //const { } = useParams();

  return (
    <div>
        <UIContainer>
            <LoginForm  />
        </UIContainer>
        
    </div>
  );
};

export default PagesLoginForm;
