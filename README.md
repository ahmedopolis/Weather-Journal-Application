# Outdoor Journal ⛈️☀️🌬️

![Application Logo](weather-app-shieldslogo.svg)
![Api Logo](OpenWeatherMap-Api-orange.svg)</br>
The herein repository host the necessary assets for a Weather-Journal Application called "Outdoor Journal." It consists of an asynchronous web application that uses Web API and user data to update its user-interface.

## Table of Content

1. [Design](#Design)
2. [Instructions](#Instructions)
   - [Download repository files](#Download repository files)
   - [Setup environment](#Setup environment)
   - [Add module and dependencies](#Add module and dependencies)
   - [Add the OpenWeatherMap Api key](#Add the OpenWeatherMap Api key)
   - [Run the server](#Run the server)
3. [Examples](#Examples)
4. [Tools](#Tools)
5. [License](#License)

## Design

## Instructions

### Download repository files

To have access to the assets necessary for the project, you may download the 'zip file' directly from the herein repository. Otherwise, you can clone the repository by using Git (<https://github.com/aimogue/Weather-Journal-Application.git>), Github CLI (gh repo clone aimogue/Weather-Journal-Application) or Github Desktop. For more information on to clone a repository, please use the following link: <https://docs.github.com/en/free-pro-team@latest/github/using-git/which-remote-url-should-i-use>.

### Setup environment

Once the assets are within a folder, the environment needs to be setup. To do-so, it would be worthwhile using Git commands. For more information on how to setup Git on PC, please use the following link: <https://www.computerhope.com/issues/ch001927.htm>. To use the herein project, it will be necessary to have both Node.js and npm. To download them, please use the following link: <https://www.npmjs.com/get-np>.
</br></br>
To check if Node.js is installed, run the following command in the terminal:

```bash
node -v
```

To confirm that npm is installed, run this command in the terminal:

```bash
npm -v
```

To initialize the project, use the following command:

```bash
npm init
```

### Add module and dependencies

Use the following line, to add Node.js, Express.js and cors.

```bash
npm i node express cors
```

### Add the OpenWeatherMap Api key

Create an empty 'dotenv' file. Then, you need to fetch your api key. Go to <https://openweathermap.org/ap>, find the 'Current Weather Data' collection and subscribe to the free-tier. Then, retrieve the api key and place it in your 'dotenv' file.

### Run the server

Use the following command to launch the project:

```bash
npm run server.js
```

## Examples

## Tools

This webpage uses the following technologies for the front-end: HTML, CSS, and JavaScript (Vanilla). It also uses JavaScript on the server-side with Node.js and Express.js. The weater data is extracted via an api from <https://openweathermap.org/>.

## License

This codebase is a public domain, so feel free to use this repo for what you want.
