import { useEffect, useState } from "react"

const Messages = ({ socket }) => {
    const [messagesReceived, setMessagesReceived] = useState([])

    useEffect(() => {
        socket.on('receive_message', (data) => {
            console.log("data", data)
            setMessagesReceived((state) => [
                ...state,
                {
                    message: data.message,
                    username: data.username,
                    __createdtime__: data.__createdtime__,
                },
            ]);
        })
        return () => socket.off('receive_message');

    }, [socket])

    function formatDateFromTimestamp(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleString();
    }
    return (
        <div>

        </div>
    )
}

export default Messages