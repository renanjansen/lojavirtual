import React from 'react';
import '../css/bootstrap.css';
import '../css/Vitrine.css';
import CardProduto from './cardProduto';
import Cabecalho from './cabecalho';
import Rodape from './footer'

import joia1 from '../img/pexels-axecop-2697598.jpg';
import joia2 from '../img/pexels-axecop-2697608.jpg';
import joia3 from '../img/pexels-dima-valkov-3266703.jpg';
import joia4 from '../img/pexels-engin-akyurt-1457801.jpg';
import joia5 from '../img/pexels-jess-bailey-designs-860009.jpg';
import joia6 from '../img/pexels-jill-burrow-6858667.jpg';
import joia7 from '../img/pexels-paula-anne-2498853.jpg';
import joia8 from '../img/pexels-pixabay-265906.jpg';

function Vitrine() {
  return (
    <div className="conteiner-fluid mt-5 pt-3 shadow-lg">
    <Cabecalho />
    <div className="mb-2">
     <CardProduto foto={ joia1 } prodNome="Produto 1" prodDescricao="Lorem ipsum laoreet primis fames ante aliquam imperdiet habitant eu aliquam, adipiscing luctus tortor rhoncus inceptos donec eleifend feugiat." prodPreco="650.00"/>
    </div>
     <div className="mb-2">
      <CardProduto foto={ joia2 } prodNome="Produto 2" prodDescricao="Lorem ipsum laoreet primis fames ante aliquam imperdiet habitant eu aliquam, adipiscing luctus tortor rhoncus inceptos donec eleifend feugiat." prodPreco="800.00"/>
    </div>
    
    <div className="mb-2">
      <CardProduto foto={ joia3 } prodNome="Produto 3" prodDescricao="Lorem ipsum laoreet primis fames ante aliquam imperdiet habitant eu aliquam, adipiscing luctus tortor rhoncus inceptos donec eleifend feugiat." prodPreco="750.00"/>
    </div>
    <div className="mb-2">
      <CardProduto foto={ joia4 } prodNome="Produto 4" prodDescricao="Lorem ipsum laoreet primis fames ante aliquam imperdiet habitant eu aliquam, adipiscing luctus tortor rhoncus inceptos donec eleifend feugiat." prodPreco="450.00"/>
    </div>
    <div className="mb-2">
      <CardProduto foto={ joia5 } prodNome="Produto 5" prodDescricao="Lorem ipsum laoreet primis fames ante aliquam imperdiet habitant eu aliquam, adipiscing luctus tortor rhoncus inceptos donec eleifend feugiat." prodPreco="250.00"/>
    </div>
    <div className="mb-2">
      <CardProduto foto={ joia6 } prodNome="Produto 6" prodDescricao="Lorem ipsum laoreet primis fames ante aliquam imperdiet habitant eu aliquam, adipiscing luctus tortor rhoncus inceptos donec eleifend feugiat." prodPreco="650.00"/>
    </div>
    <div className="mb-2">
      <CardProduto foto={ joia7 } prodNome="Produto 7" prodDescricao="Lorem ipsum laoreet primis fames ante aliquam imperdiet habitant eu aliquam, adipiscing luctus tortor rhoncus inceptos donec eleifend feugiat." prodPreco="670.00"/>
    </div>
    <div className="mb-2">
      <CardProduto foto={ joia8 } prodNome="Produto 8" prodDescricao="Lorem ipsum laoreet primis fames ante aliquam imperdiet habitant eu aliquam, adipiscing luctus tortor rhoncus inceptos donec eleifend feugiat." prodPreco="690.00"/>
    </div>
    
   <Rodape />
    
    
    </div>
  );
}

export default Vitrine ;
