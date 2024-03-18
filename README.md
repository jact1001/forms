# Code Challenge

## How to install the project

To facilitate dependency management, this mono-repo uses Lerna to simplify dependency management.

[https://lerna.js.org/](https://lerna.js.org/ "Lerna JS")

For its execution, the following commands must be run
in the root of the directory where the project was downloaded:

1. `nvm use && npm i`
2. `npx lerna clean -y`
3. `npx lerna bootstrap --hoist`
4. `npm run start`


## Main packages
The project has two defined components, Front-end and Back-end, which correspond to the following, respectively

  * __forms-api__ runs at http://localhost:8080/api
  * __forms-web__ runs at http://localhost:3000


# Packages of the project

## forms-api

This project is build with Node Js and Express, and makes a REST API available. Ex: http://localhost:8080/api
Run with the next lines:
1. `cd packages/forms-api`
2. `npm run start`

## forms-web
The items-web package was built using React and Redux, Redux makes it possible to manage the states of the application in a simple way.

 * design form page: http://localhost:3000/form-design
