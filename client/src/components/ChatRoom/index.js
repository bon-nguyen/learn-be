"use client"
import { useRouter } from 'next/navigation';
import Lottie from 'react-lottie';
import animationData from '@/json/test.json'
import { SpinePlayer } from '@esotericsoftware/spine-player';

const ChatRoom = ({ username, setUsername, room, setRoom, socket }) => {
    const router = useRouter();
    console.log("animationData", animationData)
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const joinRoom = () => {
        if (!!room && !!username) {
            socket.emit('join_room', {
                username, room
            })
            router.push("/chat");
        }
    }


    return (<div>

        <div className='grid place-content-center'>
            <Lottie options={defaultOptions}
                height={400}
                width={400}
            />
            <input
                placeholder='Username...'
                onChange={(e) => setUsername(e.target.value)} // Add this
            />
            <select
                onChange={(e) => setRoom(e.target.value)}
            >
                <option>-- Select Room --</option>
                <option value='javascript'>JavaScript</option>
                <option value='node'>Node</option>
                <option value='express'>Express</option>
                <option value='react'>React</option>
            </select>
            <button
                onClick={joinRoom}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Join room
            </button>
        </div>
    </div >)
}

export default ChatRoom