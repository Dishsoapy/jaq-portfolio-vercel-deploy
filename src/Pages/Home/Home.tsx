import './Home.css';
import myImage from '../../assets/Images/sprout-drawing.png'
import { useEffect, useState } from 'react';

export function Home(){
    const texts = ["Software Developer", "Novice Photographer",
        "Watch Collector", "Casual Gamer"];
    const [displayText, setDisplayText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];
        let typingSpeed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            if (!isDeleting && charIndex < currentText.length) {
                setDisplayText(currentText.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            } else if (isDeleting && charIndex > 0) {
                setDisplayText(currentText.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            } else if (!isDeleting && charIndex === currentText.length) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setTextIndex((textIndex + 1) % texts.length);
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex]);

    return(
        <div className='Home'>
            <h1>Dishsoap.dev</h1>
            <h2>
                {displayText}
                <span className="cursor">|</span>
            </h2>
            <img src={myImage} alt='Drawing made by my lovely girlfriend'></img>
            <p>Learning something new everyday </p>
        </div>
    )
}