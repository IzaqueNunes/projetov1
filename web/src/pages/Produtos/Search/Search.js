import React from 'react';
import ProdutosCard from 'components/produtos/card/card';

const produtos = {
    "id": 1,
    "title": "Queijo Canastra 1000g",
    "price": 84.70,
    "imageUrl": "https://24127.cdn.simplo7.net/static/24127/sku/queijo-queijo-canastra-queijo-da-canastra-tradicional-da-roca-da-cidade--p-1541424752545.jpg",
    "url": "https://www.amazon.com.br/Notebook-Acer-Mochila-A315-41-R790-Mem%C3%B3ria/dp/B07YDWLV7S/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=gatry0b-20&linkId=e4a1146599e36741a720a6a952cbc328&language=pt_BR",
    "comments": [
      {
        "id": 1,
        "comment": "Queijo caseiro excelente!"
      }
    ]
  };

const PagesProdutosSearch = () => {
     return (
        <div
            style={{
                maxWidth: 800,
                margin: '30px auto',
            }}
        >
            <ProdutosCard produtos={produtos} />
        </div>
    ); 
    //return <div>HI</div>
};

export default PagesProdutosSearch;