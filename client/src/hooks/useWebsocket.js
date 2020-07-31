import { w3cwebsocket as W3CWebSocket } from "websocket";
import { useEffect, useState } from "react";

export default function useWebsocket() {
  const [client, setClient] = useState(null);

  useEffect(() => {
    setClient(new W3CWebSocket("ws://127.0.0.1:8080"));
  }, []);

  useEffect(() => {
    if (client) {
      client.onopen = () => {
        console.log("WebSocket Client Connected");
      };
      client.onmessage = (message) => {
        const data = JSON.parse(message.data);
        console.log(data);
      };
    }
  }, [client]);

  return {};
}
