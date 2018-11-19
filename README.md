# my-diary-react-redux

[![Build Status](https://travis-ci.org/olusoladavid/my-diary-react-redux.svg?branch=staging)](https://travis-ci.org/olusoladavid/my-diary-react-redux)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1f3cec3aa9ebe9d246b1/test_coverage)](https://codeclimate.com/github/olusoladavid/my-diary-react-redux/test_coverage)

A React-Redux based client (frontend) that consumes MyDiary API and interfaces users with the service. The API can be found at [https://my-diary-backend.herokuapp.com/api/docs](https://my-diary-backend.herokuapp.com/api/docs)

## Features

- Users can create an account and log in.
- User can view all entries to their diary.
- Users can view the contents of a diary entry.
- Users can add or modify an entry.
- Users can delete an entry
- Users can like an entry
- Users can view the journaling profile and performance

## Libraries and Tools

- React
- Redux
- Webpack 4
- Babel 7


## API Endpoints Consumed

| Endpoint                    | Functionality        |
| --------------------------- | -------------------- |
| POST `/auth/signup`         | Register a user      |
| POST `/auth/login`          | Login a user         |
| GET `/profile`              | Fetch user profile   |
| PUT `/profile`              | Update user profile  |
| GET `/entries`              | Fetch all entries    |
| GET `/entries/<entryId>`    | Fetch a single entry |
| POST `/entries`             | Create an entry      |
| PUT `/entries/<entryId>`    | Modify an entry      |
| DELETE `/entries/<entryId>` | Delete an entry      |

## Setup

- Clone repo and cd into directory

```
git clone https://github.com/olusoladavid/my-diary-react-redux
```

- Install dependencies with `npm install`
- Run `npm start` to start dev server
- Run `npm run build` to build app

## Live Demo

- [https://mydiary.netlify.com](https://mydiary.netlify.com)

## API Docs

- [https://my-diary-backend.herokuapp.com/api/docs](https://my-diary-backend.herokuapp.com/api/docs)

## License

- MIT
