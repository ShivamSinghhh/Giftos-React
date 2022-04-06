import axios from "axios";
import React, { useContext, useState } from "react";
import { Usercontext } from "../context/Usercontext";


export default function Contact() {

  const {data} = useContext(Usercontext)

  // console.log("data from contactus page :",data)
  
  const [form, setForm] = useState({ 
    username: data.username ,
    email: data.email, 
    mobile: "",
    message: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
    // console.log("handle change is working fine.");
  };

  const handleSubmit = (event) => {
    event.preventDefault();    

    form.mobile.length === 10 ?  form.message.length > 0 ? axios.post("http://localhost:3333/usermessage", form) : window.alert("message required") : window.alert("Mobile number should be of 10 digits.")

    //---- after submission of data, clearing the mobile and message box----//
    setForm({ 
      username: data.username ,
      email: data.email, 
      mobile: "",
      message: "",
    });

  };

  return (
    <>
      <h2 className="title left">CONTACT US</h2>
      <div className="contact-container">
        <div className="left">
          <img src="./images/google.JPG" alt="gift img" />
        </div>
        <div className="right">
          <form id="cotact-form" onSubmit={handleSubmit} action="">
            <input
              name="username"
              type="text"
              defaultValue={data.username}            
              placeholder="Name"
            />
            <input
              name="email"
              defaultValue={data.email}           
              type="email"           
              placeholder="Email"
            />
            <input
              name="mobile"              
              type="number"
              value={form.mobile}
              onChange={handleChange}
              placeholder="Phone"
            />

            <textarea
              name="message"
              value={form.message}
              id=""
              cols="30"
              rows="10"
              onChange={handleChange}
              placeholder="Message"
            ></textarea>
            <button type="submit" id="send-btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
