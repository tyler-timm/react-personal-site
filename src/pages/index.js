import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

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
    },
    {
        key: 1,
        name: 'SuiteScript'
    },
    {
        key: 2,
        name: 'HTML/CSS'
    },
    {
        key: 3,
        name: 'FreeMarker'
    },
    {
        key: 4,
        name: 'NetSuite Development'
    },
    {
        key: 5,
        name: 'NetSuite Administration'
    },
    {
        key: 6,
        name: 'Microsoft 365 Administration'
    },
    {
        key: 7,
        name: 'VOIP Phone Administration'
    },
    {
        key: 8,
        name: 'Mobile Device Management'
    },
    {
        key: 9,
        name: 'Microsoft Office Applications'
    }
];

function ListSkills() {
    const skillsList = skills.map(skill => {
        return <li>{skill.name}</li>
    });
    return <ul>{skillsList}</ul>;
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
                <div className={styles.resumeName}><FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;&nbsp;&nbsp; Tyler Timm &nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faLaptopCode} /></div>
                <div>
                <div className={styles.sectionHead}>SKILLS</div>
                <div className={styles.skills}>
                    <ListSkills />
                </div>
                <br /><br />
                <div className={styles.sectionHead}>WORK EXPERIENCE</div>
                    <p>
                        NetSuite Software Developer<br />
                        Global Data Systems, St. Louis, MO<br />
                        Feb 2022 - Nov 2022 (Independent Contractor - Part Time)<br />
                        Nov 2022 - Present (Full Time)<br />
                        Major Projects:<br />
                        Custom Map Interface: Suitelet that renders page from HTML, CSS, Javascript files. Uses Google Maps, including Drawing Manager library to draw on top of map and save objects to custom NetSuite record attached to customers<br />
                        Scheduler Component: Suitelet that renders page from HTML, CSS, Javascript files. Multiple calendar views with drag and drop events that loads data from NetSuite and updates NetSuite custom records<br />
                        Onsight Map Interface: Suitelet that renders page from HTML, CSS, Javascript files. Google Maps based Suitelet interface showing work order locations on top of google map, allows changes to be made to NetSuite records from interface<br />
                        <br />
                        IT Systems Administrator / Junior Developer<br />
                        ATIS Elevator Inspections, St. Louis, MO<br />
                        March 2019 - Nov 2022<br />
                        <br />
                        Responsibilities:<br />
                        NetSuite feature development in JavaScript (SuiteScript)<br />
                        Advanced PDF/HTML template creation for custom records and transactions<br />
                        NetSuite and Office 365 user administration and support<br />
                        Train elevator inspectors and office staff on use of inspection app and scheduling process<br />
                        Build reports to track adoption of new features, business metrics<br />
                        Phone system management and support (internal and virtual contact center) 8x8 - VOIP<br />
                        iPhone and iPad mobile device management via Intune/Microsoft Endpoint Manager<br />
                        Major Projects:<br />
                        Adapted and maintained elevator inspection process on NetSuite Mobile app for Virginia, Florida, Missouri, Illinois, Wisconsin, and Colorado<br />
                        Created documentation and trained office staff and inspectors on process while continually soliciting feedback for improvements or necessary changes<br />
                        Customized and used NetSuite Support Cases for IT Help Desk and other department use<br />
                        Created NetSuite online form to allow customers and partners to request inspections<br />
                        <br />
                    </p>
                    <div className={styles.sectionHead}>EDUCATION</div>
                    <p>
                        B.A. Computer Science<br />
                        December 2018<br />
                        University of Iowa, Iowa City, IA
                    </p>
                </div>
                <br />
            </main>
        </>
    )
}
