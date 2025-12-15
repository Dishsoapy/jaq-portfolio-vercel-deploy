import {Link} from 'react-router-dom'
import { useState } from 'react'
import './Nav.css'
import myResume from '../assets/Resume/Resume.pdf'

export function Navbar(){
    const [resumeDownloaded, setResumeDownloaded] = useState(false);

    const resumeClicked = () => {
        setResumeDownloaded(true);
    }

    return(
        <div className='Nav'>
            <Link to = '/'>
                <a>Home </a>
            </Link>|
            <Link to ='/About'>
                <a> About </a>
            </Link>|
            <Link to ='/Contact'>
                <a> Contact </a>
            </Link>|
            <Link to ='/Personal'>
                <a> Personal </a>
            </Link>| 
            <a
            href={resumeDownloaded ? undefined : myResume}
            download={resumeDownloaded ? undefined : "JaqO-Resume.pdf"}
            className={`Downloaded ${resumeDownloaded ? "disabled" : ""}`}
            onClick={resumeDownloaded ? (e) => e.preventDefault() : resumeClicked}> Resume </a>
        </div>   
    )
}