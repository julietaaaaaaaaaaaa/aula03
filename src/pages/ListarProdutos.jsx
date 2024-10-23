export default function Lista({ lista }) {
    return (
        <div>
            <h1>Lista de produtos</h1>
            <ul>
                {lista.map(produto => (
                    <li key={produto.id}>
                        <h2>{produto.title}</h2>
                        <p>Preço: R${produto.price}</p>
                        <img src={produto.image} alt={produto.title} width={100} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
