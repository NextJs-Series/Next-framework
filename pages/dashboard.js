import Link from 'next/link';
import useSWR from 'swr';
import styles from '../styles/Home.module.css'

const fetcher = async () => {
    const response = await fetch('http://localhost:4000/dashboard')
    const data = await response.json()
    return data
}
export default function DashboardSWR() {
    const { data, error } = useSWR('dashboard', fetcher)

    if (error) return 'An error is accured'
    if (!data) return 'Loading...'
    return (
        <main className={styles.main}>
            <Link href="/">
                <a style={{ justifyContent: 'center' }} className={styles.aa} >GO back to home</a>
            </Link>
            <h1 className={styles.title}>
                <a>My Dashboard</a>
            </h1>
            <h2>Posts - <span> {data.posts}</span> <br /> likes - <span>{data.likes}</span>
                <br /> followers -  <span>{data.followers}</span> <br /> following - <span>{data.following} </span> </h2>
        </main>
    )

}
