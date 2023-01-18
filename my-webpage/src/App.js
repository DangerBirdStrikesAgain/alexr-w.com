import './App.css';
import React from "react";

function App() {
  return (
    <div className="Page">
        <img src={require("./myphoto.jpeg")} className="myPicture" alt = {"Me, Alex"} />
        <section className = "Name">
          Alex Riddell-Webster
        </section>
        <section className="Icons">
          <a href="https://github.com/DangerBirdStrikesAgain"><img src={require("./github.png")} className="Icon" alt = {"GitHub"} /></a>
          <a rel="me" href="https://infosec.exchange/@alexRW"><img src={require("./mastodon.png")} className="Icon" alt = {"Mastodon"} /></a>
          <a href="https://twitter.com/AlexRW_"><img src={require("./twitter.png")} className="Icon" alt = {"Twitter"} /></a>        

        </section>
        <section className="Text">
          I'm a Computer Scientist, rower and coffee enthusiast. <br></br>
          My website is currently under construction and will be updated soon :)
        </section>
    </div>
  );
}

export default App;
