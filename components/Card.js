import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Card.module.css"

export default function Card({pokemon}){
    return (
        <div className={styles.card}>
            <p>
                <Image 
                src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} 
                width='120' height='120'/>
            </p>

                <p className={styles.id}>#{pokemon.id}</p>
                <h3 className={styles.name}>{pokemon.name}</h3>
            <Link className={styles.idsemdetalhe} href={`/pokemons/${pokemon.id}`}>
                <p className={styles.detalhes}>
                    Detalhes
                </p>
            </Link>

        </div>
    )
}