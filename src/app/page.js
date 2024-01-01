import Image from 'next/image'
import styles from './page.module.css'
import { SiShazam } from "react-icons/si";
import { IoSearch } from "react-icons/io5";

export default function Home() {
  return (
    <main className={styles.main}>
      <p>Tap to Shazam</p>
      <SiShazam className={styles.icon} />
      <span className={styles.search}><IoSearch/></span>
    </main>
  )
}
