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
            <Link to ='/Extras'>
                <a> Extras </a>
            </Link>
        </div>   
    )
}