// usePythonLogsWS.js
import { useEffect, useState, useRef } from 'react';

/**
 * Hook personnalisé pour gérer la connexion WebSocket
 * et le flux de logs en direct depuis le script Python.
 *
 * @param {string} wsUrl - URL du WebSocket, ex: "ws://localhost:3000"
 * @returns {{
 *   logs: string[],
 *   payloads: any[],
 *   error: string|undefined,
 *   clearLogs: () => void,
 *   clearPayloads: () => void
 * }}
 */
export function usePythonLogsWS(wsUrl) {
  const [logs, setLogs] = useState([]);
  const [payloads, setPayloads] = useState([]);
  const [error, setError] = useState();
  const socketRef = useRef(null);

  useEffect(() => {
    const socket = new WebSocket(wsUrl);
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("WebSocket connected");
    };

    socket.onmessage = (evt) => {
      try {
        const data = JSON.parse(evt.data);
        if (data.type === 'PYTHON_LOG') {
          setLogs(prev => [...prev, data.payload]);
        } else if (data.type === 'PYTHON_ERR') {
          setLogs(prev => [...prev, "ERR: " + data.payload]);
        } else if (data.type === 'PYTHON_END') {
          setLogs(prev => [...prev, "Python terminé, code=" + data.payload]);
        } else if (data.type === 'PYTHON_PAYLOAD') {
          // On stocke ce payload dans un tableau, pour en avoir plusieurs
          if (Array.isArray(data.payload)) {
            setPayloads(prev => [...prev, ...data.payload]);
          } else {
            setPayloads(prev => [...prev, data.payload]);
          }
        }
      } catch (err) {
        console.error("Erreur parsing message WS:", err);
        setError("Erreur parsing WS message: " + String(err));
      }
    };

    socket.onerror = (err) => {
      console.error("WS error:", err);
      setError("WS error: " + JSON.stringify(err));
    };

    socket.onclose = () => {
      console.log("WS fermé");
    };

    return () => {
      socket.close();
    };
  }, [wsUrl]);

  function clearLogs() {
    setLogs([]);
  }

  function clearPayloads() {
    setPayloads([]);
  }

  return {
    logs,
    payloads,
    error,
    clearLogs,
    clearPayloads,
  };
}
