import './Home.css';
import myImage from '../../assets/Images/sprout-drawing.png'

export function Home(){
    return(
        <div className='Home'>
            <h1 id='Dishsoap'>Dishsoap.me</h1>
            <img id='Sprout' src={myImage} alt='Drawing made by my lovely girlfriend'></img>
            <p>Learning something new everyday</p>
        </div>
    )
}