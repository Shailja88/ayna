const WebSocket = require('ws');

// Create a WebSocket server on port 8080
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  // When a message is received, log it and echo it back
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    ws.send(message);  // Echo the message back to the client
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is running on ws://localhost:8080');
