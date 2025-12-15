import React, { useState } from "react";
import './Contact.css'
import gitImg from '../../assets/Icons/github.png'
import instaImg from '../../assets/Icons/instagram.png'
import linkdImg from '../../assets/Icons/linkedin.png'

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState<string | null>(null);

    const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST", headers: {  "Content-Type": "application/json",}, body: JSON.stringify({
            access_key: "0828fa83-0b9d-4fc3-9573-d862d7e23f6c",
            name: formData.name,
            email: formData.email,
            message: formData.message,
            }),
        });

        const result = await response.json();

        if (result.success) {
            setStatus("Message Sent!");
            setFormData({ name: "", email: "", message: "" });
        } else {
            setStatus("Error");
        }
    };

    return (
        <>
            <div className="Flex-container">
                <div className="Form">
                    <h2 id="Contact">Contact Me</h2>
                    <form onSubmit={handleSubmit} className="Contact">

                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/>

                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>

                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required/>

                        <button type="submit">Send Message</button>

                        {status && <p id="Contact">{status}</p>}
                    </form>
                </div>
               <div className="Social">
                    <a href="https://www.instagram.com/j.alexandre.jo" target="_blank">
                        <img src={instaImg} alt="Instagram Icon"></img>
                    </a>
                    <a href="https://github.com/Dishsoapy" target="_blank">
                        <img src={gitImg} alt="Github Icon"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/jaqortiz/" target="_blank">
                        <img src={linkdImg} alt="LinkedIn Icon"></img>
                    </a>
               </div>
            </div>
        </>
    );
};

export default Contact;