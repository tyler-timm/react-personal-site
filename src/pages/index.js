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
                        href="/Tyler Timm - Resume 3-28-25.pdf"
                        alt="alt text"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.downloadPDF}>
                        <FaRegFilePdf /> Download Resume as PDF
                    </a>
                    <br /><br />
                    <div className={styles.education}>
                        Software Developer with 5+ years' experience specializing in NetSuite Customization and Integration. Strong expertise in JavaScript, Python, SQL, and REST APIs. Passionate about solving complex technical challenges and driving efficiency through innovative solutions.
                    </div>
                    <div className={styles.sectionHead}>SKILLS</div>
                    <div className={styles.skills}>
                        <SkillsList />
                    </div>
                    <div className={styles.sectionHead}>WORK EXPERIENCE</div>
                    <div className={styles.workExp}>
                        <div className={styles.textSection}>
                            <Image src='/Thrive-Logo-White.svg' height={100} width={250} />
                            <div className={styles.workRole}>
                                NetSuite Developer<br />
                                Thrive Market, Los Angeles, CA<br />
                                Mar 2024 - Mar 2025<br />
                            </div>
                        </div>
                        <br />
                        <ul className={styles.indent1}>
                            <li>Designed and developed custom SuiteScript solutions, automating business processes and increasing efficiency.</li>
                            <li>Led integration of Purchase Order data between NetSuite and a Transportation Management System via Airflow and JDBC</li>
                            <li>Developed a custom Item Change Approval Process, streamlining approval workflows across multiple departments using SuiteScript, workflows, and role-based permissions.</li>
                            <li>Conducted code reviews and solution architecture discussions with team to ensure scalability and maintainability.</li>
                        </ul>
                        <br />
                        <div className={styles.textSection}>
                            <Image src='/GDS-Logo-White.png' height={100} width={253} />
                            <div className={styles.workRole}>
                                Senior ERP Developer<br />
                                Global Data Services, St. Louis, MO<br />
                                Nov 2022 - Jan 2024<br />
                            </div>
                        </div>
                        <br />
                        <ul className={styles.indent1}>
                            <li>Developed and maintained custom iOS/Android mobile app integration with NetSuite</li>
                            <li>Built a custom Google Maps API interface within NetSuite, allowing users to draw on maps, calculate area/perimeter, and store data in NetSuite records.</li>
                            <li>Created a custom Work Order scheduling interface with drag-and-drop functionality</li>
                            <li>Developed custom NetSuite integrations to track in-store transactions and inventory held by 3PL providers</li>
                        </ul>
                        <br />
                        <div className={styles.textSection}>
                            <Image src='/ATIS-Logo-White.svg' height={100} width={262} />
                            <div className={styles.workRole}>
                                Developer/Administrator<br />
                                ATIS Elevator Inspections, St. Louis, MO<br />
                                March 2019 - Nov 2022<br />
                            </div>
                        </div>
                        <br />
                        <ul className={styles.indent1}>
                            <li>Led NetSuite feature development using SuiteScript to optimize elevator inspection processes across six states.</li>
                            <li>Created Advanced PDF/HTML templates tailored to each state or jurisdiction, increasing efficiency and data availability</li>
                            <li>Trained 30+ inspectors and office staff on elevator inspection related NetSuite processes</li>
                            <li>Established NetSuite Support Cases for IT Help Desk, improving IT issue tracking and resolution times.</li>
                        </ul>
                        <br />
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
