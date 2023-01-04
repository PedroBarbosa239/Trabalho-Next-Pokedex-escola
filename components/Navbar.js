import Image from "next/image"
import styles from "../styles/Navbar.module.css"
import Link from "next/link"


export default function Navbar(){
    return (
        <>
            <section className={styles.container}>   
                <div className={styles.position_image}>
                   <Image src="/images/rai.png" 
                   width="50" height="50" className={styles.image}/>
                </div>

              <div className={styles.container_logo}>
                     <p className={styles.logo}>
                           pokedex
                      </p>
              </div>

                
                    <ul className={styles.navegacao}>
                       <li  className={styles.active}>
                           <Link href="/" className={styles.linkhome}> Home </Link>
                       </li>
                   
                       <li>
                           <Link href="/sobre" className={styles.link}>Sobre</Link>
                       </li>
                    </ul>
                  
            </section>
        </>
    )
}
