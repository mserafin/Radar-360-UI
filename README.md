Radar-360-UI
=====

An application written in JavaScript using ES6 and the [p5.js](https://p5js.org/) library.
Software for graphical presentation of data in the browser. Supplementing the [Radar-360-Server](https://github.com/mserafin/Radar-360-Server) project with a presentation layer. It uses socket.io to communicate with the server in real time.


## Initial Setup
- install the current Node.js LTS version if not already installed
- go to the project directory
- create the **server** directory and download the [Radar-360-Server](https://github.com/mserafin/Radar-360-Server) in it


## Project Setup
Do not use ``npm install``. Please run the following command to trigger a Yarn installation of package dependencies.

In the **package.json** file (Radar-360-UI project) for the **"start:radar-server": "node server/index.js 8090 COM6 115200"** task, change the name of the USB serial port to the correct one.


## Start
- run ``yarn build:local`` to update dependencies and build appropriate client bundles
- run ``yarn start`` to start the radar-server and the webpack dev server
- go to [http://localhost:8080](http://localhost:8080)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details