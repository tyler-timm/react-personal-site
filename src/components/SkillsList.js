import styles from '@/styles/Home.module.css';

import { FaJs, FaHtml5, FaCss3, FaFilePdf, FaMobile, FaAws, FaPython } from "react-icons/fa";
import { SiMicrosoftoffice, SiOracle, SiApacheairflow } from 'react-icons/si';
import { MdAdminPanelSettings } from "react-icons/md";

const skills = [
    {
        name: 'JavaScript',
        icon: <FaJs />
    },
    {
        name: 'Python',
        icon: <FaPython />
    },
    {
        name: 'NetSuite Customization and Integration',
        icon: <SiOracle />
    },
    {
        name: 'AWS - Lambda, DynamoDB, Amplify, Appsync',
        icon: <FaAws />
    },
    {
        name: 'Airflow',
        icon: <SiApacheairflow />
    },
    {
        name: 'HTML',
        icon: <FaHtml5 />
    },
    {
        name: 'CSS',
        icon: <FaCss3 />
    },
    {
        name: 'FreeMarker',
        icon: <FaFilePdf />
    },
    {
        name: 'NetSuite Administration',
        icon: <MdAdminPanelSettings />
    },
    {
        name: 'Microsoft 365 Administration',
        icon: <SiMicrosoftoffice />
    },
    {
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