import React from "react";
import { useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import emailjs from "@emailjs/browser";
import "../assets/css/public.css";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      // service id, template id and your public key, get these by registering on EmailJs
      .sendForm(
        "service_8cbywfg",
        "template_95iwrur",
        form.current,
        "eGHI--YjaV1RSWNPI"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <motion.div
      className="flex flex5 p-5 justify-center"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ y: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <div className="form-section d-sm-flex align-items-center justify-content-center">
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <ul style={{ listStyle: "none" }} className="p-4">
              <li className="m-3 shadow-sm">
                <input
                  className="form-control form-class"
                  placeholder="Name"
                  type="text"
                  name="name"
                  required
                />
              </li>
              <li className="m-3 shadow-sm">
                <input
                  className="form-control form-class"
                  placeholder="Email"
                  type="email"
                  name="email"
                  required
                />
              </li>
              <li className="m-3 shadow-sm">
                <input
                  placeholder="Subject"
                  className="form-control form-class"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li className="m-3 shadow-sm">
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                  className="form-control form-class"
                ></textarea>
              </li>
              <li>
                <input
                  type="submit"
                  className="btn-custom bg-sky-500 fw-bold m-3 rounded-md"
                  value="SEND"
                />
              </li>
            </ul>
          </form>
        </div>
        <div>
          <Player
            src="https://assets10.lottiefiles.com/packages/lf20_u25cckyh.json"
            className="player d-md-none d-lg-block"
            loop
            autoplay
            style={{ maxHeight: "300px", maxWidth: "300px" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
