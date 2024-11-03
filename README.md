# Discord Clone - Frontend

This project is a clone of **Discord**, built with **NextJS** for the frontend and **Spring Boot** for the backend. It currently supports direct messaging (DM) conversations through WebSocket implementation.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)

## Features

- **Direct Messaging (DM):** Real-time one-to-one messaging powered by WebSockets.
- **User Authentication:** User Authentication with Google SignIn and SignUp (have to work on it more for security).
- **Voice Channels:** Planned for future updates.
- **Group Chats:** Planned for future updates.

## Tech Stack

- **Frontend:** NextJS, React
- **Backend:** Spring Boot (API and WebSocket support)
- **WebSocket:** For real-time communication in DM conversations

## Getting Started

To set up the project locally, make sure you have **Node.js** and **npm** installed.

### Prerequisites

- **Node.js** (version >= 14.x)
- **npm** (version >= 6.x)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/RudraSama/discwords.git
   cd discwords 
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Configuration

1. Create a `.env.local` file in the root directory.
2. Add the following environment variables:

   ```plaintext
   NEXT_PUBLIC_CLIENT_ID=
   ```
   `Client ID is for Google Authentication`
   Adjust the URLs based on the backend server configuration.

### Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

### Building for Production

To build the project for production, run:

```bash
npm run build
```

The build files will be available in the `.next` directory, ready for deployment.

