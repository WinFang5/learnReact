import { useEffect } from 'react';
import { createConnection } from './Chat';

export default function ChatRoom() {
  useEffect(() => {
    const connection = createConnection();
    console.log(connection)
    connection.connect();
    return () =>{
      connection.disconnect()
    }
  }, []);
  return <h1>欢迎来到聊天室！</h1>;
}
