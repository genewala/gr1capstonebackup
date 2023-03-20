import React, { useState } from "react";
import "../css/connect.css";
import axiosClient from "../axios-client"
import axios from 'axios';


const Connect = () => {


const [inputName, setInputName] = useState("");
const [inputLast, setInputLast] = useState("");
const [inputEmail, setInputEmail] = useState("");
const [inputPhone, setInputPhone] = useState("");
const [inputMessage, setInputMessage] = useState("");

const handleInputName = (event) => {
  setInputName(event.target.value);
};

const handleInputLast = (event) => {
  setInputLast(event.target.value);
};
const handleInputEmail = (event) => {
  setInputEmail(event.target.value);
};

const handleInputPhone = (event) => {
  setInputPhone(event.target.value);
};

const handleInputMessage = (event) => {
  setInputMessage(event.target.value);
};



const handleSubmit = async (event) => {
  event.preventDefault();

  // console.log('Form submitted with value:', inputName);
  // console.log('Form submitted with value:', inputLast);
  // console.log('Form submitted with value:', inputEmail);
  // console.log('Form submitted with value:', inputPhone);
  // console.log('Form submitted with value:', inputMessage);

  const payload = {
    firstname: inputName,
    lastname: inputLast,
    email: inputEmail,
    phone: inputPhone, 
    message: inputMessage,
    
  }
  console.log(payload);

  // axios.post('http://127.0.0.1:8000/api/connection', payload).then(response =>{
  //   console.log(response)
  // }).then(error =>{
  //   console.log(error)
  // })




  // axiosClient.post('http://127.0.0.1:8000/api/connection', payload);
  // fetch('http://localhost:8000/api/connection', {
  //   method:'post',
  //   body:JSON.stringify(
  //     payload
  //   ),
  //   headers:{
  //     'Accept':'application/json',
  //     'Content-Type':'application/json',
  //   }
  // }).then(function(response){
  //   response.json().then(function(){
  //     console.log(response)
  //   })
  // })

    await axios
      .post("http://127.0.0.1:8000/api/connection", payload, {
        headers: { "Content-Type": "aplication/json" },
      })
      .then(function (resp) {
        console.log(resp.data);
      })
      .catch(function (err) {
        console.error(err.response.data);
      });


}

//   const res = await axios.post('http://127.0.0.1:8000/api/connection', useState);
  
//   if(res.data.status === 200)
//   {
//     console.log(res.data.message);
//   }
// };




  return (
    <>
      <section className="banner white">
        <img
          src="https://images.squarespace-cdn.com/content/v1/54b5d529e4b0a17414a81219/1620238882393-2TWAX8B4ONRCHLZKSCMI/Sherard-wedding-2021-5.jpg"
          alt=""
        />
        <div className="cover"></div>
        <h2>Let's Have a Talk!</h2>
      </section>

      <main className="connect--section">
        <div className="message">
          <h2>Work with us</h2>
          <p>
            Here at Leocadio's, we work with a limited number of couples each
            year who resonate with our design aesthetic and our approach to
            planning. Please take a moment to fill out the form below with as
            much detail as possible so we can learn more about your wedding and
            see if we might be a good fit together. We'll be in touch shortly to
            set-up a complimentary consultation to review your wedding plans and
            how we can help bring them to life. If we aren’t available for your
            date, we’ll let you know and will even recommend other talented
            wedding planners for you to work with.
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="name-col">
            <input type="text" placeholder="First Name" value={inputName} onChange={handleInputName} />
            <input type="text" placeholder="Last Name" value={inputLast} onChange={handleInputLast} />
          </div>
          <input type="email" placeholder="Email Address" value={inputEmail} onChange={handleInputEmail} />
          <input type="number" placeholder="Phone Number" value={inputPhone} onChange={handleInputPhone} />
          <textarea
            name="comment"
            id="comment-box"
            cols="30"
            rows="10"
            placeholder="Your Message"
            value={inputMessage} 
            onChange={handleInputMessage}
          ></textarea>
          <button className="btn primary-btn">Submit</button>
        </form>
      </main>
    </>
  );
};

export default Connect;
