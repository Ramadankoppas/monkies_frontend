/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from '../page.module.css'
export default function PrivacyPolicy(){
    return(
        <div className={styles.AboutPage}>
            <h1 className={styles.AboutHeader} style={{fontSize:'12vw'}}>Privacy policy</h1>
            <p style={{color:'#858585', width:'90%'}}>
                1. Commitment to Confidentiality and Information Handling <br /> <br />

                "Monkies" strictly commits to not disclosing or sharing any technical information or details regarding client projects with any third party without prior written consent from the client.<br /> <br />

                The exchange of technical directives and decisions is restricted to the authorized representatives of the client, and the client bears full responsibility for any instructions issued by them.<br /> <br />

                The Company's obligation to maintain information confidentiality is limited solely to the execution and development period.<br /> <br />

                2. Data Protection and Transfer of Responsibility<br /> <br />

                Upon final delivery of the project, the client becomes fully and entirely responsible for protecting their data and systems.<br /> <br />

                The client commits to changing all passwords and revoking all access permissions granted to the Company's team within a maximum of 3 working days from the delivery date.<br /> <br />

                The Company bears no security liability after project delivery and the transfer of full control to the client.<br /> <br />

                3. Technical and Security Disclaimer<br /> <br />

                The Company bears no responsibility for any data breach or leak resulting from the client's negligence or mismanagement of the systems post-delivery.<br /> <br />

                The Company disclaims liability for any damages resulting from weaknesses in the client's infrastructure, security systems, or their third-party hosting providers.<br /> <br />

                The Company's responsibility does not cover external cyber attacks or security vulnerabilities in operating systems and independent global services.<br /> <br />

                Any unintentional technical error (Bug) or undiscovered vulnerability during development is not considered an intentional data leak.<br /> <br />

                4. Compensation and Dispute Policy<br /> <br />

                If it is proven that the Company intentionally leaked project data directly (by a final court ruling or conclusive technical evidence), the Company commits to compensating the client by an amount not exceeding the total value of the concluded contract.<br /> <br />

                If the client claims a leak occurred on the part of the Company and this claim is proven false, the client commits to compensating the Company for all direct and proven damages, not exceeding the contract's value.<br /> <br />

                In the event of any dispute regarding interpretation or implementation, it shall be resolved amicably between the two parties. If this is not possible, recourse shall be to the competent courts.<br /> <br />
            </p>
        </div>
    )
}