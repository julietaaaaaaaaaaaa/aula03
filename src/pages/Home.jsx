import { useState, useEffect } from "react";
import ListarProdutos from '../components/ListarProdutos';


export default function Home(){

    const [listaHome, setLista] = useState([]);

    useEffect(() => {
        const ReceberListaProdutos = async () => {
            try {
                const resposta = await fetch('https://fakestoreapi.com/products');

                const dados = await resposta.json();
                
                setLista(dados);
            } catch (erro) {
                console.error("Opssss, bugouuu :D", erro);
            }
        };
        ReceberListaProdutos();
    }, []);

    const orderAZ = () => {
    const listaAux = [...listaHome].sort((a, b)=> a.title.localeCompare(b.title));
    setLista(listaAux);
}

const orderZA = () => {
    const listaAux = [...listaHome].sort((a, b) => b.title.localeCompare(a.title)); // Ordenação de Z a A
    setLista(listaAux);
};
//menor para o maior
const precoOrdenadoMenor = () => {
    const filtro = [...listaHome].sort((a, b)  => a.price - b.price);
    setLista(filtro);
}
//maior para o menor
const precoOrdenadoMaior = () => {
    const filtro = [...listaHome].sort((a, b)  => b.price - a.price);
    setLista(filtro);
}
 const PesquisarProduto =(valor)=>{
    const listaAux = listaHome.filter((produto) =>
    produto.title.toLowerCase().includes(valor.toLowerCase())
);
setLista(listaAux);

 }
    return (
        <>
        <h1>Lista de produtos</h1>
        <button onClick={()=>orderAZ()}>Az</button>
        <button onClick={()=>orderZA()}>Za</button>
        <button onClick={()=>precoOrdenadoMenor()}>Menor</button>
        <button onClick={()=>precoOrdenadoMaior()}>Maior</button>
        <input className="pesquisa"placeholder="Pesquisar..." onChange={(item)=> PesquisarProduto(event.target.value)}/>

        <ListarProdutos lista ={listaHome}/>
        </>
    )

}


