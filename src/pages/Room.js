import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const Room = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");

  /*useEffect(() => {
    FirebaseError.firestore()
      .collection("messages")
      .onsnapshot((snapshot) => {});
  }, []);*/

  return (
    <React.Fragment>
      <h1>Room</h1>
      <ul>
        <li>sample user : sample message</li>
      </ul>
      <form>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">送信</button>
      </form>
      <button onClick={() => signOut(auth)}>Logout</button>
    </React.Fragment>
  );
};

export default Room;
