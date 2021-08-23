import '../css/bootstrap.css';


function ListaProduto (props){
    
    return(
      <div>
      <li className="list-group-item">
      Nome do Produto:  {props.listProdNome}
      </li>
      <li className="list-group-item">
      Quantidade de Itens: {props.listProdQuantidade}
      </li>
      <li className="list-group-item">
      Preço do Produto: {props.listPrecoProduto}
      </li>
      </div>
      );
  }
  
  export default ListaProduto;