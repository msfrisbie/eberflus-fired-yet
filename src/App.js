import { useEffect, useState } from "react";
import "./App.css";
import bears from "./bears.png";
import flus from "./flus.png";

function App() {
  const chicagoBearsEvents = [
    {
      eventDescriptor: "won a road game on Sunday",
      dateTime: "2021-12-26T00:00:00Z",
    },
    {
      eventDescriptor: "finished with a winning record",
      dateTime: "2018-12-16T00:00:00Z",
    },
    {
      eventDescriptor: "finished above .500",
      dateTime: "2018-12-16T00:00:00Z",
    },
    {
      eventDescriptor: "beat the Packers",
      dateTime: "2018-12-16T00:00:00Z",
    },
    {
      eventDescriptor: "made the playoffs",
      dateTime: "2020-01-05T00:00:00Z",
    },
    {
      eventDescriptor: "won a playoff game",
      dateTime: "2011-01-16T00:00:00Z",
    },
    {
      eventDescriptor: "won the division",
      dateTime: "2018-12-16T00:00:00Z",
    },
    {
      eventDescriptor: "made the Superbowl",
      dateTime: "2007-01-21T00:00:00Z",
    },
    {
      eventDescriptor: "won the Superbowl",
      dateTime: "1986-01-26T00:00:00Z",
    },
  ];

  const [selectedEvent, setSelectedEvent] = useState(chicagoBearsEvents[0]);
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });

  useEffect(() => {
    const startDate = new Date(selectedEvent.dateTime).getTime();

    const updateElapsedTime = () => {
      const currentTime = Date.now();
      let milliseconds = currentTime - startDate;

      const years = Math.floor(milliseconds / (365.25 * 24 * 60 * 60 * 1000));
      milliseconds %= 365.25 * 24 * 60 * 60 * 1000;

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
        days,
        hours,
        minutes,
        seconds,
        milliseconds,
      });
    };

    const intervalId = setInterval(updateElapsedTime, 1);
    return () => clearInterval(intervalId);
  }, [selectedEvent]);

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
    <>
      <div className="timer">
        <span>
          It's been&nbsp;
          <span className="fixed-time">{timeElapsed.years}</span> years,{" "}
          <span className="fixed-time">{timeElapsed.days}</span> days,{" "}
          <span className="fixed-time">{timeElapsed.hours}</span> hours,{" "}
          <span className="fixed-time">{timeElapsed.minutes}</span> minutes,{" "}
          <span className="fixed-time">
            {timeElapsed.seconds.toString().padStart(2, "0")}.
            {timeElapsed.milliseconds.toString().padStart(3, "0")}
          </span>{" "}
          seconds since the Bears&nbsp;
          <select
            value={selectedEvent.eventDescriptor}
            onChange={(e) =>
              setSelectedEvent(
                chicagoBearsEvents.find(
                  (event) => event.eventDescriptor === e.target.value
                )
              )
            }
            className="select"
          >
            {chicagoBearsEvents.map((event) => (
              <option key={event.dateTime} value={event.eventDescriptor}>
                {event.eventDescriptor}
              </option>
            ))}
          </select>
        </span>
      </div>
      <div className="App">
        <header className="App-header">
          <img src={flus} className="App-logo" alt="logo" />
          <h1>
            <div className="huge">YES</div>
            <div>Praise the Gods, Matt Eberflus has been fired.</div>
          </h1>
          <h2>Things he'll be working on in the unemployment line:</h2>
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
      <div class="snowflakes" aria-hidden="true">
        <div class="snowflake">
          <div class="inner">
            <img src={bears} className="snowflake-logo" alt="logo" />
          </div>
        </div>
        <div class="snowflake">
          <div class="inner">
            <img src={bears} className="snowflake-logo" alt="logo" />
          </div>
        </div>
        <div class="snowflake">
          <div class="inner">
            <img src={bears} className="snowflake-logo" alt="logo" />
          </div>
        </div>
        <div class="snowflake">
          <div class="inner">
            <img src={bears} className="snowflake-logo" alt="logo" />
          </div>
        </div>
        <div class="snowflake">
          <div class="inner">
            <img src={bears} className="snowflake-logo" alt="logo" />
          </div>
        </div>
        <div class="snowflake">
          <div class="inner">
            <img src={bears} className="snowflake-logo" alt="logo" />
          </div>
        </div>
        <div class="snowflake">
          <div class="inner">
            <img src={bears} className="snowflake-logo" alt="logo" />
          </div>
        </div>
        <div class="snowflake">
          <div class="inner">
            <img src={bears} className="snowflake-logo" alt="logo" />
          </div>
        </div>
        <div class="snowflake">
          <div class="inner">
            <img src={bears} className="snowflake-logo" alt="logo" />
          </div>
        </div>
        <div class="snowflake">
          <div class="inner">
            <img src={bears} className="snowflake-logo" alt="logo" />
          </div>
        </div>
        <div class="snowflake">
          <div class="inner">
            <img src={bears} className="snowflake-logo" alt="logo" />
          </div>
        </div>
        <div class="snowflake">
          <div class="inner">
            <img src={bears} className="snowflake-logo" alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
