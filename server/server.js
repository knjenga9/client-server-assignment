
const express = require("express");

const app = express();
const PORT = 3000;

// Allow the server to receive JSON messages
app.use(express.json());

// Test whether the server is running
app.get("/api", (req, res) => {
    res.json({
        status: "Online",
        message: "Server is running successfully!"
    });
});

// Receive and respond to client messages
app.post("/api/message", (req, res) => {
    const message = req.body.message;

    console.log("Message received:", message);

    res.json({
        status: "Success",
        receivedMessage: message,
        serverResponse:
            "Hello Client! Your message was received by the server."
    });
});

// Start the server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
