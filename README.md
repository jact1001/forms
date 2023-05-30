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

  * __items-api__ runs at http://localhost:5001
  * __items-web__ runs at http://localhost:3000

# Non-functional requirements
## (Architectural decisions - tradeoff)

### Usability
This quality attribute is solved by the designs provided in the requirement.
### SEO
To achieve this quality attribute you must include in the rendering of the page the main meta tags that help with the positioning of the site, this can be achieved using the SSR Server Side Rendering of React.
### Performance
To achieve this quality attribute, cache mechanisms must be implemented using Redis or MemCache in AWS and optimize the use of resources in general.
### Scalability
This quality attribute is closely linked to the deployment, the solution would be to deploy the static content in a S3 bucket with AWS Cloud Front, and the items-web and items-api component in an AWS EKS cluster using Horizontal Pod Autoscaler.


# Packages of the project

## items-api
This application allows to expose 2 endpoints to obtain the items data, the items-api was built using hexagonal architecture to allow to isolate the libraries from the business logic.
![alt text](https://github.com/ir-taimal10/front-end-challenge/blob/master/packages/items-doc/images/hexagonal_arch.PNG?raw=true)


This project is build with Node Js and Express, and makes a REST API available. Ex: http://localhost:5001/rest/items?q=piano
Run with the next lines:
1. `cd packages/items-api`
2. `npm run start`

## items-web
The items-web package was built using React and Redux, Redux makes it possible to manage the states of the application in a simple way.

![alt text](https://github.com/ir-taimal10/front-end-challenge/blob/master/packages/items-doc/images/redux.PNG?raw=true)

The project allows to query ML products using urls like the next:

 * http://localhost:3000/items/MLA1116890684
 * http://localhost:3000/items/MLA1100825910



## Unit tests
unit tests allow to guide the development of each component and to test the different behaviors in each method.
Alister Scott suggests that a testing strategy should be based mostly on automated testing, with more effort on unit testing.

![alt text](https://github.com/ir-taimal10/front-end-challenge/blob/master/packages/items-doc/images/unit_test.PNG?raw=true)


To run the unit tests:

1. `cd packages/items-web/`
2. `npm run test`

## Behavior test
BDT tests allow testing of complete components using a DSL called Gherkin

![alt text](https://github.com/ir-taimal10/front-end-challenge/blob/master/packages/items-doc/images/gherkin_test.JPG?raw=true)

the definition of each of the steps was done using cucumber.js  [Cucumber](https://github.com/cucumber/cucumber-js "Cucumber's Homepage")

To run the bdt tests:

1. `cd packages/items-test-bdt/`
2. `npm run test:bdt`


## Random test
Random tests allow to generate random events on the application under test trying to break the system.

![alt text](https://github.com/ir-taimal10/front-end-challenge/blob/master/packages/items-doc/images/gremlinsjs.PNG?raw=true)

To run the random tests:

1. `cd packages/items-test-random/`
2. `npm run test:random`

[https://github.com/marmelab/gremlins.js](https://github.com/marmelab/gremlins.js "Gremlins")
[https://marmelab.com/gremlins.js/](https://marmelab.com/gremlins.js/ "Gremlins marmelab")

## Load test
Load tests are primarily concerned with evaluating the current performance of your system in terms of concurrent users or requests per second.

![alt text](https://github.com/ir-taimal10/front-end-challenge/blob/master/packages/items-doc/images/k6.PNG?raw=true)

To install k6 on Windows use the latest official .msi package:
[https://dl.k6.io/msi/k6-latest-amd64.msi](https://dl.k6.io/msi/k6-latest-amd64.msi "k6-latest-amd64.msi")


To run the load tests:

1. `cd packages/items-test-load/`
2. `npm run test:load`

[https://github.com/grafana/k6](https://github.com/grafana/k6 "Grafana k6")

