/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from '../page.module.css'
export default function TermsAndConditions(){
    return(
        <div className={styles.AboutPage}>
            <h1 className={styles.AboutHeader} style={{fontSize:'8vw'}}>Terms and conditions</h1>
            <p style={{color:'#858585' , width:'90%'}}>
                1. Scope of Work and Mutual Obligations <br /> <br />

                "Monkies" commits to executing and developing technical projects with the highest standards of security and quality, according to the approved timeline for each project. <br /> <br />

                The client commits to providing all necessary technical and organizational requirements for the project's success (e.g., cloud servers, licenses, legal approvals, and global platform accounts).<br /> <br />

                The client bears full responsibility for any delay in the timeline resulting from the failure to provide the aforementioned requirements.<br /> <br />

                "Monkies" bears no responsibility for any delays caused by third parties or external regulatory bodies.<br /> <br />

                2. Financial Affairs and Payment Policy <br /> <br />

                The client commits to paying financial dues on their specified dates to commence or continue execution.<br /> <br />

                Any required financial payment is due within a maximum of 7 working days from its due date.<br /> <br />

                In the event the client delays payment for more than 7 days, the Company reserves the right to temporarily suspend work and adjust the timeline accordingly until payment is made.<br /> <br />

                Temporary suspension due to delayed payments is not considered a breach of contract by the Company.<br /> <br />

                3. Review and Phased Delivery Policy<br /> <br />

                The project is delivered in separate phases to allow the client to monitor progress.<br /> <br />

                The client commits to reviewing each phase within a maximum of 7 working days from the date of its delivery.<br /> <br />

                In the event of no response or feedback within this period, the phase is considered implicitly accepted.<br /> <br />

                The client has no right to delay financial payments under the pretext of non-acceptance after the specified review period has expired.<br /> <br />

                4. Final Delivery and Intellectual Property Rights<br /> <br />

                The project is considered finally delivered upon the operation of the core systems, delivery of the source code and databases, and the creation of an operational demo.<br /> <br />

                Generating profits or launching full commercial operations is not a prerequisite to prove final delivery.<br /> <br />

                All data and custom code for the project are considered the exclusive intellectual property of the client, only after all financial dues are paid in full.<br /> <br />

                "Monkies" retains the full right to reuse any general components or software libraries not exclusively customized for the project.<br /> <br />
            </p>
        </div>
    )
}