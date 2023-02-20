import React, { useState } from "react";
import "./FeedbackStyle.css";
import { FcInTransit } from "react-icons/fc";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Feedback = () => {
  const API = "http://localhost:8080/sendfeedbackemail";

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [comment, setComment] = useState();

  const sendmailCFeedbackInfo = () => {
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        comment,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          toast.error(result.error, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {

          toast.success("Your feedback e-mail has been sent", {
            position: toast.POSITION.TOP_CENTER,
          });

          setName("");
          setEmail("");
          setComment("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className="container feedback-section" id="feedback">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
            <div className="feedback-form-image">
              <img
                src="https://25913880.fs1.hubspotusercontent-eu1.net/hub/25913880/hubfs/Imported_Blog_Media/1-feedback-descriptive-2.jpg?width=600&height=400&name=1-feedback-descriptive-2.jpg"
                alt="feedback-form-image"
              />
            </div>
          </div>
        </Fade>
        <LightSpeed right>
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
            <div className="feedback-form-design">
              <div className="text-center">
                <h5>Feedback</h5>
                <span className="line"></span>
              </div>
              <form>
                <div className="feedback-form mt-3">
                  <label className="form-lebel">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="feedback-form mt-3">
                  <label className="form-lebel">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="feedback-form mt-3">
                  <label className="form-lebel">Comment</label>
                  <textarea
                    rows="8"
                    type="text"
                    className="form-control"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </div>

                <div className="button-submit" onClick={sendmailCFeedbackInfo}>
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

export default Feedback;
