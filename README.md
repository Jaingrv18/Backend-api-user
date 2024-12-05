# Backend API with GitHub Actions Deployment

## Overview
This project contains a simple backend API with a single route `/sayHello` that returns a JSON message `{"message": "Hello User"}`. The API is set up to run on port 80.

## GET /sayHello : Returns a greeting message - Hello User.
## GitHub Actions : Automated deployment to a virtual machine.


## Running Locally

## Prerequisites
- Node.js installed on your machine

## Steps:
1. Clone the repository:
   git clone <your-repo-url>
   cd backend-api-user
   npm install
   npm start
   API will run on http://localhost:80.
2. Browser: Open http://localhost:80/sayHello


## Challenge Encountered
1. Handling Confidential SSH Keys - 
   Solution - Stored keys securely using GitHub Actions secrets for safe deployment.
