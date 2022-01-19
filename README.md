# respondr  🗨️
A basic chat app

## Application Structure  🏗️
The intent of this project is to creat a very basic chat app. This app leverages Vuejs, and NodeJS using Express and WebSockets.

VueJS was chosen due to my familiarity with the library and vue-cli should give us the tooling we need to standup the front-end of this app quickly

NodeJS was chosen as our server because Express servers are quick to standup and this is not a computationally heavy task with a limited amount of concurrent users.

Websockets were added for near-real time communication between the server and clients. 

## How to install  💾
In a terminal window navigate to a directory this repo will reside, then:
```
git clone https://github.com/JamesFranc/respondr.git
yarn install
yarn serve
```

The terminal should display the following output:
```
$ concurrently "yarn start-server" "yarn start-client"
$ node ./server/server.js
$ cd ./client && vue-cli-service serve
[0] Server listening on port 3000
[1]  INFO  Starting development server...
[1]  DONE  Compiled successfully in 1157ms4:12:35 AM
[1]
[1]
[1]   App running at:
[1]   - Local:   http://localhost:8080/
[1]   - Network: http://192.168.1.11:8080/
[1]
[1]   Note that the development build is not optimized.
[1]   To create a production build, run yarn build.
[1]
```

To test this solution:
- open up two separate browser windows 
- navigate each one to http://localhost:8080/
- Select a different user in each window
- Send messages
 
🎉


## Troubleshooting tips  🗒️

Press `ctrl+c` two times in the same terminal window `yarn serve` was invoked. This will ensure both the server and client yarn commands are stopped.

If any errors are present feel free to create an issue and it will get addressed in a reasonable amount of time


