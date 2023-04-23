import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

import { FaLaptopCode } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { SiMicrosoftoffice } from "react-icons/si";
import { FaPhone } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { SiOracle } from "react-icons/si";

import { useState } from "react";

const resumeSections = [
    `Software Developer
5949 W Park Ave, St Louis, MO 63110
(636) 295-0846 | ttimm16@gmail.com`,
    `Software Developer with 4+ years’ experience in CRM/ERP-based development and a wide variety of general IT functions. Passionate about expanding knowledge and gaining experience in programming and any other skills needed to create functional technology solutions.`,
]

const skills = [
    {
        key: 0,
        name: 'JavaScript',
        icon: <FaJs />
    },
    {
        key: 1,
        name: 'SuiteScript',
        icon: <FaJs />
    },
    {
        key: 2,
        name: 'HTML',
        icon: <FaHtml5 />
    },
    {
        key: 3,
        name: 'CSS',
        icon: <FaCss3 />
    },
    {
        key: 4,
        name: 'FreeMarker',
        icon: <FaFilePdf />
    },
    {
        key: 5,
        name: 'NetSuite Development',
        icon: <SiOracle />
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
        name: 'VOIP Phone Administration',
        icon: <FaPhone />
    },
    {
        key: 9,
        name: 'Mobile Device Management',
        icon: <FaMobile />
    },
    {
        key: 10,
        name: 'Microsoft Office Applications',
        icon: <SiMicrosoftoffice />
    }
];

function ListSkills() {
    const skillsList = skills.map(skill => {
        if (skill.icon) {
            return <li>{skill.icon} {skill.name}</li>
        } else {
            return <li>{skill.name}</li>
        }
    });
    return <ul className={styles.skillsList}>{skillsList}</ul>;
}

export default function Home() {
    return (
        <>
            <Head>
                <title>Welcome</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.resumeName}><FaUser />&nbsp;&nbsp;&nbsp;&nbsp; Tyler Timm &nbsp;&nbsp;&nbsp;&nbsp;<FaLaptopCode /></div>
                <div>
                    <div className={styles.sectionHead}>SKILLS</div>
                    <div className={styles.skills}>
                        <ListSkills />
                    </div>
                    <br /><br />
                    <div className={styles.sectionHead}>WORK EXPERIENCE</div>
                    <p className={styles.workExp}>
                        NetSuite Software Developer<br />
                        Global Data Systems, St. Louis, MO<br />
                        <span className={styles.indent1}>
                            Feb 2022 - Nov 2022 (Independent Contractor - Part Time)<br />
                        </span>
                        <span className={styles.indent1}>
                            Nov 2022 - Present (Full Time)<br />
                        </span>
                        Major Projects:<br />
                        <ul className={styles.indent1}>
                            <li>Integrated Applications within "Suitelets":</li>
                            <li className={styles.indent2}>Custom Map Interface: Uses Google Maps API, to allow user to draw shapes on map at custom location, calulcate area and perimeter, and save map state to custom NetSuite record attached to customer</li>
                            <li className={styles.indent2}>Scheduler Component: Multiple calendar views with drag and drop events that loads data from NetSuite and updates NetSuite custom records</li>
                            <li className={styles.indent2}>Onsight Map Interface: Google Maps based Suitelet interface showing field work order, field worker, warehouse locations on google map, allows changes to be made to NetSuite records from interface</li>
                        </ul>
                        <br />
                        IT Systems Administrator / Junior Developer<br />
                        ATIS Elevator Inspections, St. Louis, MO<br />
                        March 2019 - Nov 2022<br />
                        <br />
                        Responsibilities:<br />
                        <ul className={styles.indent1}>
                            <li>NetSuite feature development in JavaScript (SuiteScript)</li>
                            <li>Advanced PDF/HTML template creation for custom records and transactions</li>
                            <li>Train elevator inspectors and office staff on use of inspection app and scheduling process</li>
                            <li>System Administrator: NetSuite, Office 365, 8x8 (VOIP)</li>
                            <li>Mobile Device Management via Intune/Microsoft Endpoint Manager</li>
                        </ul>
                        Major Projects:
                        <ul className={styles.indent1}>
                            <li>Developed and maintained elevator inspection process on NetSuite Mobile app for Virginia, Florida, Missouri, Illinois, Wisconsin, and Colorado</li>
                            <li>Created documentation and trained office staff and inspectors on process while continually soliciting feedback for improvements or necessary changes</li>
                            <li>Implemented and used NetSuite support cases for IT Help Desk and other department use</li>
                        </ul>
                    </p>
                    <div className={styles.sectionHead}>EDUCATION</div>
                    <p className={styles.education}>
                        B.A. Computer Science<br />
                        December 2018<br />
                        University of Iowa, Iowa City, IA
                    </p>
                </div>
                <br />
            </main >
        </>
    )
}
