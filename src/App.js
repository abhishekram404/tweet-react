import React from "react";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <div className="main-div">
        <div className="top-div">
          <div className="profile-pic"></div>
          <div className="name">
            <div className="profile-name">{props.name}</div>
            <div className="user-name">{props.uname}</div>
          </div>
        </div>

        <div className="tweet-div">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          perferendis quibusdam a reiciendis, esse temporibus odio
          exercitationem blanditiis placeat! Molestiae. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Iure cupiditate officiis
          voluptates! Facere, perspiciatis? Quod, quidem! Pariatur consequuntur
          voluptates illo.
        </div>
        <div className="bottom-div">
          <div className="comment-button">
            <p className="icons">C</p>
          </div>
          <div className="retweet-button">
            <p className="icons">R</p>
          </div>
          <div className="like-button">
            <p className="icons">L</p>
          </div>
          <div className="share-button">
            <p className="icons">S</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
