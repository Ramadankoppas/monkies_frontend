/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
'use client'
import { useState , useEffect } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useRouterContext } from "./context/NavbarContext";
export default function Home() {
  const router = useRouter()
  const {setActivePage} = useRouterContext()
  const [width , setWidth] = useState(1000)
  const handleClick= async(text)=>{
    setActivePage(text)
    sessionStorage.setItem('pageSelect', text);
  }
  useEffect(()=>{
    const widthScreen = window.screen.width
    setWidth(widthScreen)
  },[])
  return (
      <div>
        <section className={styles.mainHomeImage}>
          <img src="/assets/images/Hero img.png" alt="Monkies Home"/>
          <div className={styles.first_discription}>
              <h1>
                WE ARE <span>MONKIES</span> <br />
                CODING SUCCESS. <br />
              </h1>
              <br />
              {width > 650 ?
                <p> We blend technical precision with creative  <br /> instinct to build digital experiences that stick. <br />No fluff, just results that move the needle.</p>:
                <p> We blend technical precision with creative instinct to build digital experiences that stick. No fluff, just results that move the needle.</p>
              }
              <br />
              <div>
                  <button className={styles.buttonDefult} onClick={()=>{
                    router.push('/services')
                    // await handleClick('Services').then(()=>{
                    // })
                  }}>Explore services</button>
                  <button className={styles.buttonSecound} onClick={()=>{
                      router.push('/about')
                      // await handleClick('About').then(()=>{
                      // })
                    }}>Who we are</button>
              </div>
          </div>
        </section>
        <section className={styles.MainSecoundSection} style={{display:'flex', flexDirection:'column' , alignItems:'center'}}>
            <h1 className={styles.secoundSectionH1}>
                <span>OUR SERVICES</span> <br />
                Solutions for the Modern Web
            </h1>
            <div className={styles.secoundSectionDiv}>
              <div className={styles.sectionsMonkies}>
                  <img className={styles.digitalMarketIcon} src="/assets/icons/digital_markting.svg" alt="Monkies service" />
                  <h2>Digital Marketing</h2>
                  {width > 650 ?
                  <p>
                    Strategic growth hacking and targeted <br />
                    campaigns to scale your brand reach <br />
                    and engagement. <br />
                  </p>:
                  <p>
                    Strategic growth hacking and targeted
                    campaigns to scale your brand reach
                    and engagement.
                  </p>

                  }
              </div>
              <div className={styles.sectionsMonkies}>
                  <img src="/assets/icons/web_developing.svg" alt="Monkies service" />
                  <h2>Web Development</h2>
                  {width > 650 ?
                  <p>
                    Web Development <br />
                    High-performance, scalable web <br />
                    applications built with the latest <br />
                    technologies like React and Tailwind. <br />

                  </p>:
                  <p>
                    Web Development
                    High-performance, scalable web
                    applications built with the latest
                    technologies like React and Tailwind.

                  </p>
                  }
              </div>
              <div className={styles.sectionsMonkies}>
                  <img src="/assets/icons/ui_ux.svg" alt="Monkies service" />
                  <h2>UI/UX Design</h2>
                  {width > 650 ?
                  <p>
                    Intuitive and visually stunning user <br />
                    interfaces designed to maximize user <br />
                    retention and happiness. <br />
                  </p>:
                  <p>
                    Intuitive and visually stunning user
                    interfaces designed to maximize user
                    retention and happiness.
                  </p>
                  }
              </div>
            </div>
        </section>
        <section className={styles.thirdSection}>
            <div>
                <h2>
                  AND THERE IS <span>MORE...</span>
                </h2>
                <p>
                  We don't just build sites; we build ecosystems. <br />From SEO optimization to <br />
                  cloud infrastructure, our holistic approach <br />ensures your brand is future-proof. <br />
                </p>
                <p className={styles.thirdSectionCopy}><span>©</span> SEO Mastery & Performance Optimization</p>
                <p className={styles.thirdSectionCopy}><span>©</span> Content Strategy & Social Media Branding</p>
                <p className={styles.thirdSectionCopy}><span>©</span> Ongoing Maintenance & Technical Support</p>
            </div>
            {width > 650 ?
            <img src="/assets/images/AND THERE IS MORE... img.png" alt="Monkies More" />:null
            }
        </section>
        <section className={styles.MainfourthSection}>
            <h1 className={styles.secoundSectionH1}>
                <span>THE DIFFERENCE</span> <br />
                Why Brands Choose Monkies
            </h1>
            <div className={styles.FourthSection}>
                <div>
                    <img  src="/assets/images/1.png" alt="Monkies Service"  />
                    <h2>Elite Talent</h2>
                    <p>Our monkeys are masters of their specific
                      code jungles.
                    </p>
                </div>
                <div>
                    <img  src="/assets/images/2.png" alt="Monkies Service"  />
                    <h2>Rapid Execution</h2>
                    <p>
                      We iterate fast without breaking things that
                      matter.
                    </p>
                </div>
                <div>
                    <img  src="/assets/images/3.png" alt="Monkies Service"  />
                    <h2>Total Clarity</h2>
                    <p>
                      You own everything. Complete
                      transparency in our process.
                    </p>
                </div>
                <div>
                    <img  src="/assets/images/4.png" alt="Monkies Service"  />
                    <h2>24/7 Support</h2>
                    <p>
                      Because bugs 
                      (and bananas) don't follow
                      office hours.
                    </p>
                </div>
            </div>
        </section>
        <section className={styles.fifthSection}>
            {width > 650 ?
              <img src="/assets/images/READY TO MONKEY AROUND img.png" alt="Monkies Ready" />:
              <img src="/assets/images/READY TO MONKEY AROUND img2.png" alt="Monkies Ready" />
            }
            <div>
                <h2>READY TO MONKEY AROUND ?</h2>
                <p>
                  Join dozens of successful brands that leveled up with our
                  technical expertise.
                </p>
                <button onClick={()=>{
                  router.push('contact-us')
                  }}>Get Your Free Quote</button>
            </div>
        </section>
      </div>
  );
}
