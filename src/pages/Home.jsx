import { useState, useEffect } from "react";
import ListarProdutos from '../components/ListarProdutos';
import Loading from "../components/Loading";

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
    const listaAux = [...lista].sort((a, b)=> a.title.localeCompare(b.title));
    setLista(listaAux);
}
    const orderZA = () => {
    const listaAux = [...lista].sort((a, b)=> a.title.localeCompare(b.title));
    setLista(listaAux);
}
    return (
        <>
        <h1>Lista de produtos</h1>
        <button onClick={()=>orderAZ()}>Az</button>
        <button on onClick={()=>orderZA}>Za</button>

        <ListarProdutos lista ={listaHome}/>
        </>
    )

}


