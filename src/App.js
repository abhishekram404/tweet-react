import React from 'react';
import './App.css';

function App(props) {
  return (
    <div className="main-div">
			<div className="top-div">
				<div className="profile-pic"></div>
				<div className="name">
					<div className="profile-name">{props.name}</div>
					<div className="user-name">{props.uname}</div>
				</div>
			</div>

			<div className="tweet-div">{props.tweet}</div>
			<div className="bottom-div">
				<div className="comment-button">
					
				</div>
				<div className="retweet-button">
					
				</div>
				<div className="like-button">
					
				</div>
				<div className="share-button">
				

				</div>
			</div>
    </div>
  );
}

export default App;
