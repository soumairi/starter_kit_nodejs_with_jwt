# Node.js Rest APIs with Express, Sequelize & MySQL example

## Features

 - CORS enabled
 - Express + Mysql2 ([Mysql2](https://github.com/sidorares/node-mysql2))
 - Sequelize ([Sequelize](https://sequelize.org/))
 - Load environment variables from .env files with [dotenv](https://github.com/rolodato/dotenv-safe)
 - bcrypt.js [bcrypt.js](https://github.com/dcodeIO/bcrypt.js)
 - jsonwebtoken [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)

## Requirements

 - [Node v14.18+](https://nodejs.org/en/download/current/)
 - [Yarn](https://yarnpkg.com/en/docs/install)

## Getting Started

#### Clone the repo and make it yours:

```bash
git clone --depth 1 https://github.com/soumairi/starter_kit_nodejs_with_jwt.git
cd starter_kit_nodejs_with_jwt.git
rm -rf .git
```

#### Install dependencies:

```bash
npm install
```
#### Set environment variables:

```bash
cp .env.example .env
```
#### Run
```bash
node server.js
```