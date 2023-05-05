import styles from '@/styles/Home.module.css';
import { FaLaptopCode } from "react-icons/fa";

export default function Header() {
    return (
        <div className={styles.resumeName}><FaLaptopCode />&nbsp;&nbsp;&nbsp;&nbsp; Tyler Timm &nbsp;&nbsp;&nbsp;&nbsp;<FaLaptopCode /></div>
    )
}
