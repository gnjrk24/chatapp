import React, { useContext, useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { collection, onSnapshot, addDoc } from "@firebase/firestore";
import { AuthContext } from "../AuthService";

const Room = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");

  const text = useEffect(() => {
    onSnapshot(collection(db, "messages"), (snapshot) => {
      const messages = snapshot.docs.map((doc) => {
        return doc.data();
      });
      setMessages(messages);
      console.log(messages);
    });
  }, []);

  const user = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(collection(db, "messages"), {
      content: value,
      user: user.displayName,
    });
  };
  const view = messages.map((messages, index) => {
    return [
      <li key="index">
        {messages.user}
        {messages.content}
      </li>,
    ];
  });
  return (
    <React.Fragment>
      <h1>Room</h1>
      <ul>{view}</ul>
      <form onSubmit={handleSubmit}>
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
