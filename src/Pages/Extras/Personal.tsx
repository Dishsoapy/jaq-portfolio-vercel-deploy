import { useEffect, useState } from 'react';
import './Personal.css';
import jachyonImg from '../../assets/Images/jachyon.png'
import carImg from '../../assets/Images/car.png'
import selfImg from '../../assets/Images/self.png'
import raftingImg from '../../assets/Images/rafting.png'
import JCPennyImg from '../../assets/Images/jc-penny.png'
import coupleImg from '../../assets/Images/couple.png'

export function Personal(){

    const [gameType, setGameType] = useState(true);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setGameType(prev => !prev);
                setFade(true);
            }, 1000); 
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className='Personal'>
                    <div className="Section Watches">
                        <h3>Watch Collection</h3>
                        <ul>
                            <li>
                                <a href='https://www.chrono24.com/seiko/ref-sbxy089.htm' 
                                target='_blank'>Seiko Astron Nexter "Starry Sky</a>
                            </li>
                            <li>
                                <a href='https://www.chrono24.com/seiko/ref-ssk039j1.htm' 
                                target='_blank'>Seiko Presage Cocktail GMT</a>
                            </li>
                            <li>
                                <a href='https://www.chrono24.com/seiko/ref-sary095.htm' 
                                target='_blank'>Seiko Presage Mechanical Open Heart</a>
                            </li>
                            <li>
                                <a href='https://www.chrono24.com/swatch/mission-to-mars--imod3133.htm' 
                                target='_blank'>Swatch Moonswatch "Mission to Mars"</a>
                            </li>
                            <li>
                                <a href='https://www.tissotwatches.com/en-us/T1372071109101.html?srsltid=AfmBOoqaS-DqbEdVjoWBoHly-CiO5AZHab67AkVMeYcsGP1fwokAXXc2' 
                                target='_blank'>Tissot PRX 35MM</a>
                            </li>
                            <li>
                                <a href='https://www.watchoutz.com/products/seiko-x-monster-hunter-20th-anniversary-project-collaboration-mizutsune-limited-edition-quartz-chronograph?srsltid=AfmBOorTLwGVmLsWWZ2S3AmqqohMOvzSe47Gv10lij4RGkMNqetpHSeo' 
                                target='_blank'>Seiko X Monster Hunter "Mizutsune"</a>
                            </li>
                        </ul>
                    </div>

                    <div className="Section Games">
                        <div className='Inline-Header'>
                            <h3>Favorite </h3>
                            <h3 className={fade ? "fade-in" : "fade-out"}>
                                {gameType ? "Video" : "Board"}
                            </h3>
                            <h3> Games</h3>
                        </div>
                        <ul>
                            <li className='Video-Game'>The Elder Scrolls V: Skyrim</li>
                            <li className='Video-Game'>The Persona Series</li>
                            <li className='Video-Game'>The Monster Hunter Series</li>
                            <li className='Video-Game'>Metaphor: ReFantazio</li>
                            <li className='Video-Game'>Terraria</li>
                            <li className='Video-Game'>Helldivers 2</li>
                            <li className='Video-Game'>Ready or Not</li>
                            <li className='Video-Game'>A whole slew of Visual Novels</li>
                            <li className='Board-Game'>Betrayal at House on the Hill</li>
                            <li className='Board-Game'>Boss Monster: The Dungeon Building Card Game</li>
                            <li className='Board-Game'>Catan (Colonist on Discord)</li>
                        </ul>
                    </div>
            </div>

            <div className="Section Gallery">
                <h3>Gallery</h3>
                <p>A sneak peak into my personal life</p>
                <div className='Images-Container'>
                    <a href='https://youtu.be/WdbRb2ksX7s?si=cC-XgkEeVYCLdRZ6' target='_blank' rel='noopener noreferrer'>
                        <img src={jachyonImg} 
                        alt='A picutre of myself edited on a half-life scientist standing next to chibi Agnes Tachyon'/>
                    </a>
                    <img src={raftingImg} alt='My Friends and I rafting in Colorado'/>
                    <img src={carImg} alt='A picture of my blue carolla hatchback'/>
                    <img src={selfImg} alt='A picture of myself'/>
                    <img src={JCPennyImg} alt='A JC Penny shoot with my friends'/>
                    <img src={coupleImg} alt='A picture of my girlfriend and I'/>
                </div>
            </div>
        </>
    )
}