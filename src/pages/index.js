import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faAmbulance,
    faAnchor,
} from "@fortawesome/free-solid-svg-icons";

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
        name: 'JavaScript'
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

function TextSection({ value }) {
    return (
        <>
            Section {value}
        </>
    );
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
                <div className={styles.resumeName}>Tyler Timm</div>
                <FontAwesomeIcon
                    icon={faSearch}
                    style={{ fontSize: 100, color: "blue" }}
                />
                Skills
                <ListSkills />
                <br />
            </main>
        </>
    )
}
