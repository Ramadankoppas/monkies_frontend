/* eslint-disable @next/next/no-img-element */
'use client'
import React , {useState} from "react";
import styles from '../page.module.css'
export default function ContactUs(){
    const [name , setName] = useState('')
    const [mobile , setMobile] = useState('')
    const [details , setDetails] = useState('')
    const [loading , setLoading] = useState(false)
    const [message , setMessage] = useState('')
    const [viewMessage , setViewMessage] = useState('none')
    const [imageStatus , setImageStatus] = useState('/assets/icons/success.svg')
    const [viewImageStatus , setViewImageStatus] = useState('block')
    const setData = ()=>{
        setLoading(true)
        if(name == ''){
            setLoading(false)
            setViewImageStatus('none')
            setViewMessage('flex')
            setMessage('Please enter your name')
            return
        }
        if(mobile == ''){
            setLoading(false)
            setViewImageStatus('none')
            setViewMessage('flex')
            setMessage('Please enter your mobile number')
            return
        }
        if(details == ''){
            setLoading(false)
            setViewImageStatus('none')
            setViewMessage('flex')
            setMessage('Please enter your message')
            return
        }
        fetch('https://monkies.net/api/contact_us/',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                name:name,
                mobile:mobile,
                details:details
            })
        }).then(()=>{
            setLoading(false)
            setViewImageStatus('block')
            setImageStatus('/assets/icons/success.svg')
            setViewMessage('flex')
            setMessage('Your request has been sent successfully. <br> Thank you for choosing Monkies.')
        }).catch(()=>{
            setLoading(false)
            setViewImageStatus('block')
            setImageStatus('/assets/icons/error.png')
            setViewMessage('flex')
            setMessage('There was an issue receiving your request. <br> Please try again later. <br> Thanks for using Monkies.')
        })
    }
    return(
        <div>
            <h1 className={styles.AboutHeader} style={{fontSize:'7vw'}}>Tell us about your project</h1>
            <div className={styles.mainContact}>
                <div></div>
                <div className={styles.contactDetails}>
                    <div>
                        <input type="text" onChange={(e)=>{setName(e.target.value)}} maxLength={30} placeholder="Name"/>
                        <input value={mobile} type="text" onChange={(e)=>{
                            const val = e.target.value;
                            const onlyNums = val.replace(/[^0-9]/g, '');
                            setMobile(onlyNums);
                        }} maxLength={14} placeholder="Mobile Number"/>
                        <textarea name="details" id="" onChange={(e)=>{setDetails(e.target.value)}} placeholder="Tell us about your project"></textarea>
                        <div className={styles.sendContectUs} onClick={()=>{setData()}}>
                            {loading?
                             <div className={styles.mainProgress}>
                                <div className={styles.secoundProgress}></div>
                             </div>
                            :
                             <p>Send</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.messagePopUp} style={{display:viewMessage}}>
                <img className={styles.closeMessage} src="/assets/icons/close.svg" alt="Monkies close Message" onClick={()=>{setViewMessage('none')}}/>
                <img className={styles.statusMessage} src={imageStatus} style={{display:viewImageStatus}} alt="Monkies Status" />
                <p dangerouslySetInnerHTML={{ __html: message }}></p>
            </div>
        </div>
    )
}