import React from "react";

function Contact() {
  return (
    <div className="contact-container">
      <h3 className="heading">CONTACTUS</h3>
      <p>
        Search by image now supports video! Upload an image or video and find
        visually similar files.Search by image now supports video! Upload an
        image or video and find visually similar files.
      </p>
      <h5>Contact us directly</h5>
      <div className="contact-directly">
        <div className="call-us">
          <i class="fa fa-phone" aria-hidden="true"></i>
          <div className="ph-num">86800 00577 , 86800 00588</div>
        </div>
        <div>OR</div>
        <div className="email-us">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <div className="mail">bodytech.fitclub@gmail.com</div>
        </div>
      </div>
      <button className="contact-btn">Send Message</button>
    </div>
  );
}

export default Contact;
