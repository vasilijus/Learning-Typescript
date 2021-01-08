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

function IsInRole( role : string) : boolean {
    return currentUser.roles.some( r => r.role === role );
}
// Now create a User & Admin roles users
let currentUser = { user: "Pedro", roles: [{role: "user"}, {role: "admin"}] };
function TestDecoratorExample( decoratorMethod : IDecoratorExample ) {
    console.log(`Current user: ${currentUser.user}`);
    decoratorMethod.AnyoneCanRun(`Running as user`);
    decoratorMethod.AdminOnly(`Running as admin`); 
}



TestDecoratorExample( new NoRoleCheck );

class DecoratedExampleMethodDecoration implements IDecoratorExample {
    AnyoneCanRun(args:string) : void {
        console.log(args);
    }
    @Admin
    AdminOnly(args:string) : void {
        console.log(args);
    }
}

function Role(role : string) {
    return function(target: any, propertyKey : string | symbol, descriptor 
    : PropertyDescriptor) {
        let originalMethod = descriptor.value;
        descriptor.value = function() {
            if (IsInRole(role)) {
                originalMethod.apply(this, arguments);
                return;
            }
            console.log(`${currentUser.user} is not in the ${role} role`);
        }
        return descriptor;
    }
}
