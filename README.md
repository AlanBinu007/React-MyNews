# News App - React

Application to view news stories from sources around the world.

Built with [React](https://reactjs.org/) as frontend JavaScript framework.

## Requirements

- [Create React App](https://github.com/facebook/create-react-app)
- [Bootstrap 4](https://getbootstrap.com/)
- [Node.js](https://nodejs.org/en/) >8.x and [npm](https://www.npmjs.com/)
- [News API](https://newsapi.org/) key

## Installation

### Clone Project

```sh
git clone https://github.com/taiyeoguns/news-app-react.git news-app-react
```

### Install dependencies

Install `npm` dependencies with Yarn:

```
yarn
```

### Get API key for News service

Head to [http://newsapi.org](http://newsapi.org), signup or login to and get an API key


### Add details in `.env.local` file

Create `.env.local` file from example `.env` file and maintain necessary details in it e.g. API key etc

```sh
cp .env .env.local
```

### Development Server
Run `yarn start` for a development server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.


## Other

### Build

```sh
yarn build
```

Builds the app for production to the `build` folder.

### Running unit tests

```sh
yarn test
```

Runs the test watcher in an interactive mode.