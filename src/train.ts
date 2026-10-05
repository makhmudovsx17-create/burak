// MITASK - S

function missingNumber(arr: number[]): number {
    const n = arr.length;
    const total = (n * (n + 1)) / 2;

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return total - sum;
}

console.log(missingNumber([3, 0, 1]));

/* Frontend development
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

/* Cookies:
    request join
    self destroy
*/

/* Validations:
    -  Frontend validation
    -  Backend validation
    -  Database validation
*/