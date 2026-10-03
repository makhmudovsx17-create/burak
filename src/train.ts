// MITASK - R

function calculate(str: string): number {
    return str
        .split("+")
        .reduce((sum: number, n: string) => sum + Number(n), 0);
}

console.log(calculate("1+3"));
console.log(calculate("1+3+5+7"));
console.log(calculate("20+30+40"));

/*
    Traditional FD  => BSSR  => EJS    => Admin
    Modern FD       => SPA   => REACT  => User application
*/

/* Project Standarts:
    - Logging Standards  => Through MORGAN_FORMAT
    - Naming Standards
        * function, method, variable => CAMEL case  goHome
        * class => PASCAL case                      MemberService
        * folder, file => KEBAB case
        * css => SNAKE case                         button_style
    - Error handlings
*/


/* Most used APIs:
    - Traditional API
    - Rest(ful) API
    - GraphQL API
*/