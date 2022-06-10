import React, { useState } from "react";

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  return <main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
    <form autoComplete="off">
      <input
        className="appointment__create-input text--semi-bold"
        name="name"
        type="text"
        placeholder="Enter Student Name"
        onChange={(event) => setStudent(event.target.value)}
      />
    </form>
    <InterviewerList
    interviewers={props.interviewers}
    onChange={props.onChange} 
    />
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button danger {/* your code goes here */}>Cancel</Button>
      <Button confirm {/* your code goes here */}>Save</Button>
    </section>
  </section>
</main>

}
