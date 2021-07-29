import Head from 'next/head'
import styles from '/styles/Home.module.css'
import { useRouter } from 'next/router';
export default function ProductDetails() {
    const router = useRouter()
    const productId = router.query.productId
    return (
        <div className={styles.container}>
            <Head>
                <title>Next js </title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Details about <a href="https://nextjs.org">{productId}</a>
                </h1>
            </main>
        </div>
    )
}