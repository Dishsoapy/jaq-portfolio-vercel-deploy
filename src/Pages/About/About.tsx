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
          Degree in Computer Science as of May 2023. My goal is to make
          meaningful projects where I can learn new technologies and hone my
          skills as a developer. That, and to make stuff that makes my life
          easier and has my friends say, "Damn Josh, that's pretty cool."
        </p>
        <p>...</p>
        <p>
          With that aside, my hobbies also include physical fitness (weight
          lifting, distance jogging, etc.), cooking, photography, and playing
          video games. I also like collecting watches, as in I like and buy
          things that I think look cool.
        </p>
      </div>
    </div>
  );
}
