function connectUser() {
    document.getElementById("chat-box").innerHTML += "<p>Connecting to a random user...</p>";
    // WebSocket or WebRTC setup for connection will be here in the next steps
}

function disconnectUser() {
    document.getElementById("chat-box").innerHTML += "<p>You have disconnected.</p>";
    // Code to close connection will be added later
}

function sendMessage() {
    let message = document.getElementById("message").value;
    if (message) {
        document.getElementById("chat-box").innerHTML += `<p>You: ${message}</p>`;
        document.getElementById("message").value = "";
        // Code to send message over WebSocket will be added later
    }
}
