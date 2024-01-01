import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

import Header from '@/components/Header.js';
import SkillsList from '@/components/SkillsList.js';

import { FaRegFilePdf } from 'react-icons/fa';

export default function Resume() {
    return (
        <>
            <Head>
                <title>Tyler Timm - Resume</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Header />
                <div>
                    <a
                        href="/Tyler Timm - Resume.pdf"
                        alt="alt text"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.downloadPDF}>
                        <FaRegFilePdf /> Download Resume as PDF
                    </a>
                    <br /><br />
                    <div className={styles.education}>
                        Software Developer with 4+ years’ experience in CRM/ERP-based development and a wide variety of general IT functions. Passionate about expanding knowledge and gaining experience in development and any other skills needed to create functional technology solutions.
                    </div>
                    <div className={styles.sectionHead}>SKILLS</div>
                    <div className={styles.skills}>
                        <SkillsList />
                    </div>
                    <div className={styles.sectionHead}>WORK EXPERIENCE</div>
                    <div className={styles.workExp}>
                        <div className={styles.textSection}>
                            <Image src='/GDS-Logo-White.png' height={100} width={253} />
                            <div className={styles.workRole}>
                                Senior ERP Developer<br />
                                Global Data Services, St. Louis, MO<br />
                                Nov 2022 - Present (Full Time)<br />
                                Feb 2022 - Nov 2022 (Independent Contractor - Part Time)<br />
                            </div>
                        </div>
                        <br />
                        <span className={styles.subheading}>Major Projects:</span>
                        <br />
                        <ul className={styles.indent1}>
                            <li>Integration between NetSuite and GDS's "Onsight" Mobile App: Field Service Solution</li>
                            <li>Integrated Applications within "Suitelets":</li>
                            <li className={styles.indent2}>Custom Map Interface: Uses Google Maps API to allow user to draw shapes on map at custom location, calulcate area and perimeter, and save map state to custom NetSuite record attached to customer</li>
                            <li className={styles.indent2}>Scheduler Component: Multiple calendar views with drag and drop events that loads data from NetSuite and updates NetSuite custom records</li>
                            <li className={styles.indent2}>Onsight Map Interface: Google Maps based Suitelet interface rendering field work order, field worker, warehouse locations on google map, allows changes to be made to NetSuite records from interface</li>
                            <li>Custom NetSuite Integrations with Stores and 3PL Providers: Products sold on Consignment</li>
                        </ul>
                        <br />
                        <div className={styles.textSection}>
                            <Image src='/ATIS-Logo-White.svg' height={100} width={262} />
                            <div className={styles.workRole}>
                                Junior Developer / IT Systems Administrator<br />
                                ATIS Elevator Inspections, St. Louis, MO<br />
                                March 2019 - Nov 2022<br />
                            </div>
                        </div>
                        <br />
                        <span className={styles.subheading}>Responsibilities:</span>
                        <br />
                        <ul className={styles.indent1}>
                            <li>NetSuite feature development in JavaScript (SuiteScript)</li>
                            <li>Advanced PDF/HTML template creation for custom records and transactions</li>
                            <li>Train elevator inspectors and office staff on use of inspection app and scheduling process</li>
                            <li>System Administrator: NetSuite, Office 365, 8x8 (VOIP)</li>
                            <li>Mobile Device Management via Intune/Microsoft Endpoint Manager</li>
                        </ul>
                        <br />
                        <span className={styles.subheading}>Major Projects:</span>
                        <ul className={styles.indent1}>
                            <li>Developed and maintained elevator inspection process on NetSuite Mobile app for Virginia, Florida, Missouri, Illinois, Wisconsin, and Colorado</li>
                            <li>Created documentation and trained office staff and inspectors on process while continually soliciting feedback for improvements or necessary changes</li>
                            <li>Implemented and used NetSuite support cases for IT Help Desk and other department use</li>
                        </ul>
                    </div>
                    <div className={styles.sectionHead}>EDUCATION</div>
                    <div className={styles.textSection}>
                        <Image src='/IowaHawkeyesLogo.webp' height={100} width={142} />
                        <div>
                            <p className={styles.education}>
                                B.A. Computer Science<br />
                                December 2018<br />
                                University of Iowa, Iowa City, IA
                            </p>
                        </div>
                    </div>
                </div>
                <br />
            </main >
        </>
    )
}
