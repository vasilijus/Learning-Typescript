# Features

## Requirements

- [NPM](https://nodejs.org/)
- TypeScript

## Start Using

```
npm install typescript --save-dev
```

If not globally installed, it can be called with:

```
npx tsc  (--init) 
```
Which generates (tsconfig.json) file

Or make one yourself and add options: 
```
{
  "compilerOptions": {
    "target": "ES2015",
    "module": "commonjs",
    "lib": [ "ES2015", "dom" ],
    "sourceMap": true,
    "outDir": "./script", 
    "strict": true, 
    "strictNullChecks": true, 
    "strictFunctionTypes": true, 
    "noImplicitThis": true, 
    "alwaysStrict": true, 
    "noImplicitReturns": true, 
    "noFallthroughCasesInSwitch": true,
    "esModuleInterop": true,
    "experimentalDecorators": true, 
  }
}
```

## Compile TS to JS

will auto compile the directory 
```
(npx) tsc 
```

## Using diffrent types

### Strings | numbers
```
class RangeValidationBase {
     constructor(private start : number, private end : number) { }
     protected RangeCheck(value : number) : boolean {
         return value >= this.start && value <= this.end;
     }
     protected GetNumber(value : string) : number {
        return new Number(value).valueOf();
     }
 }
```

### Combine types with intersection types
```
class Grid {
    Width: number = 0;
    Height: number = 0;
}
class Margin {
    Left: number = 0;
    Right: number = 0;
}
function consolidate( grid : Grid, margin Margin ) : Grid & Margin {
    let consolidateGrid = <Grid & Margin>{};
        consolidateGrid.Width  = grid.Width;
        consolidateGrid.Height = grid.Height;
        consolidateGrid.Left   = grid.Left;
        consolidateGrid.Right  = grid.Right;
    return consolidateGrid;
}
```

### Type alisases
```
type StringOrNum = string | number;

class UnionRangeValidationWithTypeAlias extends RangeValidationBase {
    InRange( value : StringOrNum ) : boolean {
        if( typeof value = "number" ) {
            return this.RangeCheck(value);
        }
        return this.RangeCheck(this.getNumber(value) );
    }
}
```

### Assign props using object spread
```
function ConsolidatedGrid(grid : Grid, margin : Margin) : Grid  & Margin {
    let consolidatedGrid = <Grid & Margin>{...margin};
        consolidatedGrid.Width += grid.Width;
        consolidatedGrid.Height += grid.Height;
        consolidatedGrid.Padding = margin.Padding ? margin.Padding : grid.Padding;
    return consolidatedGrid;
}

```

### Deconstruct objects with REST props
```
let guitar = { 
    manufacturer: 'RolingStones', type: 'Jem01', strings: 6
};
// One way
const manufacturer  = guitar.manufacturer;
const type          = guitar.type;
const strings       = guitar.strings;
// Second way
let { manufacturer, type, strings } = guitar;w
```

### Coping with a variable number of parameters using REST
```
function PrintInstruments(log : string, ...instruments : string[]) : void {
    console.log(log);
    // or add them to an Array , starting from the 1 item
    instruments.forEach(instrument => {
        console.log(instrument);
    });
}
PrintInstruments('Music Shop Inventory', 'Guitar', 'Drums', 'Clarinet', 'Clavinova');
```

### AOP using decorators
```
interface IDecoratorExample {
    AnyoneCanRun( args: string ) : void;
    AdminOnly( args: string ) : void;
}
class NoRoleCheck implements IDecoratorExample {
    AnyoneCanRun(args: string): void {
        if (!IsInRole("user")) {
            console.log(`${currentUser.user} is not in the user role`);
            return;
        };
        console.log(args);
    }   
    AdminOnly(args: string): void {
        if (!IsInRole("admin")) {
            console.log(`${currentUser.user} is not in the admin role`);
        };
        console.log(args);
    }
}
// Now create a User & Admin roles users
let currentUser = { user: "Pedro", roles: [{role: "user"}, {role: "admin"}] };
function TestDecoratorExample( decoratorMethod : IDecoratorExample ) {
    console.log(` ${currentUser.user}`);
    decoratorMethod.AnyoneCanRun(`Running as user`);
    decoratorMethod.AdminOnly(`Running as admin`); 
}
TestDecoratorExample( new NoRoleCheck );
```

## Before Writing code , TS needs to know we are using decorators
```
tsc --target ES5 --experimentalDecorators
```
Or setup oprions ins tsconfig.json
```
compilerOptions": {
    "target": "ES5",
    // other parameters….
    "experimentalDecorators": true
}
```


## Compose types using mixins
```
class ActiveRecord {
    Deleted = false;
}
class Person extends ActiveRecord {
    constructor(firstName : string, lastName : string) {
        this.FirstName = firstName;
        this.LastName = lastName;
    }

    FirstName : string;
    LastName : string;
}
```