import { useState, useEffect } from "react";
import axios from "axios";

export function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    interviewers: {},
    appointments: {},
  });

  const setDay = (day) => setState({ ...state, day });

  function countSpots(day, appt) {
    let count = 0;
    for (let id of day.appointments) {
      if (!appt[id].interview) {
        count++;
      }
    }
    return count;
  }

  function updateSpots(state, dayName, appts) {
    const day = state.days.find((day) => day.name === dayName);
    const spots = countSpots(day, appts);

    const newDay = { ...day, spots };
    const newDays = state.days.map((curr) =>
      curr.name === dayName ? newDay : curr
    );

    return newDays;
  }

  function bookInterview(id, interview) {
    console.log(id, interview);
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.put(`api/appointments/${id}`, { interview }).then(() => {
      const days = updateSpots(state, state.day, appointments);
      setState({ ...state, appointments, days });
    });
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.delete(`api/appointments/${id}`).then(() => {
      const days = updateSpots(state, state.day, appointments);
      setState({ ...state, appointments, days });
    });
  }

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/interviewers"),
      axios.get("/api/appointments"),
    ]).then((res) => {
      setState((prev) => ({
        ...prev,
        days: res[0].data,
        interviewers: res[1].data,
        appointments: res[2].data,
      }));
    });
  }, []);

  return { state, setDay, bookInterview, cancelInterview };
}
