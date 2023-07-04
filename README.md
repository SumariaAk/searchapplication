# Search application 

This is a full stack application that searched the internet for information regarding the topic submitted byt the use.

## Table of Contents

- [Search application](#search-application)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Architecture Overview](#architecture-overview)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [API Documentation](#api-documentation)
  - [GitHub Actions](#github-actions)
    - [Secrets](#secrets)
    - [Variables](#variables)
  - [Installation and Usage](#installation-and-usage)
  - [License](#license)

## Introduction

This is a web application that utilizes a React.js frontend and a serverless backend built with the Serverless Framework and Node.js. The frontend interacts with the backend via a API call to retrieve data from the internet by using Google search API.

## Architecture Overview

The architecture of this project consists of the following components:
1. Topic Search: When user submits a topic to be searched
2. API call: Frontend calls the API and Returns the results to the user
3. Backend API: It is a POST request which searched the topic from request body using the Google search API

## Frontend

The frontend of the application is built using React.js. It makes an API call to the backend when user submits the topic.
Used serverless-finch plugin

## Backend

The backend is built using the Serverless Framework and Node.js. It consists of a Lambda function:

**Search function**: This function is triggered on Http POST request, it reads the topic from the request and searches the internet via the Google search API.


## API Documentation

The API documentation, including the available endpoints and their descriptions, can be found in the [Postman Collection](https://documenter.getpostman.com/view/18012753/2s93z5Ak75#3ccf505a-bf62-44d4-bfd0-b1327f07ed4b) file.


## GitHub Actions

A GitHub Actions workflow has been set up to trigger on every push to the main branch. This workflow automatically builds and deploys the application.

### Secrets

1. The API_KEY from Google Creds [API_KEY](https://console.cloud.google.com/apis/credentials)

```
API_KEY
```

2. The CX secret [CX](https://developers.google.com/custom-search/v1/overview)

```
CX
```

### Variables

HOST_S3_BUCKET_NAME - Bucket name of you domain name - e.g 'www.example.me'
```
HOST_S3_BUCKET_NAME
```

Serverless framework application name
```
APP_NAME
```
Serverless framework organization name 
```
ORG_NAME
```

## Installation and Usage

To set up the project locally, follow these steps:

1. Clone the repository: 

```
`git clone https://github.com/SumariaAk/.git`
```
1. Install dependencies in client, client/my-app and server folders
2. Create .env files in server and client folder with below variables

server/.env

```
        APP_NAME={serverless framework application name} 
        ORG_NAME={serverless framework organization name}
        API_KEY={API_KEY provided by Google search API}
        CX={CX provided by Google search API}
```
client/.env

```
        APP_NAME={serverless framework application name}
        ORG_NAME={serverless framework organization name}
        HOST_S3_BUCKET_NAME={AWS S3 host name}
```

3. Run below command in server folder to create the domain

```
serverless create_domain
```

4. Run below command in server folder to deploy the backend

```
serverless deploy
```

5. Run below command in client folder to build the client

```
serverless client build
```

6. Run below command in client folder to deploy the client

```
serverless client deploy --no-confirm
```

## License

This project is licensed under the [MIT License](LICENSE).