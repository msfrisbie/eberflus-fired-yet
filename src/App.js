import { useEffect, useState } from "react";
import "./App.css";
import flus from "./flus.png";

function App() {
  // State to hold the elapsed time in various units
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });

  useEffect(() => {
    // Get the start date in milliseconds (January 1, 2010)
    const startDate = new Date("2021-12-26T00:00:00Z").getTime();

    // Function to update the elapsed time in different units
    const updateElapsedTime = () => {
      const currentTime = Date.now();
      let milliseconds = currentTime - startDate;

      const years = Math.floor(milliseconds / (365.25 * 24 * 60 * 60 * 1000));
      milliseconds %= 365.25 * 24 * 60 * 60 * 1000;

      const months = Math.floor(milliseconds / (30 * 24 * 60 * 60 * 1000));
      milliseconds %= 30 * 24 * 60 * 60 * 1000;

      const days = Math.floor(milliseconds / (24 * 60 * 60 * 1000));
      milliseconds %= 24 * 60 * 60 * 1000;

      const hours = Math.floor(milliseconds / (60 * 60 * 1000));
      milliseconds %= 60 * 60 * 1000;

      const minutes = Math.floor(milliseconds / (60 * 1000));
      milliseconds %= 60 * 1000;

      const seconds = Math.floor(milliseconds / 1000);
      milliseconds %= 1000;

      setTimeElapsed({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
        milliseconds,
      });
    };

    // Set an interval to update the elapsed time every millisecond
    const intervalId = setInterval(updateElapsedTime, 1);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Has Matt Eberflus Been Fired Yet?",
          text: "Tracking page for Matt Eberflus firing. Don't hold your breath. #savecaleb",
          url: window.location.href,
        });
        console.log("Website shared successfully");
      } catch (error) {
        console.error("Error sharing the website:", error);
      }
    } else {
      alert("Your browser doesn't support the Web Share API.");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={flus} className="App-logo" alt="logo" />
        <h1>
          <div className="huge">NO</div>
          <div>Matt Eberflus has not been fired yet.</div>
        </h1>
        <h2>Things he's busy with instead of winning football games:</h2>
        <div>Refining the HITS principle</div>
        <div>Looking inward</div>
        <div>Developing complementary football strategies</div>
        <div>Searching for the "why's"</div>
        <div>Focusing on the game plan</div>
        <div>Going back to look at the tape</div>
        <div>Seeing how it goes</div>
        <div>Executing and preparing</div>
        <div>Working on fundamentals and process</div>
        <div>Evaluating everything and all phases</div>
        <div>Staying the course</div>
        <div>Taking it one day at a time</div>
        <div>Visiting the barber 3x/week</div>
        <div>Keeping the team on track</div>
        <div>Reinforcing discipline and focus</div>
        <div>Assessing player performance</div>
        <div>Reviewing and refining strategies</div>
        <div className="timer">
          It's been&nbsp;
          <span className="fixed-time">{timeElapsed.years}</span> years,{" "}
          <span className="fixed-time">{timeElapsed.months}</span> months,{" "}
          <span className="fixed-time">{timeElapsed.days}</span> days,&nbsp;
          <span className="fixed-time">{timeElapsed.hours}</span> hours,{" "}
          <span className="fixed-time">{timeElapsed.minutes}</span> minutes,{" "}
          <span className="fixed-time">
            {timeElapsed.seconds.toString().padStart(2, "0")}.
            {timeElapsed.milliseconds.toString().padStart(3, "0")}
          </span>{" "}
          seconds since the Bears won a road game on Sunday.
        </div>

        <div>
          <button className="share" onClick={handleShare}>
            #savecaleb
          </button>
        </div>

        <a className="footer" href="https://mattfriz.com">
          mattfriz.com
        </a>
      </header>
    </div>
  );
}

export default App;
