import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function PageNotFound() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Next js</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    404  <a href="https://nextjs.org">Oops Nothing found</a>
                </h1>
            </main>
        </div>
    )
}