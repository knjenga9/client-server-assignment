# Client-Server Application

## 1. Project Overview

This project implements a simple client-server application on a local machine using Docker. It demonstrates communication between a client and a server, where the client sends a message and the server processes the request and returns a response.

## 2. Technologies Used

- HTML, CSS and JavaScript for the client interface
- Node.js and Express.js for server-side processing
- Nginx for serving the client interface and forwarding API requests
- Docker for containerizing the client and server
- Docker Compose for running both services together

## 3. System Architecture

The application uses a layered architecture consisting of:

1. **Presentation Layer:** The web interface through which users enter and send messages.
2. **Communication Layer:** HTTP requests and responses, with Nginx forwarding API requests to the server.
3. **Application Layer:** The Node.js and Express server receives messages, processes them and returns JSON responses.

Docker Compose manages the client and server containers and allows them to communicate over a Docker network.

## 4. How the Application Works

1. The user opens the application in a web browser.
2. The user enters a message and clicks the Send Message button.
3. The client sends an HTTP POST request to the server through Nginx.
4. The server receives the message and returns a response.
5. The client displays the server's response to the user.

## 5. How to Run the Application

### Requirements
- Docker Desktop
- A web browser

### Instructions

1. Clone or download this repository.
2. Open a terminal in the project directory.
3. Run the following command:

```bash
docker compose up --build
```

4. Wait for both containers to start.
5. Open the following address in your browser:

http://localhost:8080

6. Enter a message and click Send Message to test communication.

## 6. Conclusion

The application demonstrates client-server communication, HTTP request-response interaction, layered architecture and the use of Docker to run interconnected services locally.
