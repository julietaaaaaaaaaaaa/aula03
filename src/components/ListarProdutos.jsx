import styles from '../styles/listaProdutos.module.css'

export default function Lista({ lista }) {
    return (
        <div >
            <h1 className={styles.h1}>Lista de produtos</h1>
            <ul className={styles.blocolista}>
                {lista.map(produto => (
                    <li className={styles.card} key={produto.id}>
                        <h2 className={styles.h2}>{produto.title}</h2>
                        <p className={styles.preço}>Preço: R${produto.price}</p>
                        <img src={produto.image} alt={produto.title} width={100} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
