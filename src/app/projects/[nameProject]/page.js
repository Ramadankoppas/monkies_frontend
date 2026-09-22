/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client'
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
    const [error, setError] = useState('')
    useEffect(() => {
        if (typeof name_proj !== 'string' || !name_proj) return
        const controller = new AbortController()

        async function loadProject() {
            setLoading(true)
            setError('')
            try {
                // Normalize the encoded route segment before building the API URL.
                let projectName = name_proj
                try {
                    projectName = decodeURIComponent(name_proj)
                } catch (error) {
                    if (!(error instanceof URIError)) throw error
                }
                const response = await fetch(
                    `https://monkies.net/api/projects/${encodeURIComponent(projectName)}/`,
                    {
                        headers: { Accept: 'application/json' },
                        cache: 'no-store',
                        signal: controller.signal,
                    }
                )
                if (!response.ok) {
                    throw new Error(`Project request failed (HTTP ${response.status})`)
                }
                if (!response.headers.get('content-type')?.includes('application/json')) {
                    throw new Error(`Expected JSON from ${response.url}, received ${response.headers.get('content-type')}`)
                }
                const data = await response.json()
                if (controller.signal.aborted) return
                setNameProject(data.name_project)
                setType(data.type)
                setService(data.service)
                setDiscreption(data.discreption)
                setLogo(data.logo)
                setImage1(data.image1)
                setImage2(data.image2)
                setImage3(data.image3)
                setScaleLogo(data.widthLogo)
                setStyleProject(data.styleProject)
            } catch (error) {
                if (controller.signal.aborted) return
                console.error('Failed to load project:', error)
                setError('Unable to load this project. Please refresh the page to try again.')
            } finally {
                if (!controller.signal.aborted) setLoading(false)
            }
        }

        loadProject()
        return () => controller.abort()
    }, [name_proj])
    if (error) {
        return <p role="alert">{error}</p>
    }
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