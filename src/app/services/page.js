'use client'
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from '../page.module.css'
import { useRouter } from "next/navigation";
export default function Services(){
    const router = useRouter()
    const handleProject = (name_project)=>{
        router.push(`/projects/${name_project}`)
    }
    return(
        <div>
            <section className={styles.ServiceDiv}>
                <h1>UI-UX</h1>
                <div>
                    <img className={styles.monkiesServiceImage} src="/assets/images/img 1 ui-ux.png" alt="Monkies Service" />
                    <div className={styles.viewServiceDiv}>
                        <div>
                            <img className={styles.imageHeight} src="/assets/images/alex west logo.png" alt="Monkies Service" />
                            <h2>Alex West</h2>
                            <p className={styles.viewServiceP}>Services</p>
                            <p>UI-UX</p>    
                        </div>
                        <div>
                            <p className={styles.viewServiceP1}>Alex West is the flagship project
                                of "Barons Court Sports &
                                Leisure Co." – an Egyptian joint
                                stock company (SAE) for real
                                estate investment, Alex west has
                                an integrated mini-city
                                which offers many facilities,
                                ranging from Real Estate to
                                Entertainment.
                            </p>
                            <span onClick={()=>{handleProject('Alex west')}}>see more</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.viewServiceDiv}>
                        <div>
                            <img className={styles.imageHeight} src="/assets/images/dar logo.png" alt="Monkies Service" />
                            <h2>dar al fouad</h2>
                            <p className={styles.viewServiceP}>Services</p>
                            <p>UI-UX</p>    
                        </div>
                        <div>
                            <p className={styles.viewServiceP1}>
                                (DAFH) vision is to be a leader in
                                healthcare services provision
                                through compliance with the
                                best-known international quality
                                standards of Joint Commission
                                Accreditation and to be
                                recognized as the hospital
                                of choice among patients,
                                physicians, employees.
                            </p>
                            <span onClick={()=>{handleProject('dar al fouad')}}>see more</span>
                        </div>
                    </div>
                    <div className={styles.viewServiceDiv}>
                        <div>
                            <img className={styles.imageWidth} src="/assets/images/Armstrong logo.png" alt="Monkies Service" />
                            <h2>Armstrong</h2>
                            <p className={styles.viewServiceP}>Services</p>
                            <p>UI-UX</p>    
                        </div>
                        <div>
                            <p className={styles.viewServiceP1}>
                                Armstrong delivers the most
                                interactive way for education
                                as never before. Armstrong
                                provides STEM programs, Science
                                and Math illustrations and more
                                fun interactive programs
                                that help develop our students'
                                characters and enrich their
                                logical and analytical skills.
                            </p>
                            <span onClick={()=>{handleProject('Armstrong')}}>see more</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.ServiceDiv}>
                <h1>Mobile & WEB DEV</h1>
                <div className={styles.DeveloperSection}>
                    <div className={styles.viewServiceDiv}>
                        <div>
                            <img className={styles.imageWidth} src="/assets/images/Momaken logo1.png" alt="Monkies Service" />
                            <h2>Momaken</h2>
                            <p className={styles.viewServiceP}>Services</p>
                            <p>UI-UX / web dev / dashboard</p>    
                        </div>
                        <div>
                            <p className={styles.viewServiceP1}>
                                Momaken is a smart analytics platform that turns complex e-commerce data into clear, actionable insights.
                                It offers a unified dashboard for sales, logistics, customer behavior, and financial performance.
                                Momaken enables faster, more accurate, and more profitable decision-making—acting as
                                a strategic partner in your growth.
                            </p>
                            <span onClick={()=>{handleProject('Momaken')}}>see more</span>
                        </div>
                    </div>
                    <img className={styles.monkiesServiceImage} src="/assets/images/img_web_dev.png" alt="Monkies Service" />
                </div>
                <div>
                    <div className={styles.viewServiceDiv}>
                        <div>
                            <img className={styles.imageWidth} src="/assets/images/save time logo.png" alt="Monkies Service" />
                            <br />
                            <h2>Save time</h2>
                            <p className={styles.viewServiceP}>Services</p>
                            <p>UI-UX / mobile app & web dev</p>    
                        </div>
                        <div>
                            <p className={styles.viewServiceP1}>
                                Save Time app : effortless food <br />
                                pickup from any restaurant, <br />
                                anytime you choose. Simply click <br />
                                'I'm here' on arrival to notify the <br />
                                restaurant, and they'll bring your <br />
                                order to your car or prepare it for <br />
                                quick self-collection.
                            </p>
                            <span onClick={()=>{handleProject('Save time')}}>see more</span>
                        </div>
                    </div>
                    <div className={styles.viewServiceDiv}>
                        <div>
                            <img className={styles.imageWidth} src="/assets/images/Naqla logo.png" alt="Monkies Service" />
                            <h2>Naqla</h2>
                            <p className={styles.viewServiceP}>Services</p>
                            <p>UI-UX / mobile app & web dev</p>    
                        </div>
                        <div>
                            <p className={styles.viewServiceP1}>
                                Naqla : revolutionizing trucking <br />
                                with seamless technology, <br />
                                transparent operations, and <br />
                                superior service. They deliver <br />
                                reliable, efficient shipping and <br />
                                valuable data, driving intelligent <br />
                                logistics with integrity and <br />
                                innovation to streamline <br />
                                the entire process. 
                            </p>
                            <span onClick={()=>{handleProject('Naqla')}}>see more</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.viewServiceDiv}>
                        <div>
                            <img className={styles.imageWidth} src="/assets/images/dr expert logo.png" alt="Monkies Service" />
                            <br />
                            <h2>DR-Expert</h2>
                            <p className={styles.viewServiceP}>Services</p>
                            <p>UI-UX / mobile app & web dev</p>    
                        </div>
                        <div>
                            <p className={styles.viewServiceP1}>
                                Dr-expert is One of the 
                                products of "expert systems", which is a branch of artificial intelligence. To simulate human performance. To perform artistic operations'High efficiency. It is usually considered one of the roles of experts and
                                specialists in the field.
                            </p>
                            <span onClick={()=>{handleProject('DR-Expert')}}>see more</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}