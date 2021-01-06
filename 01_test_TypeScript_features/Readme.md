# Features

## Requirements

- [NPM](https://nodejs.org/)
- TypeScript
```
npm install typescript --save-dev
```

If not globally installed, it can be called with:

```
npx tsc  (--init) 
```
Which generates (tsconfig.json) file

## Components required

- @types/bootstrap (4.1.3 or later)
- @types/reactstrap (6.4.3 or later)
- bootstrap (4.1.3 or later)
- react (16.6.3 or later)
- react-dom (16.6.3 or later)
- react-script-ts (3.1.0 or later)
- reactstrap (6.5.0 or later)
- create-react-app (2.1.2 or later)


## Creating the app 

### Got to install React tools to work.

```
create-react-app
```

React does not use TypeScript by default.

```
npx create-react-app chapter03 --scripts-version=react-scripts-ts   // package is deprecated at the time I'am doing this. Instead it advises : 

The react-scripts-ts package is deprecated. TypeScript is now supported natively in Create React App. You can use the --template typescript option instead when generating your app to include TypeScript support. Would you like to continue using react-scripts-ts?
```

### It automatically makes it a [yarn](https://classic.yarnpkg.com/en/docs/cli/run) project