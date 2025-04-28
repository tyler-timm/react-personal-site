import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import { FaLaptopCode } from "react-icons/fa";

export default function Header() {
    return (
        <div className={styles.navContainer}>
            <div className={styles.resumeName}>
                Tyler Timm &nbsp; <FaLaptopCode color='#e9c46a'/>
            </div>
            <div>
                <Link href='/' className={styles.navLink}>Home</Link>
            </div>
        </div>
    )
}
