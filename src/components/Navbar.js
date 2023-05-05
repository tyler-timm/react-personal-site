import styles from '@/styles/Home.module.css';
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className={styles.navContainer}>
            <div>
                <Link href='/' className={styles.navLink}>Home</Link>
            </div>
            <div>
                <Link href='/resume' className={styles.navLink}>Resume</Link>
            </div>
        </div>
    )
}
