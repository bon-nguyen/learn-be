"use client"
import Character from "@/components/Character";
import ChatRoom from "@/components/ChatRoom";
import { useState } from "react";

import io from 'socket.io-client';
const socket = io.connect('http://localhost:4000');


export default function Home() {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');



  return (
    <main className="">
      {/* <ChatRoom
        username={username}
        setUsername={setUsername}
        room={room}
        setRoom={setRoom}
        socket={socket}
      /> */}
      <Character />


    </main>
  )
}
