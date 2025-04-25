const socket = new WebSocket("ws://localhost:3000");

document.getElementById("messageInput").addEventListener("keypress", (event) => {
    if (event.key === "Enter") sendMessage();
});

function sendMessage() {
    const message = document.getElementById("messageInput").value;
    if (message.trim() !== "") {
        socket.send(message);
        document.getElementById("messageInput").value = "";
    }
}

socket.onmessage = (event) => {
    const li = document.createElement("li");
    li.textContent = event.data;
    document.getElementById("messages").appendChild(li);
};
