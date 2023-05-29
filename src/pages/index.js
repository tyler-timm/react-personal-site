import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

import Header from '@/components/Header.js';


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
                <br />
                <Image src='/Llama.jpg' width={375} height={500} alt='Myself with a Llama' />
            </main >
        </>
    )
}
