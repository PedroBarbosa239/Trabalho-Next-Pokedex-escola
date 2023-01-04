import Card from "../components/Card"
import styles from "../styles/Pokemonpage.module.css"

export default function Pokemons({pokemons}) {
    return (
      <>
          <section className={styles.pokemons}>
          <div className={styles.title_container}>
               <h2 className={styles.title}>Biblioteca de Pokemons</h2>
           </div>

            <div  className={styles.pokemon_container}>
                {
                  pokemons.map((pokemon) => (
                   <Card key={pokemon.id} pokemon={pokemon}/>
                  ))
                }
            </div>
          </section>
      </>
    )
  }
  
  export async function getStaticProps() {
    const maxpokemons = 250
    const api = 'https://pokeapi.co/api/v2/pokemon/'

    const res = await fetch(`${api}/?limit=${maxpokemons}`)
    const data = await res.json()

    //indice do pokemon 
    data.results.forEach((item, index) => {
        item.id = index + 1
    })

    return {
        props: {pokemons: data.results,},
    }
  }