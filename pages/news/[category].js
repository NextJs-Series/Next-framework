import Head from 'next/head';
import styles from '/styles/Home.module.css'
export default function ArticleListByCategory({ articles, category }) {
    return (
        <div>
            <Head>
                <title>Next js </title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>

                <p className={styles.title}>
                    News is showing for  <a>{category}</a>
                </p>
                {
                    articles.map((article => {
                        return (
                            <div style={{ width: '30%' }} key={article.id} >
                                <p>{article.id}  {article.title}  <br /> {article.description}</p>

                            </div>
                        )
                    }))
                }
            </main>
        </div>
    )
}
export async function getServerSideProps(context) {
    const { params, res, req } = context
    console.log(req.headers.cookie)
    res.setHeader('Set-Cookie', ['name=Nauman'])
    const { category } = params
    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await response.json()

    return {
        props: {
            articles: data,
            category,
        },
    }
}