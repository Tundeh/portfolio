import React from "react";
import "./index.scss";
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }
  render(){
    const { status } = this.state;
  return (
    <div className="contact" id="contact">
      <h1>Let's Work Together</h1>
      <p>
  {  }Think i'm qualified for a position <br></br> or you have a job for me? contact me!
      </p>
      <div className="contact__inner">
        <form autoComplete="off" onSubmit={this.submitForm} className="contact__form" action="https://formspree.io/mzbkzdpz" method="POST">
          <div className="name__email">
            <div className="contact__name">
              <div>
                <label>Your Name</label>
                <input placeholder="Enter Name" name="name" required minLength="3"></input>
              </div>
            </div>

            <div className="contact__email">
              <div>
                <label>Email Address</label>
                <input placeholder="Enter Your Email" name="email"
                required type="email" ></input>
              </div>
            </div>
          </div>

          <div className="contact__message">
            <div>
              <label>Your Message</label>
              <input placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this" name="message" required minLength="15"></input>
            </div>
          </div>
          {status==="SUCCESS" ? <div className="form__response"><h2>Thanks</h2></div> : <button className="form__button" type="submit">
            <div>
              <span>SHOOT</span>
              <span>
                <svg
                  width="143"
                  height="16"
                  viewBox="0 0 143 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M142.707 8.70711C143.098 8.31658 143.098 7.68342 142.707 7.29289L136.343 0.928932C135.953 0.538408 135.319 0.538408 134.929 0.928932C134.538 1.31946 134.538 1.95262 134.929 2.34315L140.586 8L134.929 13.6569C134.538 14.0474 134.538 14.6805 134.929 15.0711C135.319 15.4616 135.953 15.4616 136.343 15.0711L142.707 8.70711ZM0 9H142V7H0V9Z"
                    fill="#4831D4"
                  />
                </svg>
              </span>
            </div>
          </button>}
          {status==="ERROR"? <div className="form__error">Unsuccessful, Try Again</div>: <></>}
        </form>
      </div>
    </div>
  );}
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
};

export default Contact;
