# Idea keeper

A basic idea app using React, Redux and Redux-saga.

<img width="643" src="https://user-images.githubusercontent.com/122096/48159580-7f7ef580-e2cd-11e8-823c-f0cf4373a639.png">

## Approach
I worked on this on and off throughout the day. I had 3 milestones.

1. Get a simple React app rendering some fake ideas without any logic or interactions.
2. Introduce some interactions backed by Redux for state management
3. Persist changes to a backend using redux-saga to manage side-effects

I took a TDD approach where I felt it was appropriate and aimed to produce code that is as close to production ready as I could in the time.

The commit log should give you a good idea of how the project evolved from a bootstrapped React app.

If you'd like me to have a go at some of the stretch requirements i'd be happy to. I'd also welcome any questions concerning my approach.

## Known limitations

### The backend is not as specified
The backend API i've used does not match the one in the spec — I felt it was really important to get a working app that I could interact with and get a feel for from the outset. I've pushed all of those API calls to the edge of the app where they can be easily updated to match the requirements.

### `created_date` is not set
I would expect the backend to supply this when the idea is initially created.

### Only tested in Chrome with the server running on a Mac
I have not tested this on any other environments

### Errors are not handled
In particular the network is vulnerable to errors and these are not currently handled. The simplest solution would be to catch these errors in the corresponding saga and add a generic error component to surface them to the user.

## Running the app

After running `npm install` or `yarn install` in the project directory, you can start the app using `npm start` or `yarn start` — this runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

There are actually two servers running the first is the standard `webpack-dev-server` while the second is `json-server` a simple prototyping RESTful backend — dummy data is inserted into the `db.json` file at the root of the project.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).