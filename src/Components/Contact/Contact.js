import React, { useState } from "react";
import "./ContactStyle.css";
import { FcInTransit } from "react-icons/fc";
import headerLogo from "../../Image/header.png";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const API = "http://localhost:8080/sendcontactemail";

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [jobtypes, setJobtypes] = useState();
  const [message, setMessage] = useState();

  const sendmailContactInfo = () => {
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        jobtypes,
        message,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          toast.error(result.error, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {

          toast.success("Your contact e-mail has been sent", {
            position: toast.POSITION.TOP_CENTER,
          });

          setName("");
          setEmail("");
          setJobtypes("");
          setMessage("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container contact-section" id="contact">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
            <div className="contact-form-image">
              <img src={headerLogo} alt="header" />
            </div>
          </div>
        </Fade>
        <LightSpeed right>
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
            <div className="contact-form-design">
              <div className="text-center">
                <h5>Contact Us</h5>
                <span className="line"></span>
              </div>
              <form>
                <div className="contact-form mt-3">
                  <label className="form-lebel">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="contact-form mt-3">
                  <label className="form-lebel">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="contact-form mt-3">
                  <label className="form-lebel">Job Types:</label>
                  <select
                    type="text"
                    className="custom-select-tag"
                    value={jobtypes}
                    onChange={(e) => setJobtypes(e.target.value)}
                  >
                    <option>Tree Removal</option>
                    <option>Tree Trimming</option>
                    <option>Hedge Trimming</option>
                    <option>Stump Removal</option>
                    <option>Debris Removal</option>
                    <option>Junk Removal</option>
                    <option>Moving</option>
                    <option>House Clean-Out</option>
                    <option>Land Clearing</option>
                    <option>Lawn Service</option>
                    <option>Curb Side Pick-up</option>
                    <option>Abandoned Items Removal</option>
                    <option>Boat Removal</option>
                    <option>RV Removal</option>
                  </select>
                </div>

                <div className="contact-form mt-3">
                  <label className="form-lebel">Message</label>
                  <textarea
                    rows="8"
                    type="text"
                    className="form-control"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <div className="button-submit" onClick={sendmailContactInfo}>
                  <p>
                    Send
                    <FcInTransit
                      size={25}
                      style={{ marginLeft: 5, fontSize: 30 }}
                    />
                  </p>
                </div>
              </form>
            </div>
          </div>
        </LightSpeed>
      </div>

      <ToastContainer autoClose={8000} />
    </div>
  );
};

export default Contact;
