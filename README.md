# Monroy Real Estate

Aplicación Monroy Real Estate

## Deployed Version 📦

in progress...

## Stack & Dependencies 🔧

* [React](https://github.com/facebook/create-react-app) - Client Views.
* [Redux](https://github.com/reduxjs/redux)- State manager
* [react-redux](https://github.com/reduxjs/react-redux) - Connect react with redux
* [redux-thunk](https://github.com/reduxjs/redux-thunk) - Middleware for async actions
* [bcryptjs](https://github.com/kelektiv/node.bcrypt.js/) - Hashing passwords
* [jsonwebtoken](https://github.com/jsonwebtoken/jsonwebtoken.github.io) - Tokens
* [config](https://github.com/lorenwest/node-config) - Global variables
* [mongoose](https://github.com/Automattic/mongoose) - Mongoose
* [nodemon](https://github.com/remy/nodemon) - Run Dev Changes
* [concurrently](https://github.com/kimmobrunfeldt/concurrently) - Run Back, and Front
* [MongoDB](https://github.com/mongodb/mongo) - Manage Information of the Users & Lists.
* [Express](https://github.com/expressjs) - API for auth, and lists methods.
* [Node](https://github.com/nodejs/node) - Managing Dependencies.

## Package Changes 📁

`"json-server": "json-server --watch db.json --port 5000"` <br/>
`"dev": "concurrently \"npm start \" \"npm run json-server\""` <br/>
`"proxy": "http://localhost:5000"` <br/>
`"heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"`

## Author 💻

* **[Fraggy](https://github.com/jmfraggy)** - *Lead UI/UX & Front End* 
* **[Mariano](https://github.com/mariano170395)** - *Software Engineer* 
* **[Tony](https://github.com/tonyanaya)** - *Software Engineer* 

## License 📄

This project is under the licence (Name of licence) - look at [LICENSE.md](LICENSE.md) for more details.