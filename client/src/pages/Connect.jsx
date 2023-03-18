import React from "react";
import "../css/connect.css";

const Connect = () => {
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
        <form className="contact-form">
          <div className="name-col">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number" />
          <textarea
            name="comment"
            id="comment-box"
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button className="btn primary-btn">Submit</button>
        </form>
      </main>
    </>
  );
};

export default Connect;
