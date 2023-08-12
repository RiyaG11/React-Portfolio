import React, {useState} from "react";
const Contact=()=>{
    const [name, setName] = useState("");
    const[email, setEmail]= useState("");
    const[subject, setSubject]= useState("");
    const[message, setMessage]= useState("");



    const getData = async()=>{
        let result = await fetch('https://react-portfolio-ll8z.onrender.com/addquery',{
            method:"post",
            body:JSON.stringify({name,email,subject,message}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        result=await result.json();
        console.warn(result)

    }
    return(
        <div className="container">
        <div className="contact">
            <div className="contact-left">
                <div className="contact-head">
                    <h1>Let's talk about everything!</h1>
                </div>
                <div className="contact-img">
                    <img className="con-img" alt="contact" src="https://preview.colorlib.com/theme/bootstrap/contact-form-16/images/undraw-contact.svg"></img>
                </div>

            </div>
            <div className="contact-right">

                <input type="text" className="formstyle" placeholder="Your Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <input type="text" className="formstyle" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="text" className="formstyle" placeholder="Subject" value={subject} onChange={(e)=>{setSubject(e.target.value)}}/>
                <textarea placeholder="Enter the Message" className="message" value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                <button className="formbtn" onClick={getData}>Submit</button>
            </div>

        </div>
        </div>
    );
}
export default Contact;