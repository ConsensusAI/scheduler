export function getAppointmentsForDay(state, day) {
  let res = [];

  if (!state.appointments) {
    return res;
  }

  let apptArr = [];
  for (let el in state.days) {
    if (state.days[el].name === day) {
      apptArr = state.days[el].appointments;
    }
  }

  for (let id of apptArr) {
    if (state.appointments[id]) {
      res.push(state.appointments[id]);
    }
  }

  return res;
}
