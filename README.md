# Documentation for setting up Grorapid Front end

## Requirements
1. NodeJS Version Requirement:  Node.js v8.15.1 and above
2. Curiosity to learn and build things :smiley:

## Initialization

```Shell
npm install --save
```
## Development
```Shell
npm run start
```

## Production
```Shell
npm run start:production
```

## Build project
```Shell
npm run build
```

## Linting 
Lint your JS and CSS files
```Shell
npm run lint:eslint:fix
```

## Structure of the Application
### Containers:
- Container will be our main go to folder for adding new pages or new routes

### Components:
- Components folder will be our main folder to add base and common components for whole application

### utils:
- Utils folder will be our main common utility folder where app the constants and configuration will be defined

### helpers:
- Helpers folder will be our common helpers where all the common helpers for e.g validation helpers, internationalization helpers, 


## *For any Feature change or changes make seperate diffrent branch with your name in prefix for e.g* 
    Branch: mayank/added-onboarding

## *Commiting code includes **eslint check**, so first you have to fix all eslint errors before commiting any change*
## npm run generate container test

