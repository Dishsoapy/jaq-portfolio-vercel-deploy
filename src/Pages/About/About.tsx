import "./About.css";
import mamboGif from "../../assets/Gifs/mambo.gif";

export function About() {
  return (
    <div className="About">
      <div className="Inline">
        <img src={mamboGif} alt="Mambo gif" />
        <h2 id="My-Name">My name is Jaq Alexandre Joshua Ortiz</h2>
        <img src={mamboGif} alt="Mambo gif" />
      </div>
      <h3 id="title">Software Developer</h3>
      <div className="Description">
        <p>
          I graduated from the University of Las Vegas Nevada with my Bachelors
          Degree in Computer Science as of May 2023. My goal is to keep on
          making meaningful projects where I can learn something and hone my
          skills as a developer. That, and to make stuff that makes my life
          easier and has my friends say, "Damn Josh, that's pretty cool."
        </p>
        <p>...</p>
        <p>
          Also, given the current state of Software Developement at the time of
          writing this, I want to clarify that{" "}
          <span id="NoVibes">I do not vibe code.</span> Don't get me wrong, I
          think AI is a fantastic tool that we have at our disposal. However, I
          believe it should used as an assistive tool, especially for seasoned
          developers/engineers who already know what their doing. So until I've
          garnered enough experience to be worthy of using AI as a part of my
          workflow, I will venture forth with good 'ol Stack Overflow and
          YouTube tutorials.
        </p>
      </div>
    </div>
  );
}
