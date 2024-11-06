import styles from '../styles/listaProdutos.module.css'
import Loading from './Loading';

export default function Lista({ lista }) {

    if(lista.length === 0){
return <Loading/>
    }
    return (
        <div >
            <h1 className={styles.h1}>Lista de produtos</h1>
            <ul className={styles.blocolista}>
                {lista.map(produto => (
                    <li className={styles.card} key={produto.id}>
                        <h2 className={styles.h2}>{produto.title}</h2>
                        <img src={produto.image} alt={produto.title} width={100} />
                        <p className={styles.h2}>{produto.description}</p>
                        <p className={styles.preço}>Preço: R${produto.price}</p>
                        <p className={styles.h2}>{produto.category}</p>
                        <p className={styles.h2}>{produto.rating.rate}</p>
                        <p className={styles.h2}>{produto.rating.count}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
