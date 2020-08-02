# Byne Stocks Wallet

This interface was created by me, Rafael Weiss, to attend for a job interview at Byne. This app let you follow the 
stocks you want in real time.

## Prerequisites

### Node & npm

You will need npm to run this application, I recommend an updated one since I used the version 10.21.0.

If you don't have Node.js and npm installed:

#### Ubuntu:

`sudo apt update`

`sudo apt install nodejs`

`sudo apt install npm`

#### Mac:

`brew update`

`brew install nodes`

#### Windows:

Follow the instructions in [phoenixnap.com/kb/install-node-js-npm-on-windows](https://phoenixnap.com/kb/install-node-js-npm-on-windows)

### Docker & Docker Compose

##### Docker
Follow the instructions in [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/)

##### Docker Compose
Follow the instructions in [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

## Setup

After installing Node.js, npm, Docker and Docker Compose, go to the server folder and run: 

`cd server`

`npm install && cd ../client && npm install`

Wait for the installation to finish, then run docker with:

`docker-compose up`

To run the tests use npm test:

`npm test`



# Features
- Full responsive, runs in any screen with width equals or bigger than 375px (Iphone 6).
- Two view modes, list and cards.
- Charts in real time with positive and negative colors.
- Handmade animations.
- StyleGuide included.
- Data from API stored with Redux.
_ API handled with redux saga.
- Tests.

# Useful Links
- [Node.js](https://nodejs.org/)
- [React](https://reactjs.org/)
- [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Material.ui](https://material-ui.com/)
- [Redux](https://redux.js.org/)
- [Saga](https://redux-saga.js.org/)
- [Chart.js](https://www.chartjs.org/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
