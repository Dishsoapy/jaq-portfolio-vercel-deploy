import './About.css';
import mamboGif from '../../assets/Gifs/mambo.gif'

export function About() {
    return (
        <div className='About'>
            <div className="Inline">
                <img src={mamboGif} alt="Mambo gif"/>
                <h2 id='My-Name'>My name is Jaq Alexandre Joshua Ortiz</h2>
                <img src={mamboGif} alt="Mambo gif"/>
            </div>
                <h3 id='title'>Aspiring Software Engineer</h3>
            <div className='Description'>
                <p>I graduated with my Bachelors of Science in Computer Science</p>
                <p>from the <a id='UNLV' href='https://www.unlv.edu' target='_blank' rel='noopener noreferrer'>University of Las Vegas Nevada</a> as of May 2023.</p>
                <p>My goal as a developer is to create good looking web pages and</p>
                <p>expand my knowledge and skillset in front-end developement</p>
                <p>...</p>
                <p>Also might be worth mentioning given how programming has changed over the past few years</p>
                <p id='Novibes'>I am not a vibe coder</p>
                <p>I'm not against using AI to help with the developement process, but I believe</p>
                <p>that a developer should be actively involved in the developement process (actually write some code)</p>
                <p>instead of <a id='VibeCoding' href='https://www.reddit.com/r/OutOfTheLoop/comments/1jfwxxw/whats_up_with_vibe_coding/' target='_blank' rel='noopener noreferrer'
                >whispering sweet nothings to ChatGPT</a> in the hopes of generating something functional.</p>
            </div>
        </div>
    )
}