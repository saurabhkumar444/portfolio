import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Your name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea rows={6} placeholder="Type your message here..."></textarea>
        <button
          className="btn"
          // onClick={() => {
          //   alert(
          //     "Due to some technical issue message not send, please connect the below number."
          //   );
          // }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
