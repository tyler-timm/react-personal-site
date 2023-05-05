import Head from 'next/head';
import styles from '@/styles/Home.module.css';

import Header from '@/components/Header.js';
import Navbar from '@/components/Navbar.js'


export default function Home() {
    return (
        <>
            <Head>
                <title>Tyler Timm - Home</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Header />
                <Navbar />
                <br />
            </main >
        </>
    )
}
