import Head from 'next/head'
import Header from '../components/Header-exemple'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home(initialTodos) {
  return (
    <div className={styles.container}>
      <Header/>

      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

      <iframe src="https://airtable.com/embed/shrMvRsBT0jLe52o8?backgroundColor=blue" frameborder="0" onmousewheel=""></iframe>

        <h1 className={styles.title}>
          Bienvenue sur <a href="#">Air-Next</a>
        </h1>
        <h3 className={styles.title_h3}>
          <Link href="/profils">
            <a>Voir les profils</a>
          </Link>
        </h3>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}