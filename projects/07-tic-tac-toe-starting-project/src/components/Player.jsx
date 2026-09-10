import { useState } from "react";

export default function Player({initialName, symbol}) {
  const [playerName, setPlayername] = useState(initialName);
    const[isEditing, setIsEditing] = useState(false);

    function handleEditClick(clickedButton){
        setIsEditing(editing => !editing); 
    }
    
    function handleChange(event) {
      console.log(event);
      setPlayername(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    // let buttonCaption = 'Save'
    if (isEditing) {
        editablePlayerName = (
        <input type="text" required value={playerName} onChange={handleChange}/>
        );
    }
    return(
          <li>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'} </button>
          </li>
    );
}