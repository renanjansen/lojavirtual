import '../css/bootstrap.css';
import '../css/cardProduto.css';
import React, {useState} from "react";
import ListaProduto from './lista';
import { AiOutlineShoppingCart} from 'react-icons/ai';
import {FaWindowClose} from 'react-icons/fa';





function CardProduto (props) {
 
 
const [quantidade, setQuantidade] = useState(0);
 


function addQuantidade() {
  
  setQuantidade(
    quantidade+1
    );
  
};

function removerQuantidade(){
  
  setQuantidade(
    quantidade-1
    )
  
};

// criei o state para receber os detalhes da compra
const [prod, setProd] = useState([]);

function addCarrinho () {
  
  //trasformei o objeto prod em array(produto) para que o push funcione
  const produto = Array.from(prod);
  
  produto.push(
    { 
      "nomeDoProduto":props.prodNome, 
      "quantidadeDoProduto":quantidade,
      "preçoDoProduto":props.prodPreco*quantidade
    }
);
  
  
 setProd(produto)
 
 

 };

//funcao adciona o state do prod a ListaProduto
function Lista() {
    
     const listaItem = prod.map((produto) =>
      <div>
      <li key={produto.toString()} className="list-group-item">
      <ListaProduto 
      listProdNome={produto.nomeDoProduto}
      listProdQuantidade={produto.quantidadeDoProduto}
      listPrecoProduto={produto.preçoDoProduto}
      />
       </li>

      </div>
     
      
     
      
      );
        return (
          <ul>
            {listaItem}
          </ul>
          );
        
      
  }




//funções que disparam avisos para exibir ou nao o carrinho
const [ carrinho, setCarrinho ] = useState(false);

function exibeCarrinho(carrinho){
  setCarrinho(
    carrinho = true

)
   }
function escondeCarrinho(carrinho){
  setCarrinho(
    carrinho = false
    )
   
  

}
var list = "";
var close = "";
//______________________________________________

//condicional que exibe a lista de compras
if (carrinho) {
 close = <button
 type="button" 
 className="btn btn-dark btn-sm" 
 onClick={escondeCarrinho} > 
 <FaWindowClose />
 </button>
 
 list = <Lista />
}





 


 return (
    
    
    <div className="container-fluid">
    <div className="card shadow-lg">
    
    { /* foto do produto */}
    <img src={props.foto} alt="foto do produto"/>
    { /* foto do produto */}
    
    <h5 className="nomeProduto text-center pt-2"><b>{props.prodNome}</b></h5>
    <div className='container text-center'>
    
    <p><b>Descrição: </b></p>
    <p>{props.prodDescricao} </p>
    
    <h3><b>Preço: </b></h3>
    <p>R$: {props.prodPreco} </p>
    
    </div>
    <p className="quantidade"><b>Quantidade:</b></p>
    
    { /* controles cartão Produto */}
    <div className="input-group mb-3 container">
    
    
    <button className="btn btn-outline-secondary" type="button" onClick={removerQuantidade} >-</button>
    
    <button className="btn btn-outline-secondary" type="button" onClick={addQuantidade} >+</button>
    
    <input type="number" min="0" max="20" className="form-control" placeholder="" aria-label="Example text with two button addons" value={quantidade}/>
    
    <button type="button"
    className="btn btn-warning"
    onClick= {addCarrinho}
    >
    Adicionar ao carrinho
    </button>
   

    
    <div className="container">
    <button 
      type="button" 
      className="btn btn-danger mt-5 bottom-0 start-50 translate-middle-x btn-block"
      onClick={exibeCarrinho}
      
    >
      <AiOutlineShoppingCart 
      onClick={exibeCarrinho}/>
    Exibir  carrinho
    </button>
    </div>
    
   
    
    
    { /* controles cartão Produto */}

 
  

  
    
    

    
     
      
     
    </div>
     
   <div>
     
   
     
   </div>
    {close}
    {list}
    </div>

    </div>
    );
    
    
    
  }
  
  


export default CardProduto;