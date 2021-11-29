import React from "react";
import logo from "./images/Faith-Logo-Square-2.jpg";
import "./App.css";

function App() {
  const logoDimension = "70px;";
  return (
    <>
      <main className="App">
        <header className="App-header">
          <h1>Sign Ups & Links</h1>
          <p className="date">November 28, 2021: First Sunday of Advent</p>
        </header>
        <a
          href="https://faithecc.breezechms.com/form/Worship_Check_In83"
          target="_blank"
          rel="noreferrer"
          className="action-link"
        >
          Tap Here to Check In
        </a>
        <br />
        <a
          href="https://faithecc.breezechms.com/give/online"
          target="_blank"
          rel="noreferrer"
          className="action-link"
        >
          Tap Here to Give
        </a>
        <br />
        <a
          href="https://faithecc.breezechms.com/form/3a08f4"
          target="_blank"
          rel="noreferrer"
          className="action-link"
        >
          Tap Here to sign up for Life at Faith
        </a>
        <h2>Announcements</h2>
        <section className="announcements-section">
          <p className="announcement">
            <strong>Ladies’ Christmas Party:</strong> Come celebrate the
            beginning of the Christmas season on December 3 at 6:00 pm. Women of
            all ages are invited! Ann Wolff is hosting the party at her house,
            and she will provide drinks and dessert. We invite you to bring a
            dish to share and a gift to exchange. Click{" "}
            <a
              href="https://faithecc.breezechms.com/form/fe6097"
              target="_blank"
              rel="noreferrer"
            >
              HERE
            </a>{" "}
            to sign up.
          </p>
          <p className="announcement">
            <strong>Community Night:</strong> Join us each Wednesday for
            activities and fellowship opportunities for all ages. Come at 5:15
            pm for <strong>Pizza</strong>. <strong>Childcare</strong>{" "}
            (nursery-PreK) is provided from 5:45-7:45 pm.{" "}
            <strong>Kids Club</strong> (K-6th grade) and{" "}
            <strong>412 Youth</strong> (7th-12th grade) meet from 6:00-7:30 pm.{" "}
            <strong>Abide</strong> (adults) meets from 6:00-7:00pm.{" "}
            <strong>Choir</strong> gathers to rehearse from 7:00-8:00pm.
          </p>
          <p className="announcement">
            <strong>Men’s Retreat:</strong> Attention all men of Faith — the
            Men’s Retreat at Covenant Point in the upper peninsula of Michigan
            will be held February 25-27, 2022. Please clear your calendar for
            this great annual event! Registration will take place in January to
            take advantage of the early-bird pricing of $120. Transportation
            will be provided—don’t miss this great time of recreation and
            fellowship!
          </p>
        </section>
        <div className="push"></div>
      </main>
      <footer>
        <img
          src={logo}
          alt="Faith Covenant Church Logo"
          height={logoDimension}
          width={logoDimension}
        />
        <a
          className="App-link"
          href="https://www.faithecc.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.faithecc.org
        </a>
      </footer>
    </>
  );
}

export default App;
