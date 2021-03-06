import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css'

export default function PostList({ posts }) {
    return (
        <div>
            <Head>
                <title>Next js</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <p className={styles.title}>
                    Welcome to <a>Post page !</a>
                </p>
                {posts.map((post) => {
                    return (
                        <div key={post.id}>
                            <Link href={`posts/${post.id}`} passHref >
                                <p>{post.id}  {post.title}</p>
                            </Link>
                        </div>
                    )
                })}

            </main>
        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    return {
        props: {
            posts: data,
        }
    }
}