import styles from '@/styles/Home.module.css';

import { FaJs, FaHtml5, FaCss3, FaFilePdf, FaMobile, FaAws } from "react-icons/fa";
import { SiMicrosoftoffice, SiOracle } from 'react-icons/si';
import { MdAdminPanelSettings } from "react-icons/md";

const skills = [
    {
        key: 0,
        name: 'JavaScript',
        icon: <FaJs />
    },
    {
        key: 1,
        name: 'NetSuite Customization and Integration',
        icon: <SiOracle />
    },
    {
        key: 2,
        name: 'AWS - Lambda, DynamoDB, Amplify, Appsync',
        icon: <FaAws />
    },
    {
        key: 3,
        name: 'HTML',
        icon: <FaHtml5 />
    },
    {
        key: 4,
        name: 'CSS',
        icon: <FaCss3 />
    },
    {
        key: 5,
        name: 'FreeMarker',
        icon: <FaFilePdf />
    },
    {
        key: 6,
        name: 'NetSuite Administration',
        icon: <MdAdminPanelSettings />
    },
    {
        key: 7,
        name: 'Microsoft 365 Administration',
        icon: <SiMicrosoftoffice />
    },
    {
        key: 8,
        name: 'Mobile Device Management',
        icon: <FaMobile />
    }
];

export default function ListSkills() {
    const skillsList = skills.map(skill => {
        if (skill.icon) {
            return <li key={skill.key}>{skill.icon} &nbsp; {skill.name}</li>
        } else {
            return <li key={skill.key}>{skill.name}</li>
        }
    });
    return <ul className={styles.skillsList}>{skillsList}</ul>;
}