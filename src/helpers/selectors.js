export function getAppointmentsForDay(state, day) {
  let res = [];
  const dayExists = state.days.find((apptDay) => apptDay.name === day);

  if (!state.appointments || !dayExists) {
    return res;
  }

  const apptId = dayExists.appointments;
  for (let id of apptId) {
    res.push(state.appointments[id]);
  }

  return res;
}

export function getInterview(state, interview) {
  const res = {};
  if (!interview) {
    return null;
  }

  res.student = interview.student;
  res.interviewer = state.interviewers[interview.interviewer];

  return res;
}

export function getInterviewersForDay(state, day) {
  let res = [];
  const dayExists = state.days.find((apptDay) => apptDay.name === day);

  if (!state.interviewers || !dayExists) {
    return res;
  }

  const intrId = dayExists.interviewers;
  for (let id of intrId) {
    res.push(state.interviewers[id]);
  }

  return res;
}
