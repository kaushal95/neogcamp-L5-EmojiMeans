import "./styles.css";
import { React, useState } from "react";

const emojiDictionary = {
  "😓": "Disappointment",
  "🙄": "Disapproval",
  "🤩": "Fascinating",
  "🥺": "Pleading",
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};

const emojiList = Object.keys(emojiDictionary);

function App() {
  const [meaning, setMeaning] = useState("");
  const [emoji, setEmoji] = useState("");

  const clickHandler = (inputEmoji) => {
    setEmoji(inputEmoji);

    const emojiMeaning = emojiDictionary[inputEmoji];

    if (!emojiMeaning) {
      setMeaning("Oh oh!!..We don't have this emoji in our Dictionary");
    } else {
      setMeaning(emojiMeaning);
    }
  };

  return (
    <div className="App">
      <h2>Emoji Means?</h2>
      <input
        onChange={(e) => clickHandler(e.target.value)}
        value={emoji}
        placeholder="Search Emoji"
      ></input>
      {emoji ? (
        <h4>{meaning}</h4>
      ) : (
        <h4>Enter or select emoji to check Meaning</h4>
      )}

      {emojiList.map((emoji) => {
        return (
          <span key={emoji} onClick={() => clickHandler(emoji)}>
            {emoji}
          </span>
        );
      })}
      <footer className="footer">
        <div className="footer-text">{"Let's connect"}</div>
        <ul className="link-list">
          <li>
            <a
              href="https://twitter.com/Kaushal53362050"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/kaushal95"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/kaushal-kumar-019952170"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
export default App;
