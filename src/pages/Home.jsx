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
    return (
        <>
        <ListarProdutos lista ={listaHome}/>
        </>
    )

}


