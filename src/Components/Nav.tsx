import {Link} from 'react-router-dom'
import './Nav.css'

export function Navbar(){

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
            <a id='Resume' href='https://github.com/Dishsoapy/Resume' target='_blank' rel='noopener noreferrer'>Resume</a>
        </div>   
    )
}