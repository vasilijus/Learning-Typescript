# Features

## Requirements

- [NPM](https://nodejs.org/)
- TypeScript

## Start Using

Init a tsconfig.json file.
```
{
    "compilerOptions": {
        "target":"ES2015",
        "module": "commonjs",
        "sourceMap": true,
        "outDir": "./script",
        "strict": true,
        "strictNullChecks": true,
        "strictFunctionTypes": true,
        "noImplcitThis": true,
        "alwaysStrict": true,
        "noImplicitReturns": true,
        "noFallthroughCasesInSwitch": true, 
        "esModuleInterop": true,
        "experimentalDecorators": true,
    }
}
```

Install TS as a dependancy
```
npm install typescript --save-dev
```

## Plan
 - app to parse markdown
 - client will type onto a textarea
 - every type the textarea changes , we will parse the entire document
 - we will break the document down based on wherew the user presses the 'Enter Key'
 - the opening characters will determine wheter or noit the line is markdown 
 - entering # followed by a space is replaced to H1 Heading A , ## = h2, ### = h3
 - entering --- is replaced by a <hr>
 - if line is empty it is treated as paragraph
 - the result will be desplayed in a 'Label'
 - if the textarea = null , label text = ''
 - the layout will be done with Bootstrap


## Building UI 