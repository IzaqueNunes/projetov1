import React from 'react';





const Produto = () => {
  const titulo = localStorage.getItem('@titulo');
    return (
        <div>
            <h1>{`Produto ${titulo}`}</h1>
            <p></p></div>
        
    )
};

export default Produto;