import React from 'react';
import ListaProduto from './lista';





function Carrinho (){
  

  return(
    <div className="conteiner">

    <ul className="list-group">
    <li class="list-group-item active text-center" aria-current="true">Carrinho<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
    </svg>
    </li>
    <ListaProduto />
   
    </ul>
   

    
    </div>
    
    );
    
}
export default Carrinho;