import { useState, useEffect } from "react";
function App() {
  const [timePassed, setTimePassed] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const startDate = new Date("2025-11-07T00:00:00");
    const updateTimer = () => {
      const now = new Date();
      const diff = now - startDate;
      if (diff < 0) {
        setTimePassed({
          months: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }
      const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimePassed({
        months: months,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    };
    updateTimer();
    const interval = setInterval(() => {
      updateTimer();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "2rem",
          backgroundColor: "#000",
          color: "white",
        }}
      >
        <h1>7/11/2025 12:00 AM</h1>
        <h1>Time Passed Since That Day</h1>
        <h1>
          {timePassed.months.toString().padStart(2, "0")} :{" "}
          {timePassed.days.toString().padStart(2, "0")} :{" "}
          {timePassed.hours.toString().padStart(2, "0")} :{" "}
          {timePassed.minutes.toString().padStart(2, "0")} :{" "}
          {timePassed.seconds.toString().padStart(2, "0")}
        </h1>
      </div>
    </>
  );
}

export default App;
