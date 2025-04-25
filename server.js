const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 3000 });

console.log("WebSocket server started on port 3000");

server.on("connection", (ws) => {
    console.log("A user connected");

    ws.on("message", (message) => {
        const textMessage = message.toString(); // Convert Buffer to text
        console.log("Received:", textMessage); // Debugging message log

        // Broadcast message to all connected clients
        server.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(textMessage); // Send text instead of binary
            }
        });
    });

    ws.on("close", () => {
        console.log("A user disconnected");
    });
});
