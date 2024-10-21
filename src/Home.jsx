import { useState } from "react"

export default Home){
    const [lista, setLista] = useState();

useEffect(()=> {

const ReceberLIstaProdutos = async () => {
try{
const resposta = await fetch ('https://fakestoreapi.com/products');
const dados = await resposta.json();
            setLista(dados);
        }catch(erro){
            console.error("Opssss, bugouuu :D")
        }
       }
ReceberLIstaProdutos();
 },[]);

 return 
 <>
 <h1>Lista de produtos</h1>
 <ul>
 {lista.map(produto =>(
    <li key={produto.id}>
    <h2>{produto.title}</h2>
    <p>Preço: R${produto.price}</p>
    <img src={produto.image} alt={produto.title} width={100}/>
    </li>
 ))}
 </ul>
 </>
)
}