import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NFT Platform</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Buy my NFT
        </h1>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
          <Image src="/images/speaker1.webp" alt="NFT" width={400} height={400} />
            <p>A good piece very expensive</p>
          </a>
        </div>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
          <Image src="/images/speaker2.webp" alt="NFT" width={400} height={400} />
            <p>A good piece very expensive</p>
          </a>
        </div>
      </main>
    </div>
  )
}
