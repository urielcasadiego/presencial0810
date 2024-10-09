import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.page}>
		<h3>Ejercicio Presencial - 08/10/2024</h3>
      <main className={styles.main}>
        <ol>
          <li>
			<Link href="/ejercicio1" passHref>
				Ejercicio 1: Actualización del título de la página
			</Link>
          </li>
          <li>
		  	<Link href="/ejercicio2" passHref>
			  	Ejercicio 2: Consumiendo una API con useEffect
			</Link>
		  </li>
		  <li>
		  	<Link href="/ejercicio3" passHref>
			  	Ejercicio 3: Temporizador con useEffect
			</Link>
		  </li>
		  <li>
		  	<Link href="/ejercicio4" passHref>
			  Ejercicio 4: Desactivar efecto condicionalmente
			</Link>
		  </li>
        </ol>

        <div className={styles.ctas}>
        </div>
      </main>
      <footer className={styles.footer}>
		<h5>Ejercicio Presencial - Uriel Casadiego - 72145696</h5>
      </footer>
    </div>
  );
}
