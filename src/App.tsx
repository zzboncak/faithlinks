import React, { useEffect, useState } from "react";
import logo from "./images/Faith-Logo-Square-2.jpg";
import "./App.css";
import { generateDate } from "./utilities";
import sanityClient from "./client";
import { Link, LinkProps } from "./components/Link";
import BlockContent from "@sanity/block-content-to-react";
import { Announcement } from "./components/announcement";

type DocumentData = {
  pageTitle: string;
  sundayTitle: string;
};

function App() {
  const logoDimension = "70px;";
  const dateText = generateDate();
  const [links, setLinks] = useState<LinkProps[]>([]);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [documentData, setDocumentData] = useState<DocumentData>();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "links" && active] {
          displayText,
          url
        }`
      )
      .then((data) => setLinks(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "announcements" && active] | order(priority) {
          announcementTitle,
          announcementContent
        }`
      )
      .then((data) => setAnnouncements(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "documentData"] {
          pageTitle,
          sundayTitle
        }`
      )
      .then((data) => setDocumentData(data[0]))
      .catch(console.error);
  }, []);

  return (
    <>
      <main className="App">
        <header className="App-header">
          <h1>{documentData?.pageTitle}</h1>
          <p className="date">
            {dateText}: {documentData?.sundayTitle}
          </p>
        </header>
        {links.length > 0 &&
          links.map(({ displayText, url }, i) => (
            <Link displayText={displayText} url={url} key={i} />
          ))}
        <h2>Announcements</h2>
        <section className="announcements-section">
          {announcements.length > 0 &&
            announcements.map((announcement, i) => (
              <React.Fragment key={i}>
                <div className="announcement">
                  <strong>{announcement.announcementTitle}</strong>
                  <BlockContent blocks={announcement.announcementContent} />
                </div>
              </React.Fragment>
            ))}
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
