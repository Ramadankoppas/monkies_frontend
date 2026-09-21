/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client'
/* eslint-disable react-hooks/exhaustive-deps */
import { useState , useEffect } from 'react'
import { useParams } from 'next/navigation'
import styles from './projects.module.css'
import Loading from '@/app/components/Loading'
export default function Projects(){
    const params = useParams()
    const name_proj = params.nameProject
    const [name_project , setNameProject] = useState('')
    const [type , setType] = useState('')
    const [service , setService] = useState('')
    const [discreption , setDiscreption] = useState('')
    const [logo , setLogo] = useState('')
    const [image1 , setImage1] = useState('')
    const [image2 , setImage2] = useState('')
    const [image3 , setImage3] = useState('')
    const [scaleLogo , setScaleLogo] = useState('')
    const [styleProject , setStyleProject] = useState('')
    const [loading , setLoading] = useState(true)
    useEffect(()=>{
        fetch(`https://monkies.net/api/projects/${name_proj}/`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        }).then(response => response.json()
        ).then(data =>{
            setNameProject(data['name_project'])
            setType(data['type'])
            setService(data['service'])
            setDiscreption(data['discreption'])
            setLogo(data['logo'])
            setImage1(data['image1'])
            setImage2(data['image2'])
            setImage3(data['image3'])
            setScaleLogo(data['scaleLogo'])
            setStyleProject(data['styleProject'])
            setLoading(false)
        })
    },[])
    if(loading){
        return(
            <Loading></Loading>
        )
    }else{
        return(
            <div className={styles.mainProjects}>
                <div className={styles.section1Projects}>
                    <div>
                        <div className={styles.viewServiceDiv}>
                            <div>
                                <img className={styles[scaleLogo]} src={logo} alt="Monkies Service" />
                                <h2>{name_project}</h2>
                                <p className={styles.viewServiceP}>{type}</p>
                                <p>{service}</p>    
                            </div>
                            <div>
                                <p className={styles.viewServiceP1} dangerouslySetInnerHTML={{ __html: discreption }}></p>
                            </div>
                        </div>
                    </div>
                    <img className={styles[styleProject]} src={image1} alt="Monkies Projects" />
                </div>
                <div className={styles.section2Projects}>
                    <img className={styles[styleProject]} src={image2} alt="Monkies Projects" />
                    <img className={styles[styleProject]} src={image3} alt="Monkies Projects" />
                </div>
            </div>
        )
    }
}