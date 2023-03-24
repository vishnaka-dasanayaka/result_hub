import React from 'react';
import "./createpopup.css";


function CreatePopup(props) {
  return (props.trigger)?(
    <div className='popup'>
      <div className="popup-inner">
        <br />
        <h2>create</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, aperiam. Et illo, sunt quae aliquam voluptatibus dolor unde ipsam totam quas repellendus accusamus quis impedit nobis! Dignissimos, fugit. Error, fugit!</p>
        <button className="close-btn"onClick={() => {props.setTrigger(false)}}>close</button>
        { props.children }
      </div>
    </div>
  ) : ""
}

export default CreatePopup
