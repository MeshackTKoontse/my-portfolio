import { useState, useEffect, useRef } from "react";
import classes from "./ContactForm.module.css";
const ContactForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredSubject, setEnteredSubject] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [emailBlurred, setEmailIsBlurred] = useState(false);
  const [nameBlurred, setNameIsBlurred] = useState(false);
  const [subjectBlurred, setSubjectBlurred] = useState(false);
  const [messageBlurred, setMessageIsBlurred] = useState(false);

  const [emailResponse, setEmailResponse] = useState("");

  const [formIsValid, setFormIsValid] = useState(false);
  const [error, setError] = useState(false);

  const nameBlurHandler = (e) => {
    setNameIsBlurred(true);
  };
  const emailBlurHandler = (e) => {
    setEmailIsBlurred(true);
  };
  const subjectBlurHandler = (e) => {
    setSubjectBlurred(true);
  };
  const messageBlurHandler = (e) => {
    setMessageIsBlurred(true);
  };
  useEffect(() => {
    if (
      enteredName !== "" &&
      enteredEmail.includes("@") &&
      enteredSubject !== "" &&
      enteredMessage !== ""
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredName, enteredEmail, enteredSubject, enteredMessage]);

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const subjectChangeHandler = (e) => {
    setEnteredSubject(e.target.value);
  };

  const messageChangeHandler = (e) => {
    setEnteredMessage(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (formIsValid) {
      const sendMail = async () => {
        const data = {
          name: enteredName,
          subject: enteredSubject,
          email: enteredEmail,
          message: enteredMessage,
        };

        const response = await fetch(`/api/send-mail`, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        // const info = await response.json();
        // console.log(info);

        return await response.json(); // parses JSON response into native JavaScript objects
      };
      sendMail();
      setEmailResponse("OK");
      setEnteredName("");
      setEnteredEmail("");
      setEnteredSubject("");
      setEnteredMessage("");
      setEmailIsBlurred(false);
      setNameIsBlurred(false);
      setSubjectBlurred(false);
      setMessageIsBlurred(false);
      setIsLoading(false);
    }
  };

  return (
    <div className={classes.bg}>
      <section id="contact-me" className={classes.section}>
        <div className="container">
          <h4 className="pt-5 text-center text-lg-start pb-3 heading">
            Contact us
          </h4>

          <div className="col-lg-6 col-12 mx-auto">
            <div className="card border-0 shadow-md p-3">
              <form action="/" method="POST" onSubmit={submitHandler}>
                <h5 className="text-center">Send mail</h5>
                {emailResponse == "OK" && (
                  <div className="text-center alert alert-success">
                    <p>Email sent, we will reply you soon!</p>
                  </div>
                )}
                <div
                  className={enteredName == "" && nameBlurred && classes.error}
                >
                  <label htmlFor="name">Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="mail[name]"
                    id="name"
                    onBlur={nameBlurHandler}
                    onChange={nameChangeHandler}
                    value={enteredName}
                  />
                </div>
                <div
                  className={
                    enteredEmail == "" && emailBlurred && classes.error
                  }
                >
                  <label htmlFor="email">Email</label>
                  <input
                    className="form-control"
                    type="email"
                    name="mail[email]"
                    id="email"
                    onBlur={emailBlurHandler}
                    onChange={emailChangeHandler}
                    value={enteredEmail}
                  />
                </div>
                <div
                  className={
                    enteredSubject == "" && subjectBlurred && classes.error
                  }
                >
                  <label htmlFor="name">Subject</label>
                  <input
                    className="form-control"
                    onBlur={subjectBlurHandler}
                    type="text"
                    onChange={subjectChangeHandler}
                    name="mail[subject]"
                    id="name"
                    value={enteredSubject}
                  />
                </div>
                <div
                  className={
                    enteredMessage == "" && messageBlurred && classes.error
                  }
                >
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    name="mail[message]"
                    onBlur={messageBlurHandler}
                    onChange={messageChangeHandler}
                    id="message"
                    cols="30"
                    rows="5"
                    value={enteredMessage}
                    defaultValue={enteredMessage}
                  ></textarea>
                </div>
                <div className="card skill-card border-0 mt-3 d-grid gap-2 col-12 col-lg-3 mx-auto bg-0">
                  <button
                    className={!formIsValid ? "disabled mx-auto" : " mx-auto"}
                    disabled={!formIsValid}
                  >
                    {!isLoading ? "submit" : "sending..."}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ContactForm;
