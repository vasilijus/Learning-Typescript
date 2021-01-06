# Building Contacts manager

## Tasks:

- The user will be able to create new details of a person or edit them
- These details will be saved to a client-side database
- The user will be able to load the list of all people
- The user will be able to delete the personal details of a person
- The personal details will consist of the first and last names, the address (made up of two address lines, the town, the county, and the zip code), the phone number, and the date of birth
- The personal details will be saved to the database
- The first name will be at least one character and the last name will be at least two characters
- Address line 1, town, and county will be at least five characters
- The zip code will conform to the American standard for most zip codes
- The phone number will conform to the standard American phone format
- The user can clear details with the click of a button

## Building Mockup 

- [NinjaMock](ninjamock.com)

## Things to keep in mind

- Creating a mock layout to check our layouts
- Creating our React application
- Analyzing and formatting code with tslint
- Adding Bootstrap support
- Using tsx components in React
- The App component in React
- Displaying our personal details UI
- Using binding to simplify our updates
- Creating validators and applying them as validation
- Applying validation in a React component
- Creating and sending data to an IndexedDB database

## Requirements

- IndexDB - data storage.
- [NPM](https://nodejs.org/)

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